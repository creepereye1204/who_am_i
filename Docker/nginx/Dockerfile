FROM nginx:latest

# Certbot 및 Nginx 플러그인 설치
RUN apt-get update && \
    apt-get install -y certbot python3-certbot-nginx && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# SSL 인증서와 키를 저장할 디렉토리 생성
RUN mkdir -p /etc/nginx/certs

# Let's Encrypt 인증서 검증을 위한 디렉토리 생성
RUN mkdir -p /var/www/certbot

# sites-available 및 sites-enabled 디렉토리 생성
RUN mkdir -p /etc/nginx/sites-available && \
    mkdir -p /etc/nginx/sites-enabled

# 사이트 설정 파일 복사
COPY ./python.conf /etc/nginx/sites-available/python.conf
RUN ln -s /etc/nginx/sites-available/python.conf /etc/nginx/sites-enabled/python.conf


# Nginx가 사용할 포트 노출
EXPOSE 80 443

# Nginx 시작
CMD ["nginx", "-g", "daemon off;"]