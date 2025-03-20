# My Preact/React App

Этот проект представляет собой приложение, которое поддерживает как [**Preact**](https://bacek97.github.io/example_vite-react_or_preact/), так и [**React**](https://bacek97.github.io/example_vite-react_or_preact/dist/), в зависимости от значения переменной [`USE_PREACT`](src/App.js#L2), которая определяет, какой фреймворк загружать.

## 📂 Структура проекта

```
my-preact-app/
├── src/
│   ├── App.js          # Основной файл приложения
│   ├── AppPreact.js    # Подключение Preact
│   ├── AppReact.js     # Подключение React
│   ├── routes/
│   │   ├── home.js     # Главная страница
│   ├── index.css       # Стили
│   ├── tailwind.config.js # Конфигурация Tailwind CSS
├── public/
│   ├── index.html      # Главный HTML-файл
├── vite.config.js      # Конфигурация Vite
├── package.json        # Зависимости и скрипты
└── README.md           # Этот файл
```

## 🛠 Используемые технологии

- [Vite](https://vitejs.dev/) – Быстрый сборщик для фронтенда
- [Preact](https://preactjs.com/) – Легковесная альтернатива React
- [React](https://react.dev/) – Библиотека для создания пользовательских интерфейсов
- [MobX](https://mobx.js.org/README.html) – Система управления состоянием
- [htm](https://github.com/developit/htm) – JSX без необходимости транспиляции
- [Tailwind CSS](https://tailwindcss.com/) – Утилитарный CSS-фреймворк

