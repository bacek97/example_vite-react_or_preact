// import { createElement } from "preact";
// import htm from "htm";
// const html = htm.bind(createElement);

import { html } from '../App.js'

import {counterState} from "../stores/UserStore.js"

// const ButtonMinus = () => {
//     return (
//         <button
//             className="px-4 m-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//             onClick={() => counterState.decrement()}
//         >
//             -
//         </button>
//     );
// };


const ButtonMinus = () => {
    return html`
    <button className="px-4 m-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick=${() => counterState.decrement()}>-</button>
`;
};

export default ButtonMinus;