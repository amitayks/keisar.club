import{u as i}from"./supabase-BrCmBCZY.js";import{g as l}from"./Spinner-LIKkXWow.js";import{j as s,L as n,f as o}from"./index-BOftLGnQ.js";const c=()=>{const{error:e,isLoading:t,data:r=[]}=i({queryKey:["products"],queryFn:()=>l()});return e&&console.log(e),{error:e,isLoading:t,products:r}};function u({product:e}){return s.jsx("div",{className:"bg-white rounded-lg shadow-md overflow-hidden transition-transform h-full",children:s.jsxs(n,{to:`/products/${e.SKU}`,state:{preserveScroll:!0},className:"flex flex-col h-full",children:[s.jsx("img",{src:e.image,alt:e.name,className:"w-full h-70 object-cover"}),s.jsxs("div",{className:"p-6 flex flex-col flex-grow",children:[s.jsx(a,{cat:e.category}),s.jsx("h3",{className:"text-x md:text-xl font-semibold text-right",dir:"rtl",children:e.name}),s.jsx("p",{className:"text-gray-600 mb-4 text-right",dir:"rtl",children:e.description.split(" ").slice(0,4).join(" ")}),s.jsxs("div",{className:"flex items-center justify-between mt-auto",children:[s.jsx("span",{className:"md:text-2xl text-xl font-bold text-stone-700",children:o(e.price)}),s.jsx("button",{className:"bg-stone-700 text-white md:px-4 md:py-2 px-2 py-1 rounded-md font-medium hover:bg-stone-900 transition-colors",children:"לרכישה"})]})]})]})},e.id)}function a({cat:e}){return s.jsx("div",{className:"justify-between md:items-center hidden md:flex items-start mb-2",dir:"rtl",children:e==null?void 0:e.map((t,r)=>s.jsx("div",{className:"bg-stone-200 text-stone-800 md:text-xs text-[8px] font-medium px-2.5 py-0.5 rounded ",children:r<3?t:null},t))})}export{u as P,c as u};
