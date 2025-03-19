// AppPreact.js
import { render, Fragment } from "preact";
import { html } from "htm/preact";
import { Route, LocationProvider, ErrorBoundary, Router } from "preact-iso";
import { Observer } from "mobx-preact-super-lite";

export const getRouteProps = (component) => ({ component });

export {
  render,
  Fragment,
  html,
  Router,
  Route,
  LocationProvider,
  ErrorBoundary,
  Observer,
};