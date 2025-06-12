import { useQuery } from "@tanstack/react-query";
import { getPortfolio } from "../services/apiPortfolio";
import { PortfolioItem } from "../types/portfolio";

export default function useFeaturdItems(featured: boolean) {
  const filter = {
    field: "featured",
    value: featured,
  };

  const {
    data: portfolioItems = [],
    error: portfolioError,
    isLoading,
  } = useQuery<PortfolioItem[], Error>({
    queryKey: ["portfolioItems", "featured"],
    queryFn: () => getPortfolio({ filter }),
    retry: 1,
    staleTime: 1000 * 60 * 60 * 24, // 1 day
  });

  return { portfolioError, portfolioItems, isLoading };
}
