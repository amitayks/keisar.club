import{s as o}from"./supabase-Tz9ENgEM.js";const c=async a=>{const{data:t,error:r}=await o.storage.from("site-image").download(a);if(r)throw r;if(t)return URL.createObjectURL(t)},n=async a=>{const{data:t,error:r}=await o.storage.from("products-image").download(a);if(r)throw r;if(t)return URL.createObjectURL(t)},i=async()=>{const{data:a,error:t}=await o.from("products").select("*").eq("publish",!0);if(t)throw t;return a},u=async a=>{const{data:t,error:r}=await o.from("products").select("*").eq("SKU",a).single();if(r)throw r;return t};export{i as a,n as b,u as c,c as g};
