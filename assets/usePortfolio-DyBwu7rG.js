import{r as i,j as s,L as d,S as n,u as m}from"./index-C6im8Sss.js";import{u,C as x}from"./CategoryCard-DrmUmd0A.js";import{g as o}from"./apiPortfolio-C9tbAPR9.js";function f({portfolio:e}){var r;const{imageData:t,isLoading:a}=u(e.image),[g,l]=i.useState(a);return s.jsx("article",{className:"bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden transition-transform min-h-full",children:s.jsxs(d,{to:`/portfolio/${e.SKU}`,state:{preserveScroll:!0},className:"flex flex-col h-full",children:[s.jsxs("div",{className:"relative aspect-square w-full",children:[a&&s.jsx(n,{className:"absolute inset-0 w-full h-full object-cover"}),t&&s.jsx("img",{src:t,alt:e.title,onLoad:()=>{const c=setTimeout(()=>{l(!0)},5e3);return()=>clearTimeout(c)},className:"w-full h-70 object-cover"})]}),s.jsxs("div",{className:"py-3 px-3 flex flex-col flex-grow",children:[s.jsx(x,{cat:e==null?void 0:e.category,type:"portfolio"}),s.jsx("p",{className:"hidden md:block text-gray-600 mb-6 text-right",dir:"rtl",children:(r=e==null?void 0:e.description)==null?void 0:r.split(" ").slice(0,4).join(" ")}),s.jsx("div",{className:"flex items-center justify-center mt-auto md:border-t border-blue-200 md:pt-4 dark:border-zinc-700",children:s.jsx("h3",{className:"text-x md:text-xl mb-2  font-semibold text-right",dir:"rtl",children:e==null?void 0:e.title})})]})]})},e.id)}const y=()=>{const{error:e,isLoading:t,data:a=[]}=m({queryKey:["portfolio"],queryFn:()=>o()});return e&&console.log(e),{error:e,isLoading:t,portfolio:a}};export{f as P,y as u};
