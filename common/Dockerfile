# home/Dockerfile

FROM node:20-slim

WORKDIR /app

# pnpm ni o'rnatish
RUN npm install -g pnpm

# package.json va pnpm-lock.yaml fayllarini nusxalash
COPY package.json .
COPY pnpm-lock.yaml .

# NPM paketlarini o'rnatish
RUN pnpm install

# Barcha manbalarni nusxalash
COPY . .

# Loyihani ishga tushirish
CMD ["pnpm", "run", "dev"]  
