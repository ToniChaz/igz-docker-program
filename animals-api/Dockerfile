FROM node:10

LABEL maintainer="Álvaro Perdiz<alvaro.perdiz@intelygenz.com>"
LABEL version="1.0"
LABEL description="Dockerfile example"

ENV NAME=igz-docker
ENV PORT=3000

RUN apt-get update && apt-get upgrade -y

WORKDIR /opt/$NAME

COPY package.json package.json
RUN npm i

COPY entrypoint.sh entrypoint.sh
COPY nodemon.json nodemon.json
COPY tsconfig.json tsconfig.json
COPY tslint.json tslint.json

COPY src src

RUN npm run build

EXPOSE $PORT

ENTRYPOINT ["./entrypoint.sh"]

