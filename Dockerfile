FROM node:6.9.3

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install nodemon -g

COPY package.json /usr/src/app/package.json
RUN npm install
COPY . /usr/src/app


ADD nodemon.json /usr/src/app/nodemon.json

RUN apt-get update && apt-get install -y lsof

EXPOSE 8080

CMD [ "npm", "start" ]