FROM node:17-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000
# react apps run on 3000 by default

CMD ["npm", "start"]