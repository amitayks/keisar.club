import supabase from "./supabase";

export const getProducts = async () => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("publish", true);
  if (error) throw error;
  return data;
};

export const getProductById = async (sku: string) => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("SKU", sku)
    .single();
  if (error) throw error;
  return data;
};
