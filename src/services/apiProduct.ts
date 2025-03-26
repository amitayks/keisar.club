import supabase from "./supabase";

interface filter {
  value: string;
  field: string;
}

export const getProducts = async ({
  filter,
}: // page,
{
  filter: filter | null;
  // page: number;
}) => {
  let query = supabase
    .from("products")
    .select(
      "id, name, price, discount, SKU, image, category, stock, longDescription, additionalInfo"
      // {
      //   count: "exact",
      // }
    )
    .in("publish", [true]);
  if (filter) query = query.eq(filter.field, filter.value);

  const { data, error } = await query;

  if (error) throw error;
  return data;
};

export const getProductById = async (SKU: string | undefined) => {
  const { data, error } = await supabase
    .from("products")
    .select(
      "id, created_at, name, price, discount, SKU, image, imagePack, category, stock, longDescription, additionalInfo"
    )
    .eq("SKU", SKU)
    .single();
  if (error) throw error;
  return data;
};
