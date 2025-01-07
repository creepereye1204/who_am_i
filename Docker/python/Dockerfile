FROM python:3.10.12

# pyenv 설치
RUN curl https://pyenv.run | bash
ENV PATH="/root/.pyenv/bin:/root/.pyenv/shims:$PATH"

# 필요한 패키지 설치
RUN apt-get update && apt-get install -y \
    build-essential \
    git \
    && rm -rf /var/lib/apt/lists/*

# Poetry 설치
RUN curl -sSL https://install.python-poetry.org | python3 -
ENV PATH="$HOME/.local/bin:$PATH"  


COPY ./app /app

# 작업 디렉토리 설정
WORKDIR /app

# 포트 노출
EXPOSE 8000

# (종료되지 않도록)
CMD ["tail", "-f", "/dev/null"]

