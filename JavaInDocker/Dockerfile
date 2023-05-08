FROM node:slim

WORKDIR /app

COPY ./entrypoint.sh /scripts/entrypoint.sh

RUN /scripts/entrypoint.sh

CMD "npm run start"
