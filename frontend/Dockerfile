# --- Build stage ---
FROM node:22-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ARG API_URL=/
RUN sed -i "s#__API_URL__#${API_URL}#g" src/environment/environment.prod.ts

RUN npm run build

# --- Serve stage ---
FROM nginx:1.27-alpine

COPY --from=build /app/dist/sala-front/browser /usr/share/nginx/html
COPY nginx/default.conf.template /etc/nginx/templates/default.conf.template

ENV PORT=8080
EXPOSE 8080
