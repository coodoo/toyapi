FROM node:latest
WORKDIR /code
COPY . .
EXPOSE 8080
ENV NODE_ENV=production
ENTRYPOINT ["node", "server.js"]
