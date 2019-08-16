FROM node:latest
RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/
RUN npm install -g yarn nodemon
COPY package.json /usr/src/app/
RUN yarn
COPY . /usr/src/app/
RUN yarn build
EXPOSE 4000

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD /wait && yarn serve
# CMD [ node, app.js ]