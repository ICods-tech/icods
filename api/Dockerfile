FROM node:15.8.0-alpine3.13

EXPOSE 5000

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build
