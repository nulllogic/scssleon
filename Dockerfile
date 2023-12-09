FROM alpine:latest as linux

LABEL name="xiidocs"
LABEL version="1.0.0"
LABEL maintainer="Vladimir Lukyanov | vladimir@lukyanov.net"
LABEL description="Docker container for XII/Grid generator"

RUN apk update && apk add nodejs npm && npm install -g sass

ENV NODE_PATH=/usr/lib/node_modules

WORKDIR /app

COPY ./package.json .

RUN npm i --save-dev