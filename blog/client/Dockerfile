FROM node:16-alpine

ENV CLI=true
ENV WDS_SOCKET_PORT=0

WORKDIR /app

COPY package.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "start"]