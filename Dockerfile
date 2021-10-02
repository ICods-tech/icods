FROM node:15

EXPOSE 3333

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

#RUN npm i phantomjs-prebuilt@2.1.13 --ignore-scripts
#RUN npm i --target_arch=x64 --target_platform=linux
#RUN npm i bcrypt --target_arch=x64 --target_platform=linux
RUN npm install

COPY . .
CMD ["npm","run","build"]
