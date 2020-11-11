FROM node:11-alpine

ENV PRIVKEY="adefaee8ac5cb4bb0a0e53654f77cdb0829d0eec7dbe37cf86a5d11beb1aed23"
RUN apk add python alpine-sdk libsodium-dev libtool autoconf automake

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install yarn 
RUN yarn

COPY --chown=node:node . .

EXPOSE 8080

CMD [ "node", "app.js" ]
