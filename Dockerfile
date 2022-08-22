FROM node:14-alpine

COPY . /usr/src/app

WORKDIR /usr/src/app

ENV PATH /app/node_modules/.bin:$PATH

ARG HOMEINCAPI_URL
ENV REACT_APP_HOME_API_URL=$HOMEINCAPI_URL

RUN npm install --silent

RUN npm install react-scripts -g --silent

RUN npm install serve -g --silent

RUN npm run build

EXPOSE 3000

CMD ["serve", "-s", "build"]