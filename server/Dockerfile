FROM node:14.18.0
ENV NODE_ENV=production

COPY ["package.json", "package-lock.json*", "/"]

RUN npm install --production

COPY . .

WORKDIR /build

CMD ["node", "server.js"]