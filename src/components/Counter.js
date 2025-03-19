// import { createElement } from "preact";
// import htm from "htm";
// const html = htm.bind(createElement);
import { html, Observer } from '/src/App.js'

// import { Observer } from "mobx-preact-super-lite";

import {counterState} from "/src/stores/UserStore.js"

const Counter = () => {
    return html`
    <${Observer}>
        ${() => html`<h1 className="text-clifford text-3xl font-bold underline">Count: ${counterState.count}</h1>`}
    </${Observer}>
`;
};

export default Counter;