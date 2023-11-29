FROM node:18 as builder

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

COPY apps/server/package.json ./apps/server/package.json

RUN yarn

COPY . .

RUN yarn build --filter=server
RUN rm -rf node_modules
RUN yarn --frozen-lockfile --prod


FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/apps/server/dist ./
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 8080

