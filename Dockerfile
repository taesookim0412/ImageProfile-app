FROM node:14.18.0
ENV NODE_ENV=production

COPY ["/server/package.json", "/server/package-lock.json*", "./server/"]

RUN cd server && npm install --production

COPY . .

WORKDIR /server/build

CMD ["node", "server.js"]