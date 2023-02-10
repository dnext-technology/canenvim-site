# Stage 1
FROM node:19-alpine as node
WORKDIR /app
COPY . .
RUN npm ci --silent
RUN npm run build

# Stage 2
FROM nginx:alpine
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=node /app/build /usr/share/nginx/html
