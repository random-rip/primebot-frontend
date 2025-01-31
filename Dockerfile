FROM node:16 AS app

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run download_changelogs
RUN npm run generate

FROM caddy

WORKDIR /app

COPY --from=app  /app/dist /app