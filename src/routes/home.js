import { html, Fragment } from '/src/App.js'

// import { lazy } from "preact-iso";
// const Counter = lazy(() => import('/src/components/Counter.js'));
import Counter from '/src/components/Counter.js';
import ButtonPlus from '/src/components/ButtonPlus.js';
import ButtonMinus from '/src/components/ButtonMinus.js';
// const ButtonPlus = lazy(() => import('/src/components/ButtonPlus.js'));
// const ButtonMinus = lazy(() => import('/src/components/ButtonMinus.js'));

// document.documentElement.classList.toggle(
//     'dark',
//     localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
//   )

const Home = () => {
    return html`<${Fragment}>
                    <${Counter} />
                    <${ButtonPlus} />
                    <${ButtonMinus} />
                </${Fragment}>
`;
};

export default Home;