FROM node:14

RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY config/ /app/config/
COPY controllers/ /app/controllers/
COPY views/ /app/views/

EXPOSE 8000

CMD ["npm", "start"]
