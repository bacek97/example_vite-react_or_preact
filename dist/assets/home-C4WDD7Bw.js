import{h as t,O as n,F as o}from"./index-BBDaqTCJ.js";import{o as r}from"./mobx.esm-Bk1UdPHc.js";const e=r({count:0,increment(){this.count++},decrement(){this.count--}}),u=()=>t`
    <${n}>
        ${()=>t`<h1 className="text-clifford text-3xl font-bold underline">Count: ${e.count}</h1>`}
    </${n}>
`,s=()=>t`
    <button className="px-4 m-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick=${()=>e.increment()}>+</button>
`,c=()=>t`
    <button className="px-4 m-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick=${()=>e.decrement()}>-</button>
`,m=()=>t`<${o}>
                    <${u} />
                    <${s} />
                    <${c} />
                </${o}>
`;export{m as default};
