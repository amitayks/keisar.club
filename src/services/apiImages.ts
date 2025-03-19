import supabase from "./supabase";

const getSiteImage = async (imageName: string) => {
  const { data, error } = await supabase.storage
    .from("site-image")
    .createSignedUrl(imageName, 60 * 60);

  if (error) throw error;

  if (data) {
    return data?.signedUrl;
  }
};

const getProductImage = async (imageName: string) => {
  const { data, error } = await supabase.storage
    .from("products-image")
    .createSignedUrl(imageName, 60 * 60);

  if (error) throw error;

  return data?.signedUrl ?? null;
  // if (data) {
  //   return data?.signedUrl;
  // }
};

const getPortfolioImages = async () => {
  const { data, error } = await supabase.storage
    .from("portfolio-image")
    .list("");

  if (error) throw error;
  console.log(data);

  return data;
};

export { getSiteImage, getProductImage, getPortfolioImages };
