FROM node:10 as build-container

WORKDIR /usr/src/app

COPY package.json ./

COPY . ./

RUN npm install

RUN npm run build


FROM nginx

COPY --from=build-container /usr/src/app/nginx.conf /etc/nginx/

COPY --from=build-container /usr/src/app/dist/container-app /usr/share/nginx/html