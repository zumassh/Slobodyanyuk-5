# Базовый образ Node.js
FROM node:23

# Создаем рабочую директорию
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package.json package-lock.json ./
RUN npm install

# Копируем весь исходный код
COPY . .

EXPOSE 8080

# Запускаем backend с помощью ts-node
CMD ["npx", "ts-node", "src/app.ts"]
