import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProduct";

const useProducts = () => {
  const {
    error,
    isLoading,
    data: products = [],
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1,
  });

  if (error) console.log(error);

  return { error, isLoading, products };
};

export default useProducts;
