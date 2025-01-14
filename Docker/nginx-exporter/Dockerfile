# nginx-exporter/Dockerfile
FROM nginx/nginx-prometheus-exporter:latest

# Exporter의 기본 설정을 사용
CMD ["-nginx.scrape-uri", "http://nginx/nginx_status"]
