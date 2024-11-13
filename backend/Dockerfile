FROM node:18.19

WORKDIR /app

COPY package*.json ./
RUN corepack enable && corepack prepare yarn@stable --activate && yarn install

COPY . .

EXPOSE 9000
CMD ["yarn", "start"]
