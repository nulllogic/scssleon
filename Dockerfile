FROM node:current-slim as astro

LABEL version="1.0.0"
LABEL maintainer="Vladimir Lukyanov | vladimir@lukyanov.net"
LABEL description="Docker container for XII/Grid generator"

WORKDIR /app

COPY package.json .

RUN ["npm", "i"]

CMD ["npm", "run", "watch"]