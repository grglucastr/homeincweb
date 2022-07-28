FROM node:14-alpine

COPY . /usr/src/app

WORKDIR /usr/src/app

ENV PATH /app/node_modules/.bin:$PATH

ENV REACT_APP_HOME_API_URL=http://localhost:8080/v2

RUN npm install --silent

RUN npm install react-scripts -g --silent

RUN npm install serve -g --silent

RUN npm run build

EXPOSE 3000

CMD ["serve", "-s", "build"]