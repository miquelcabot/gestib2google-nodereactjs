FROM node:10.16.3
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g nodemon

EXPOSE 3001
CMD [ "npm", "run", "start-dev" ]