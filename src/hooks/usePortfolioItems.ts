import { useQuery } from "@tanstack/react-query";
import { getPortfolio } from "../services/apiPortfolio";
import { PortfolioItem } from "../types/portfolio";
import { useSearchParams } from "react-router-dom";

export default function usePortfolioItems() {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("type");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : {
          field: "projectType",
          value: filterValue,
        };

  const {
    data: portfolioItems = [],
    error: portfolioError,
    isLoading,
  } = useQuery<PortfolioItem[], Error>({
    queryKey: ["portfolioItems", filterValue],
    queryFn: () => getPortfolio({ filter }),
    retry: 1,
    staleTime: 1000 * 60 * 60 * 24, // 1 day
  });

  return { portfolioError, portfolioItems, isLoading };
}
