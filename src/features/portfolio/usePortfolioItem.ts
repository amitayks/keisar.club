import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPortfolioById } from "../../services/apiPortfolio";

const usePortfolioItem = () => {
  const { SKU } = useParams<{ SKU: string }>();

  const {
    error,
    isLoading,
    data: portfolioItem = [],
  } = useQuery({
    queryKey: ["portfolioItem", SKU],
    queryFn: () => {
      if (!SKU) throw new Error("SKU is required");
      return getPortfolioById(SKU);
    },
  });

  if (error) console.log(error);

  return { error, isLoading, portfolioItem };
};

export default usePortfolioItem;
