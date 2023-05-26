FROM node:13

WORKDIR /usr/src/app

COPY package*.json ./

# Установите зависимости
RUN npm install

COPY . .

EXPOSE 3001


CMD [ "node", "server.js" ]
