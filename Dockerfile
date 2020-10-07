FROM node:14-alpine AS build

WORKDIR /build

COPY . .

RUN yarn install
RUN yarn run build

FROM node:14-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install --prod

COPY --from=build /build/dist ./dist

EXPOSE 3000
CMD ["node", "./dist/index.js"]
