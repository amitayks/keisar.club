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

export { getSiteImage, getProductImage };
