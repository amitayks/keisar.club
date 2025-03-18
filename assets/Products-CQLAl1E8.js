import{c as o,r as l,j as e,X as d,a as m}from"./index-44GE6_g0.js";import{u as x,P as u}from"./ProductCard-nkAUcQuk.js";import"./apiProduct-D36JkNHo.js";import"./supabase-DiQ2SrPv.js";import"./CategoryCard-CSuMarRt.js";import"./apiImages-CJpvIBf1.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=o("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);function h(t){const[r,a]=l.useState(""),[c,i]=l.useState(""),n=["All","Premium","Standard","Basic","Custom"];return e.jsx("section",{className:" shadow-md",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0",children:[e.jsxs("div",{className:"relative w-full md:w-64",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:e.jsx(p,{className:"h-5 w-5 text-gray-400"})}),e.jsx("input",{type:"text",placeholder:"Search products...",value:r,onChange:s=>a(s.target.value),className:"block w-full pl-10 pr-3 py-2 border border-zinc-700 rounded-md leading-5  dark:bg-zinc-800 placeholder-gray-500 focus:outline-none focus:ring-zinc-600 focus:border-zinc-600 sm:text-sm"}),r&&e.jsx("button",{onClick:()=>a(""),className:"absolute inset-y-0 right-0 pr-3 flex items-center dark:text-zinc-400",children:e.jsx(d,{className:"h-4 w-4 text-gray-400 hover:text-gray-600"})})]}),e.jsx("div",{className:"flex items-center space-x-2",children:e.jsx("div",{className:"flex flex-wrap gap-2",children:n.map(s=>e.jsx("button",{onClick:()=>i(s==="All"?"":s),className:`px-3 py-1 text-sm rounded-full ${s==="All"&&c===""||c===s?"bg-indigo-600 text-white":"bg-gray-100 text-gray-800 hover:bg-gray-200"}`,children:s},s))})})]})})})}function g(){const t=m();return()=>t(-1)}const w=()=>{const{products:t}=x(),r=g();return e.jsxs("div",{children:[e.jsx(h,{products:t}),e.jsx("section",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:t.length>0?e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8",children:t.map(a=>e.jsx(u,{product:a},a.id))}):e.jsxs("div",{className:"text-center py-12",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-900 mb-2",children:"No products found"}),e.jsx("p",{className:"text-gray-600 mb-4",children:"Please try again later or contact us for more information."}),e.jsx("button",{onClick:r,className:"bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors",children:"← Back"})]})})})]})};export{w as default};
