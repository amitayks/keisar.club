import{E as a}from"./index-XsE31cq9.js";const s=async()=>{const{data:t,error:o}=await a.from("portfolio").select("*").eq("publish",!0);if(o)throw o;return t},i=async t=>{const{data:o,error:r}=await a.from("portfolio").select("*").eq("SKU",t).single();if(r)throw r;return o};export{i as a,s as g};
