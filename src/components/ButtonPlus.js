// import { createElement } from "preact";
// import htm from "htm";
// const html = htm.bind(createElement);

import { html } from '/src/App.js'

import {counterState} from "/src/stores/UserStore.js"

const ButtonPlus = () => {
    return html`
    <button className="px-4 m-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick=${() => counterState.increment()}>+</button>
`;
};

export default ButtonPlus;