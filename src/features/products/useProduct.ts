import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../../services/apiProduct";
import { useParams } from "react-router-dom";

const useProduct = () => {
  const { SKU } = useParams<{ SKU: string }>();

  const {
    error,
    isLoading,
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

  if (error) console.log(error);

  return { error, isLoading, product };
};

export default useProduct;
