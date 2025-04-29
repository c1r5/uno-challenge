# Stage 1
FROM node:23.11.0-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build

# Stage 2

FROM nginx:stable-alpine AS production

COPY --from=build /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8081

CMD ["nginx", "-g", "daemon off;"]