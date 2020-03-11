FROM node:10 as build-angular

WORKDIR /usr/src/app

COPY package.json ./

COPY . ./

RUN npm install

RUN npm run bundle


FROM nginx

COPY --from=build-angular /usr/src/app/nginx.conf /etc/nginx/

COPY --from=build-angular /usr/src/app/dist/angular-app /usr/share/nginx/html