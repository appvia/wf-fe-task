FROM node:20-alpine as builder

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci
# Copy just the files we need from the root to speed up re-building the docker image
COPY tsconfig.json .
COPY tsconfig.node.json .
COPY tsconfig.app.json .
COPY vite.config.ts .
COPY index.html .
COPY ./src/ ./src/
COPY ./public/ ./public/
RUN npm run build

FROM nginxinc/nginx-unprivileged:stable-alpine as production

ARG IMAGE_EXPIRATION=Never
ARG VERSION=v0.0.0-dev

LABEL Name=ui \
      Release=https://github.com/appvia/wf-fe-task \
      Url=https://github.com/appvia/wf-fe-task

USER root
RUN mkdir "/app" && mkdir "/nginxconf"

COPY --from=builder /app/dist/ /app/

COPY ./entrypoint/app.conf /nginxconf/app.conf
COPY ./entrypoint/http.conf /nginxconf/http.conf
COPY ./entrypoint/docker-entrypoint.sh /

RUN chown -R 101:101 /docker-entrypoint.sh /app /nginxconf

USER nginx

ENTRYPOINT ["/docker-entrypoint.sh"]
