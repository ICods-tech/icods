FROM node:15 as builder

EXPOSE 3333

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .
#RUN npm install phantomjs-prebuilt@2.1.13 --ignore-scripts
#RUN npm install --target_arch=x64 --target_platform=linux
#RUN npm install bcrypt --target_arch=x64 --target_platform=linux
RUN npm install

COPY . .

CMD ["npm", "run", "build"]

# FROM node

# WORKDIR /app

# COPY --from=builder /app/dist ./app/dist
# COPY --from=builder /app/node_modules ./app/node_modules

# CMD ["node", "/dist/infra/server.js"]
