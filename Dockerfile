FROM node:15

EXPOSE 3333

WORKDIR /app

COPY ./package.json ./yarn.lock ./

RUN yarn install

COPY . .

CMD ["npm","build"]
