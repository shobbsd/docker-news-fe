# base image
FROM node:13.1.0-alpine

ENV baseURL=${baseURL}

COPY package*.json ./
RUN npm install

EXPOSE 9090

# start app
CMD ["npm", "start"]

