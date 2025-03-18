import { useQuery } from "@tanstack/react-query";
import ProductItemSkeleton from "../../ui/skeleton/ProductItemSkeleton";

const loadPortfolio = async () => {
  const module = await import("../../pages/Portfolio");
  return module.default;
};

const LazyPortfolio = () => {
  const { data: Component, isLoading } = useQuery({
    queryKey: ["portfolioComponent"],
    queryFn: loadPortfolio,
    staleTime: Infinity,
  });

  if (isLoading)
    return (
      <section className='py-16 bg-zinc-900'>
        <ProductItemSkeleton />
      </section>
    );
  return Component ? <Component /> : null;
};

export default LazyPortfolio;
