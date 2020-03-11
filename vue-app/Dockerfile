FROM node:10 as build-deps

WORKDIR /usr/src/app

COPY package.json ./

COPY . ./

RUN npm install

RUN npm run build


FROM nginx

COPY --from=build-deps /usr/src/app/nginx.conf /etc/nginx/

COPY --from=build-deps /usr/src/app/dist /usr/share/nginx/html