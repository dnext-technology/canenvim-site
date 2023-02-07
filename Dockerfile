# Stage 1
FROM node:18-alpine as node
WORKDIR /app
COPY . .
RUN npm ci --silent
RUN npm install react-scripts@5.0.1 -g --silent
RUN npm run build

# Stage 2
FROM nginx:alpine
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=node /app/build /usr/share/nginx/html
