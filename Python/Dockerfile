FROM python:slim

# ENV PYDEVD_DISABLE_FILE_VALIDATION=1
ENV PYTHONUNBUFFERED = 1

WORKDIR /app

COPY ./entrypoint.sh /scripts/entrypoint.sh
COPY ./requirements.txt /scripts/requirements.txt

RUN /scripts/entrypoint.sh
