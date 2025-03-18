import supabase from "./supabase";

const getSiteImage = async (imageName: string) => {
  const { data, error } = await supabase.storage
    .from("site-image")
    .download(imageName);

  if (error) throw error;

  if (data) {
    const url = URL.createObjectURL(data);
    return url;
  }
};

const getProductImage = async (imageName: string) => {
  const { data, error } = await supabase.storage
    .from("products-image")
    .download(imageName);

  if (error) throw error;

  if (data) {
    const url = URL.createObjectURL(data);
    return url;
  }
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
