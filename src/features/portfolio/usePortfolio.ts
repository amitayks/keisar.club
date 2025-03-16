import { useQuery } from "@tanstack/react-query";
import { getPortfolio } from "../../services/apiPortfolio";

const usePortfolio = () => {
  const {
    error,
    isLoading,
    data: portfolio = [],
  } = useQuery({
    queryKey: ["portfolio"],
    queryFn: () => getPortfolio(),
  });

  if (error) console.log(error);

  return { error, isLoading, portfolio };
};

export default usePortfolio;
