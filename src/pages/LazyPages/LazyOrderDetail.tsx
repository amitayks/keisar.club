import { useQuery } from "@tanstack/react-query";
import HomeLoadingSkeleton from "../../ui/skeleton/HomeLoadingSkeleton";

const loadOrderDetail = async () => {
  const module = await import("../../pages/OrderDetail"); // Import dynamically
  return module.default;
};

const LazyOrderDetail = () => {
  const { data: Component, isLoading } = useQuery({
    queryKey: ["orderDetailComponent"],
    queryFn: loadOrderDetail,
    staleTime: Infinity, // Keeps it cached indefinitely
    // cacheTime: Infinity, // Prevents reloading unless manually invalidated
  });

  if (isLoading) return <HomeLoadingSkeleton />;
  return Component ? <Component /> : null;
};

export default LazyOrderDetail;
