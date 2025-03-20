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

export const getProductImagePack = async (imageId: string) => {
  if (!imageId) return [];

  try {
    // Extract the base product ID from the image ID (assuming format like "product-123-main")
    const productIdMatch = imageId.match(/product-(\d+)/);
    if (!productIdMatch) return [];

    const productId = productIdMatch[1];

    // Query the images table for all images related to this product
    const { data, error } = await supabase
      .from("images")
      .select("*")
      .filter("product_id", "eq", productId)
      .order("sort_order", { ascending: true });

    if (error) {
      console.error("Error fetching image pack:", error);
      throw new Error(`Failed to load image pack: ${error.message}`);
    }

    if (!data || data.length === 0) {
      return [];
    }

    // Transform the data into the expected format
    const imagePack = data.map((image) => {
      return {
        url: image.image_url || null,
        error: null,
        isLoading: false,
      };
    });

    return imagePack;
  } catch (error) {
    console.error("Error in getProductImagePack:", error);
    return [];
  }
};
