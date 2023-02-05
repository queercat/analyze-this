# stage 0: build our app.
FROM alpine:latest

RUN apk add nodejs
RUN apk add npm

COPY ./app /var/app
WORKDIR /var/app
RUN npm ci 
RUN npm run build

# stage 1: run our server.
FROM alpine:latest

RUN apk add nodejs
RUN apk add npm

WORKDIR /covered

COPY ./server/* ./

RUN npm ci

COPY --from=0 /var/app/build ./build

ENTRYPOINT node server.js
