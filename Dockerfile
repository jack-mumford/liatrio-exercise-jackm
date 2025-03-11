FROM node:18-alpine

WORKDIR /user/src/index

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80

CMD ["node", "index.js"]