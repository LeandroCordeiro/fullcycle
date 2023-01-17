FROM node:12
COPY ./node/index.js .
RUN npm install express
RUN npm install mysql2
# CMD node index.js
RUN apt-get update && apt-get install -y netcat
CMD ["bash", "-c", "while ! nc -z mysql 3306; do sleep 1; done; exec node index.js"]
