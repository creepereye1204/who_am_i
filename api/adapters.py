# myapp/views.py
import logging
from django.contrib.auth import login
from django.http import HttpResponse
from .models import User
from allauth.socialaccount.adapter import DefaultSocialAccountAdapter
from .exceptions import EmailNotVerifiedException
from django.db import IntegrityError, OperationalError

logger = logging.getLogger(__name__)


class CustomSocialAccountAdapter(DefaultSocialAccountAdapter):
    def pre_social_login(self, request, sociallogin):
        user_ip = request.META.get("REMOTE_ADDR")  # 사용자의 IP 주소 가져오기
        user_info = sociallogin.account.extra_data
        is_email_verified = user_info.get("email_verified")
        prefix_email = user_info.get("email").split("@")[0]  # 이메일의 '@' 앞부분 가져오기

        try:
            # 사용자 생성 또는 조회
            User.objects.get_or_create(user_id=prefix_email)

            if not is_email_verified:
                raise EmailNotVerifiedException("이메일이 인증되지 않았습니다.", user_email=user_info.get("email"))

            # 세션에 사용자 정보 저장
            request.session["user_id"] = prefix_email
            request.session["icon"] = user_info.get("picture")
            request.session["name"] = user_info.get("name")

            logger.info(f"{prefix_email} - {user_ip} 로그인 성공")

        except IntegrityError as e:
            logger.error(f"무결성 오류 발생: {e}")
            return HttpResponse("무결성 오류가 발생했습니다.", status=400)

        except EmailNotVerifiedException as e:
            logger.warning(f"인증되지 않은 이메일: {e.user_email}")
            return HttpResponse("이메일이 인증되지 않았습니다.", status=403)

        except OperationalError as e:
            logger.error(f"작업 실패: {e}")
            return HttpResponse("작업 실패", status=500)

        except Exception as e:
            logger.error(f"알 수 없는 오류 발생: {e}")
            return HttpResponse("서버 오류가 발생했습니다.", status=500)

        finally:
            logger.info(f"{prefix_email} - {user_ip} 로그인 시도")

        return HttpResponse("로그인 처리 완료", status=200)

    def save(self, request, sociallogin):
        # 소셜 계정 저장 동작을 비활성화
        pass
