# Multi-stage buildでNext.jsをビルド
FROM node:lts-bullseye AS builder
RUN npm install -g bun
WORKDIR /build
COPY package*.json ./
RUN bun i
COPY . ./
RUN bun run build

# ベースイメージの変更
FROM amazon/aws-lambda-nodejs:18

# Lambda Web Adapterのインストール
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.8.3 /lambda-adapter /opt/extensions/lambda-adapter
ENV PORT=4321

COPY --from=builder /build/dist ./dist
COPY --from=builder /build/node_modules ./node_modules

# ベースイメージ変更に伴う調整
ENTRYPOINT ["node"]
CMD ["./dist/server/entry.mjs"]