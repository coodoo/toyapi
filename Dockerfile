FROM node:latest
EXPOSE 8080
ENTRYPOINT ["node", "./server.js"]
