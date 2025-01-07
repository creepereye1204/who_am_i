# Locust 이미지를 위한 기본 이미지 설정
FROM python:3.10-slim

# 작업 디렉토리 설정
WORKDIR /app

RUN pip install locust

EXPOSE 8089

# (종료되지 않도록)
CMD ["tail", "-f", "/dev/null"]