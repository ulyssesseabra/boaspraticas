# Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY src/package*.json ./
RUN npm install

COPY src/ ./
RUN npm run docs:build

# Runtime
FROM nginx:alpine

COPY --from=builder /app/docs/.vitepress/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
