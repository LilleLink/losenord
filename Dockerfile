FROM node:14-alpine
WORKDIR /user/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm build

CMD [ "node", "server.js" ]