FROM node:18 as builder

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

COPY apps/server/package.json ./apps/server/package.json
COPY /apps/server/prisma ./prisma/

RUN yarn
# RUN yarn prisma generate

COPY . .

RUN yarn build --filter=server
# RUN rm -rf node_modules 
# RUN yarn --frozen-lockfile --prod 
# RUN yarn prisma generate 


FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/apps/server/dist ./
COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

# RUN --mount=type=secret,id=OPENAI_API_KEY \
    # OPENAI_API_KEY="$(cat /run/secrets/OPENAI_API_KEY)"

CMD ["node", "index.js"]

