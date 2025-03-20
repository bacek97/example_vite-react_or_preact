# My Preact/React App

Этот проект представляет собой приложение, которое поддерживает как **Preact**, так и **React**, в зависимости от настроек окружения.

## 📦 Установка

Перед началом работы убедитесь, что у вас установлен **Node.js** (рекомендуемая версия 16+).

1. Клонируйте репозиторий:

   ```sh
   git clone https://github.com/yourusername/example_vite-react_or_preact.git
   cd example_vite-react_or_preact
   ```

2. Установите зависимости:

   ```sh
   npm install
   ```

## 🚀 Запуск

### [Без сборки](https://bacek97.github.io/example_vite-react_or_preact/)

Запустите локальный http сервер в [папке проекта](https://bacek97.github.io/example_vite-react_or_preact/), например python:

```sh
python -m http.server
```

По умолчанию приложение будет доступно по адресу: [http://localhost:5173](http://localhost:5173).

### [Сборка для продакшена](https://bacek97.github.io/example_vite-react_or_preact/dist/)

```sh
npm run build
```

Собранные файлы будут находиться в папке [dist/](https://bacek97.github.io/example_vite-react_or_preact/dist/).

## 🔧 Конфигурация

### Выбор между Preact и React

В файле `App.js` используется переменная `USE_PREACT`, которая определяет, какой фреймворк загружать:

```js
let USE_PREACT = false;

if (!import.meta.env) { // Если нет сборщика, используем Preact
  USE_PREACT = true;
}
```

По умолчанию используется React. Если необходимо переключиться на Preact, можно изменить значение `USE_PREACT` на `true`.

### Генерация относительных путей в Vite

В `vite.config.js` установлено значение `base: './'`, чтобы Vite генерировал относительные ссылки:

```js
import { defineConfig } from 'vite';
export default defineConfig({
  base: './',
  plugins: [preact()]
});
```

## 📂 Структура проекта

```
my-preact-app/
├── src/
│   ├── App.js          # Основной файл приложения
│   ├── AppPreact.js    # Версия на Preact
│   ├── AppReact.js     # Версия на React
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

## 🐞 Возможные ошибки и их решение

### `TypeError: render is not a function`

Эта ошибка возникает, при использовании React 19+

## 📜 Лицензия

Этот проект распространяется под лицензией **BeerWare**.

