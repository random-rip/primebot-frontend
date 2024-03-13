FROM node:16 as app

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run generate

FROM caddy

WORKDIR /app

COPY --from=app  /app/dist /app