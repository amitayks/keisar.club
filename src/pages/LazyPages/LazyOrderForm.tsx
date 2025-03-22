import { useQuery } from "@tanstack/react-query";
import HomeLoadingSkeleton from "../../ui/skeleton/HomePageSkeleton";

const loadOrderForm = async () => {
  const module = await import("../../pages/OrderForm"); // Import dynamically
  return module.default;
};

const LazyOrderForm = () => {
  const { data: Component, isLoading } = useQuery({
    queryKey: ["orderFormComponent"],
    queryFn: loadOrderForm,
    staleTime: Infinity, // Keeps it cached indefinitely
    // cacheTime: Infinity, // Prevents reloading unless manually invalidated
  });

  if (isLoading) return <HomeLoadingSkeleton />;
  return Component ? <Component /> : null;
};

export default LazyOrderForm;
