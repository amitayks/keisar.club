import { useQuery } from "@tanstack/react-query";
import ProductItemSkeleton from "../../ui/skeleton/ProductItemSkeleton";

const loadProducts = async () => {
  const module = await import("../../pages/Products");
  return module.default;
};

const LazyProducts = () => {
  const { data: Component, isLoading } = useQuery({
    queryKey: ["productsComponent"],
    queryFn: loadProducts,
    staleTime: Infinity,
  });

  if (isLoading) return <ProductItemSkeleton />;
  return Component ? <Component /> : null;
};

export default LazyProducts;
