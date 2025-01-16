FROM python:3.10.12

# pyenv 설치
RUN curl https://pyenv.run | bash
ENV PATH="/root/.pyenv/bin:/root/.pyenv/shims:$PATH"

# 필수 패키지 설치
RUN apt-get update && apt-get install -y \
    build-essential \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Node.js 및 npm 설치
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# npm을 전역으로 사용할 수 있도록 환경 변수 설정
ENV PATH="/usr/local/bin:$PATH"

# Poetry 설치
# RUN curl -sSL https://install.python-poetry.org | python3 - 
# ENV PATH="$HOME/.local/bin:$PATH"

# Poetry 설치
RUN pip install poetry==1.8.4
# 앱 파일 복사
COPY ./app /app
WORKDIR /app
RUN poetry config virtualenvs.in-project true
RUN poetry install --no-interaction --no-ansi && poetry add django_prometheus --no-interaction --no-ansi


# app/frontend 디렉토리로 이동하여 package.json 설치
WORKDIR /app/frontend
RUN npm install && npm install --save-dev webpack webpack-cli

WORKDIR /app
RUN poetry run make -f dev init


# 포트 노출
EXPOSE 8000

# (종료되지 않도록)
CMD ["tail", "-f", "/dev/null"]
