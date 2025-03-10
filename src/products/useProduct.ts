import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../services/apiProduct";
import { useParams } from "react-router-dom";

const useProduct = () => {
  const { sku } = useParams<{ sku: string }>();

  const {
    error,
    isLoading,
    data: product,
  } = useQuery({
    queryKey: ["product"],
    queryFn: () => {
      if (!sku) throw new Error("SKU is required");
      return getProductById(sku);
    },
    // retry: false,
    // staleTime: 0,
    // refetchOnMount: true,
    // refetchOnWindowFocus: true,
  });

  console.log(error);

  return { error, isLoading, product };
};

export default useProduct;
