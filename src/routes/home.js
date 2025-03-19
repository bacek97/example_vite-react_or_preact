import { html, Fragment } from '../App.js'

// import { lazy } from "preact-iso";
// const Counter = lazy(() => import('../components/Counter.js'));
import Counter from '../components/Counter.js';
import ButtonPlus from '../components/ButtonPlus.js';
import ButtonMinus from '../components/ButtonMinus.js';
// const ButtonPlus = lazy(() => import('../components/ButtonPlus.js'));
// const ButtonMinus = lazy(() => import('../components/ButtonMinus.js'));

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