# 1 - Compiler l'application React

FROM node:22alpha-alpine AS build

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm run build

# 2 - servir l'app avec nginx

FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/index.html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off"]