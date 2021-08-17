FROM node:15

EXPOSE 3333

WORKDIR /app

COPY ./api/package.json ./api/yarn.lock ./

RUN yarn install

COPY ./api ./

CMD [ "npm","build" ]
