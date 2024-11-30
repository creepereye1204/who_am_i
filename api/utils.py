import os
from typing import List
from .models import ReadMe
from rest_framework.exceptions import ValidationError
from django.core.cache import cache


class SubView:
    @staticmethod
    def create_readme(project_id: int, files: List):
        """
        리드미 파일 체크하고, 이미지 파일과 마크다운 파일을 project_id로 ReadMe 모델에 저장함

        Args:
            project_id (int): ProjectInfo 테이블의 기본키

        Returns:
            None : 리턴값 없음

        Raises:
            ValidationError: 마크다운 없으면 예외발생 시킬꺼임

        """
        markdown_file = None

        image_files = []

        for file in files:

            _, extension = os.path.splitext(file.name)

            if extension.lower() == ".md":
                markdown_file = file
            elif extension.lower() in [".png", ".jpg", ".jpeg", ".gif"]:
                image_files.append(file)
        if markdown_file is None:
            raise ValidationError("마크다운 파일이 없습니다.")
        else:
            files = image_files + markdown_file
            for file in files:
                ReadMe.objects.create(project_id=project_id, file=file)

            cache_key = f"readme_{project_id}"
            cache.set(cache_key, serializer.data, timeout=None)
