FROM node:14-alpine

COPY . /usr/src/app

WORKDIR /usr/src/app

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install --silent

RUN npm install react-scripts -g --silent

RUN npm install serve -g --silent

RUN npm run build

EXPOSE 3000

CMD ["serve", "-s", "build"]