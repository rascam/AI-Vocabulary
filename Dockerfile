FROM node:18-alpine as builder

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

COPY apps/server/package.json ./apps/server/package.json

RUN yarn

COPY /apps/server/prisma ./prisma/
COPY . .

RUN yarn build --filter=server
RUN rm -rf node_modules
RUN yarn --frozen-lockfile --prod
RUN cd apps/server && yarn prisma generate


FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/apps/server/dist ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

EXPOSE 8080

CMD ["node", "index.js"]

