FROM node:15

EXPOSE 5000

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

CMD [ "npm","dev:server" ]
