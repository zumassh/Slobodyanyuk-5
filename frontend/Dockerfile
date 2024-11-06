# Базовый образ Node.js
FROM node:23

# Создаем рабочую директорию
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package.json package-lock.json ./
RUN npm install

# Копируем исходный код приложения
COPY . .

# Открываем порт для доступа
EXPOSE 4200

# Запускаем Angular сервер разработки
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]
