# base image
FROM node:13.1.0-alpine

ENV baseURL=${baseURL}

COPY package*.json ./
RUN npm install --production

COPY ./ ./

EXPOSE 3000

# start app
CMD ["npm", "start"]

