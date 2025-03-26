import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProduct";
import { useSearchParams } from "react-router-dom";

const useProducts = () => {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : {
          field: "status",
          value: filterValue,
        };

  const {
    error,
    isLoading,
    data: products = [],
  } = useQuery({
    queryKey: ["products", filterValue],
    queryFn: () => getProducts({ filter }),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  if (error) console.log(error);

  return { error, isLoading, products };
};

export default useProducts;
