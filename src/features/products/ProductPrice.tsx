import { Skeleton } from "../../ui/skeleton/Skeleton";
import { formatCurrency } from "../../utils/helpers";
import { Product } from "./useProduct";

function ProductPrice({
  product,
  isLoading,
}: {
  product: Product;
  isLoading: boolean;
}) {
  if (isLoading) {
    return <Skeleton className='h-8 w-32' />;
  }

  return (
    <p className='text-3xl font-bold text-zinc-900 dark:text-stone-200'>
      {formatCurrency(product.price)}
    </p>
  );
}

export default ProductPrice;
