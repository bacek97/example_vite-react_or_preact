// AppReact.js
import { render } from "react-dom";
import { Fragment } from "react";
import { html } from "htm/react";
import { Route, BrowserRouter, Routes } from "react-router";
import { Observer } from "mobx-react";

// Создаём псевдонимы для компонентов
const LocationProvider = BrowserRouter; // Псевдоним для BrowserRouter
const ReactRouter = Routes; // Псевдоним для Routes
const ErrorBoundary = ({ children }) => children; // Заглушка для ErrorBoundary
const getRouteProps = (component) => ({ element: html`<${component} />` });

// Экспортируем всё, включая псевдонимы
export {
  render,
  Fragment,
  html,
  ReactRouter as Router, // Переименовываем ReactRouter обратно в Router при экспорте
  Route,
  LocationProvider, // Экспортируем LocationProvider (псевдоним для BrowserRouter)
  ErrorBoundary,
  Observer,
  getRouteProps, // Экспортируем getRouteProps
};