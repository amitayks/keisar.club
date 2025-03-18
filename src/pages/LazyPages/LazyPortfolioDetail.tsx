import { useQuery } from "@tanstack/react-query";
import HomeLoadingSkeleton from "../../ui/skeleton/HomeLoadingSkeleton";

const loadPortfolioDetail = async () => {
  const module = await import("../../pages/PortfolioDetail"); // Import dynamically
  return module.default;
};

const LazyPortfolioDetail = () => {
  const { data: Component, isLoading } = useQuery({
    queryKey: ["portfolioDetailComponent"],
    queryFn: loadPortfolioDetail,
    staleTime: Infinity, // Keeps it cached indefinitely
    // cacheTime: Infinity, // Prevents reloading unless manually invalidated
  });

  if (isLoading) return <HomeLoadingSkeleton />;
  return Component ? <Component /> : null;
};

export default LazyPortfolioDetail;
