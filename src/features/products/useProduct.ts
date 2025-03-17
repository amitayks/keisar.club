import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../../services/apiProduct";
import { useParams } from "react-router-dom";
import { getProductImage } from "../../services/apiImages";

const useProduct = () => {
  const { SKU } = useParams<{ SKU: string }>();

  const {
    error: productError,
    isLoading: isLoadingProduct,
    data: product,
  } = useQuery({
    queryKey: ["product"],
    queryFn: () => {
      if (!SKU) throw new Error("SKU is required");
      return getProductById(SKU);
    },
    // retry: false,
    // staleTime: 0,
    // refetchOnMount: true,
    // refetchOnWindowFocus: true,
  });

  const {
    error: imageError,
    isLoading: isLoadingImage,
    data: imageUrl,
  } = useQuery({
    queryKey: ["productImage", product?.image],
    queryFn: () => {
      if (!SKU) throw new Error("SKU is required");
      return getProductImage(product?.image);
    },
    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: true,

    enabled: !!product, // Only fetch image after product data is available
  });

  const error = productError || imageError;
  // const isLoading = isLoadingProduct || isLoadingImage;

  if (error) console.log(error);

  return {
    error,
    product: product || null,
    imageUrl,
    isLoadingImage,
    isLoadingProduct,
  };
};

export default useProduct;
