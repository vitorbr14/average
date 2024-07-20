FROM node:18-alpine

WORKDIR /app
COPY package.json .
COPY . /app

RUN npm install


RUN npm run build


EXPOSE 5656


CMD ["node", "dist/index.js"]