import { useQuery, useQueries } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/apiProduct";
import { getProductImage } from "../../services/apiImages";

export interface Product {
  id: string;
  name: string;
  SKU: string;
  category: string[] | string;
  description?: string;
  price: number;
  rating?: number;
  reviews?: number;
  stock: number | null;
  longDescription: string;
  image: string | null;
  imagePack: string[];
  additionalInfo: any[];
}

const useProductItem = () => {
  const { SKU } = useParams<{ SKU: string }>();

  const {
    data: product,
    error: productError,
    isLoading: isLoadingProduct,
  } = useQuery<Product, Error>({
    queryKey: ["productItem", SKU],
    queryFn: () => getProductById(SKU),
    enabled: !!SKU,
    retry: 1,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  // Fetch main product image
  const { data: image, isLoading: isLoadingImage } = useQuery<
    string | null,
    Error
  >({
    queryKey: ["productImage", product?.image],
    queryFn: () =>
      product?.image ? getProductImage(product.image) : Promise.resolve(null),
    enabled: !!product?.image, // Prevent unnecessary requests
  });

  // Fetch all images in the imagePack concurrently
  const imagePackQueries = useQueries({
    queries: (product?.imagePack || []).map((image: string) => ({
      queryKey: ["productImage", image],
      queryFn: () => getProductImage(image),
    })),
  });

  const imagePack = imagePackQueries.map((query) => ({
    url: query.data || null,
    error: query.error || null,
    isLoading: query.isLoading,
  }));

  // const imagePack = imagePackQueries.map((query) => query.data);
  const isLoadingImagePack = imagePackQueries.some((query) => query.isLoading);

  // console.log(imagePack);
  return {
    error: productError,
    product: product || null,
    image: image || null,
    imagePack,
    isLoadingProduct,
    isLoadingImage,
    isLoadingImagePack,
  };
};

export default useProductItem;
