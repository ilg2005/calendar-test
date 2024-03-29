FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

RUN npm install -g http-server

EXPOSE 8080

CMD ["http-server", "dist", "-p 8080"]
