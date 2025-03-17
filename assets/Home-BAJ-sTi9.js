import{j as e,S as i,u as m,r as u,L as c}from"./index-Ca00R9Pi.js";import{u as p}from"./supabase-Tz9ENgEM.js";import{g}from"./apiProduct-CW1g9Hab.js";import{P as h}from"./PortfolioPreview-BFO_y0gi.js";import{A as x}from"./arrow-right-BnbBwANB.js";import{u as j,P as f,a as b}from"./ProductItemSkeleton-CHg_yKw_.js";import"./Card-DY58hzLl.js";const o=t=>{const{data:s,error:a,isLoading:r}=p({queryKey:["image",t],queryFn:()=>g(t)});return a&&console.log(a),{data:s,error:a,isLoading:r}},N=()=>e.jsx("div",{className:"relative max-w-3xl w-full mx-auto py-10 hidden md:block",children:e.jsxs("div",{className:"relative",children:[e.jsx(i,{className:"absolute left-0  top-1/2 transform -translate-y-1/2 h-20 w-36"}),e.jsx(i,{className:"absolute right-0 top-1/2 transform -translate-y-1/2 h-20 w-36"}),e.jsx("div",{className:"rounded-xl overflow-hidden mx-40 ",children:e.jsxs("div",{className:"relative aspect-square",children:[e.jsx(i,{className:"absolute inset-0 rounded-xl"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:[...Array(3)].map((t,s)=>e.jsx(i,{className:"absolute rounded-full opacity-70",style:{width:`${90-s-1*12}%`,height:`${90-s-1*12}%`}},s))})]})})]})}),v=()=>e.jsxs("div",{className:"flex flex-col max-w-lg w-full mx-auto py-10 px-6 gap-5 md:hidden",children:[e.jsx("div",{className:"rounded-xl overflow-hidden",children:e.jsxs("div",{className:"relative aspect-square",children:[e.jsx(i,{className:"absolute inset-0 rounded-xl"}),e.jsxs("div",{className:"absolute inset-0 flex items-center justify-center",children:[[...Array(3)].map((t,s)=>e.jsx(i,{className:"absolute rounded-full opacity-70",style:{width:`${90-s*12}%`,height:`${90-s*12}%`,borderRadius:"50%"}},s)),e.jsx(i,{className:"absolute w-1/4 h-1/4 rounded-full",style:{top:"38%"}})]})]})}),e.jsx("div",{className:"w-full flex justify-center my-10",children:e.jsx(i,{className:"h-20 w-96"})})]});function y(){const{data:t,isLoading:s}=o("wood-background.jpg"),{data:a,isLoading:r}=o("banner-mobile.png"),{data:l,isLoading:n}=o("banner-desktop.png");return s||r||n?e.jsxs(e.Fragment,{children:[e.jsx(v,{}),e.jsx(N,{})]}):e.jsxs("section",{className:"text-white bg-cover bg-fixed bg-center transition-opacity duration-500",style:{backgroundImage:`url("${t}")`},children:[e.jsx(d,{type:"desktop",img:l}),e.jsx(d,{type:"mobile",img:a})]})}function d({type:t,img:s}){const a=m(),[r,l]=u.useState(!1),n={desktop:" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden md:block",mobile:" max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 md:hidden"};return e.jsx("div",{className:`${n[t]}`,children:e.jsx("div",{className:"md:flex md:items-center md:justify-between",children:e.jsx("div",{className:"mb-10 md:mb-0",children:e.jsxs("div",{className:"w-full relative ",children:[!r&&e.jsx("div",{className:"absolute inset-0 bg-gray-300 animate-pulse rounded-2xl"}),e.jsx("img",{src:s,alt:"Hero Image",className:`rounded-lg shadow-xl object-cover transition-opacity duration-500 ${r?"opacity-100":"opacity-0"}`,onClick:()=>{a("/products")},onLoad:()=>{l(!0)}})]})})})})}function w(){return e.jsxs("div",{className:"text-center mb-16",children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-4",children:"Why Choose Keisar Club?"}),e.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Experience the perfect blend of luxury and functionality with our curated collection of premium products designed for discerning customers."})]})}function k(){return e.jsx("section",{className:"py-16 bg-white",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsx(w,{}),e.jsx(h,{}),e.jsx("div",{className:"text-center mt-12",children:e.jsxs(c,{to:"/portfolio",className:"inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors",children:["View All of Our Portfolio",e.jsx("span",{children:e.jsx(x,{className:"ml-2 h-5 w-5"})})]})})]})})}function L(){const{isLoading:t,products:s}=j();return t?e.jsx(f,{}):e.jsx("section",{className:"py-16 bg-white",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"text-center mb-16",children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-4",children:"Featured Products"}),e.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Explore our most popular offerings that customers love."})]}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-8",children:s.map((a,r)=>r<6?e.jsx(b,{product:a}):null)}),e.jsx("div",{className:"text-center mt-12",children:e.jsxs(c,{to:"/products",className:"inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors",children:["View All Products",e.jsx(x,{className:"ml-2 h-5 w-5"})]})})]})})}const q=()=>e.jsxs("div",{children:[e.jsx(y,{}),e.jsx(k,{}),e.jsx(L,{})]});export{q as default};
