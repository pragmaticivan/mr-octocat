FROM node:10.16.0-alpine

ENV APP_DIRECTORY=/app
RUN mkdir -p $APP_DIRECTORY/
WORKDIR $APP_DIRECTORY

COPY package.json yarn.lock $APP_DIRECTORY/

RUN yarn install

ADD . $APP_DIRECTORY/

RUN yarn build

CMD [ "yarn", "start" ]
