import supabase from "./supabase";

const getImage = async (imageId: string) => {
  const { data, error } = await supabase.storage
    .from("site-image")
    .download(imageId);

  if (error) throw error;

  if (data) {
    const url = URL.createObjectURL(data);
    return url;
  }
};

export default getImage;
