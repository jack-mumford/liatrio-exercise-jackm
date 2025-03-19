FROM node:16.20.2-alpine


WORKDIR /user/src/index


COPY package*.json ./


RUN npm install


COPY . .


EXPOSE 80


CMD ["node", "index.js"]
