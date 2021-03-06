from node:8

WORKDIR /app

COPY package.json /app
RUN npm install
COPY . /app

ENV PORT 4000

CMD node server.js

EXPOSE 4000