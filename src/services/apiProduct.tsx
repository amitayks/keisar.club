import supabase from "./supabase";

export const getProducts = async () => {
  const { data, error } = await supabase.from("products").select("*");
  // .eq("publish", true);
  if (error) throw error;
  return data;
};

export const getProductById = async (id: string) => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id);
  if (error) throw error;
  return data;
};
