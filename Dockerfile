FROM alpine:latest as linux

LABEL name="xiidocs"
LABEL version="1.0.0"
LABEL maintainer="Vladimir Lukyanov | vladimir@lukyanov.net"
LABEL description="Docker container for XII/Grid generator"

ARG SASS_VERSION="1.69.5"
ARG SASS_URL=https://github.com/sass/dart-sass/releases/download/${SASS_VERSION}/dart-sass-${SASS_VERSION}-linux-x64.tar.gz

RUN apk update && apk add curl

WORKDIR /tmp

RUN curl -sOL $SASS_URL
RUN tar -xzf dart-sass-${SASS_VERSION}-linux-x64.tar.gz

# WORKDIR /app

# RUN npm i --save-dev