import { useQuery } from "@tanstack/react-query";
import { getPortfolioById } from "../../services/apiPortfolio";

const usePortfolioItem = (sku: string) => {
  const {
    data: portfolioItem,
    isLoading: isLoadingItem,
    error,
  } = useQuery({
    queryKey: ["portfolioItem", sku],
    queryFn: () => getPortfolioById(sku),
    enabled: !!sku,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return { portfolioItem, isLoadingItem, error };
};

export default usePortfolioItem;
