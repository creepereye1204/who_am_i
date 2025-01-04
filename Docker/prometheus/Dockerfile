FROM prom/prometheus:latest

# Prometheus 데이터 저장소 디렉토리 생성
RUN mkdir -p /prometheus

# Prometheus 설정 파일을 컨테이너에 복사
COPY prometheus.yml /etc/prometheus/prometheus.yml

# Prometheus 실행
ENTRYPOINT ["/bin/prometheus"]
CMD ["--config.file=/etc/prometheus/prometheus.yml", "--storage.tsdb.path=/prometheus"]
