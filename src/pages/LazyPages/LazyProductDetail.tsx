import { useQuery } from "@tanstack/react-query";
import HomeLoadingSkeleton from "../../ui/skeleton/HomeLoadingSkeleton";

const loadProductDetail = async () => {
  const module = await import("../../pages/ProductDetail"); // Import dynamically
  return module.default;
};

const LazyProductDetail = () => {
  const { data: Component, isLoading } = useQuery({
    queryKey: ["productDetailComponent"],
    queryFn: loadProductDetail,
    staleTime: Infinity, // Keeps it cached indefinitely
    // cacheTime: Infinity, // Prevents reloading unless manually invalidated
  });

  if (isLoading) return <HomeLoadingSkeleton />;
  return Component ? <Component /> : null;
};

export default LazyProductDetail;
