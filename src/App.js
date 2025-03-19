// App.js
let USE_PREACT = false;

if (!import.meta.env) { // Если нет сборщика, принудительно используем Preact
  USE_PREACT = true;
}

let 
  render,
  Fragment,
  html,
  Router,
  Route,
  LocationProvider,
  ErrorBoundary,
  Observer,
  getRouteProps;

const loadModule = (module) => {
  console.log("Module loaded:", module); // Добавьте лог
  ({ render, Fragment, html, Router, Route, LocationProvider, ErrorBoundary, Observer, getRouteProps } = module);
  console.log("render function:", render); // Добавьте лог
  // ({ render, Fragment, html, Router, Route, LocationProvider, ErrorBoundary, Observer, getRouteProps } = module);
}
// if (USE_PREACT) {
//   import("./AppPreact.js").then(loadModule);
// } else {
//   import("./AppReact.js").then(loadModule);
// }

const loadAppModule = async () => {
  try {
    if (USE_PREACT) {
      const module = await import("./AppPreact.js");
      loadModule(module);
    } else {
      const module = await import("./AppReact.js");
      loadModule(module);
    }
  } catch (error) {
    console.error('Error loading the module:', error);
  }
};

const renderApp = async () => {
  const Home = (await import("./routes/home.js")).default;
  render(
    html` <${LocationProvider}>
            <${ErrorBoundary}>
              <${Router}>
                <${Route} path="/" ...${getRouteProps(Home)} />
              </${Router}>
            </${ErrorBoundary}>
          </${LocationProvider}>
    `,
    document.body
  );
}

// Логика загрузки стилей и рендеринга
(async () => {
  if (import.meta.env) { // Vite
    await import('./index.css');
  } else {
    const loadStyles = () => {
      return fetch('./src/index.css')
        .then(r => r.text())
        .then(textContent => {
          const styleElement = document.createElement('style');
          styleElement.textContent = textContent;
          document.head.appendChild(styleElement);
        })
        .catch(console.error);
    };

    const loadTailwind = () => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = "https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,container-queries";
        script.onload = async () => {
          const { default: tailwindConfig } = await import("./tailwind.config.js");
          tailwind.config = tailwindConfig;
          resolve(loadStyles());
        };
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    try {
      await loadTailwind();
    } catch (error) {
      console.error(error);
    }
  }


})()
.then(loadAppModule)
.then(renderApp);


export {html, Fragment, Observer}