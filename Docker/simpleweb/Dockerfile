FROM node:14-alpine

WORKDIR /usr/app

# Copy only package.json
COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "start"]