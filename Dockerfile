FROM alpine:latest AS linux

LABEL name="scssleon"
LABEL version="1.0.0"
LABEL maintainer="Vladimir Lukyanov | vladimir@lukyanov.net"
LABEL description="Docker container for SCSSleon generator"

ARG SASS_VERSION="1.89.2"

RUN apk update && apk add curl

WORKDIR /tmp

# 1st command
# var `arch` get architecture type

# 2nd command
# -s silent
# -f no output at all on server errors
# -S show an error message if it fails
# -L server reports that the requested page has moved to a different location

RUN TARGET_ARCH=$(arch | sed s/aarch64/arm64/ | sed s/x86_64/x64/) &&  \
  curl -fsSL https://github.com/sass/dart-sass/releases/download/${SASS_VERSION}/dart-sass-${SASS_VERSION}-linux-${TARGET_ARCH}-musl.tar.gz |  \
  tar -xvz --strip-components 1 -C /opt/

WORKDIR /app

ENTRYPOINT [ "/opt/sass" ]