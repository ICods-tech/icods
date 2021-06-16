FROM node:15

EXPOSE 5000

WORKDIR /app

COPY ./api/package.json ./api/yarn.lock ./

RUN yarn install

COPY . .

CMD [ "npm","dev:server" ]
