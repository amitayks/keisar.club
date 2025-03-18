import supabase from "./supabase";

export const getPortfolio = async () => {
  const { data, error } = await supabase
    .from("portfolio")
    .select("*")
    .eq("publish", true);
  if (error) throw error;

  return data;
};

export const getPortfolioById = async (SKU: string) => {
  const { data, error } = await supabase
    .from("portfolio")
    .select("*")
    .eq("SKU", SKU)
    .single();
  if (error) throw error;
  return data;
};
