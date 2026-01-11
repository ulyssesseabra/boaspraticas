# =========================
# Build
# =========================
FROM node:20-alpine AS builder

WORKDIR /app

# Habilita yarn moderno
RUN corepack enable

# Copia manifests
COPY src/package.json src/yarn.lock ./

# Instala dependências
RUN yarn install --frozen-lockfile

# Copia o restante do código
COPY src/ ./

# Build do VitePress
RUN yarn docs:build

# =========================
# Runtime
# =========================
FROM nginx:alpine

COPY --from=builder /app/docs/.vitepress/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
