import { useQuery } from "@tanstack/react-query";
import { getPortfolioById } from "../../services/apiPortfolio";
import { useParams } from "react-router-dom";

const usePortfolioItem = () => {
  const { SKU } = useParams<{ SKU: string }>();
  console.log("SKU", SKU);

  const {
    data: portfolioItem,
    isLoading: isLoadingItem,
    error,
  } = useQuery({
    queryKey: ["portfolioItem", SKU],
    queryFn: () => getPortfolioById(SKU || ""),
    enabled: !!SKU,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  console.log("portfolioItem", portfolioItem);

  return { portfolioItem, isLoadingItem, error };
};

export default usePortfolioItem;
