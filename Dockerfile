# build environment
FROM node:22 AS react-build
LABEL maintainer="Johannes <info@johannes.pics>"
LABEL org.opencontainers.image.authors=Johannes.pics

WORKDIR /app
COPY . ./
RUN npm install
RUN npm run build

# server environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/configfile.template

COPY --from=react-build /app/build /usr/share/nginx/html

ENV PORT=8080
EXPOSE 8080
CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"