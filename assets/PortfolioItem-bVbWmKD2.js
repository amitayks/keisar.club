import{a as n,j as e,S as t}from"./index-BOftLGnQ.js";import{a as d,C as x}from"./Card-CktPDbHQ.js";import{u}from"./supabase-BrCmBCZY.js";const i=()=>{const{SKU:s}=n(),{error:a,isLoading:l,data:r=[]}=u({queryKey:["portfolioItem",s],queryFn:()=>{if(!s)throw new Error("SKU is required");return d(s)}});return a&&console.log(a),{error:a,isLoading:l,portfolioItem:r}},h=()=>{var l;const{portfolioItem:s,isLoading:a}=i();return a?e.jsxs("div",{className:"p-20 max-w-2xl mx-auto shadow-lg rounded-2xl",children:[e.jsx(t,{className:"h-8 w-3/4 mb-4"}),e.jsx(t,{className:"h-5 w-full mb-4"}),e.jsx(t,{className:"h-60 w-full"})]}):e.jsxs("div",{className:"p-20 max-w-2xl mx-auto shadow-lg rounded-2xl",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4 text-center",children:s==null?void 0:s.title}),e.jsx("p",{className:"text-gray-600 text-center mb-6",children:s==null?void 0:s.content}),e.jsx("img",{src:s==null?void 0:s.mainImage,alt:s==null?void 0:s.title,className:"rounded-lg object-cover w-full h-full-6"}),e.jsx("div",{className:"grid grid-cols-2 gap-4",children:e.jsx(x,{className:"grid gap-4 w-full h-full",children:(l=s==null?void 0:s.images)==null?void 0:l.map((r,c)=>e.jsx("img",{src:r,alt:s==null?void 0:s.title,className:"rounded-lg object-cover w-full h-full"},c))})}),e.jsx("div",{className:"mt-6 text-center",children:e.jsx("button",{className:"bg-blue-600 text-white px-4 py-2 rounded-md",children:"לרכישה כעת"})})]})};export{h as default};
