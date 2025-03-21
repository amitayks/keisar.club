import { Skeleton } from "../../ui/skeleton/Skeleton";
import { Product } from "./useProductItem";

function StockStatus({
  product,
  isLoading,
}: {
  product: Product;
  isLoading: boolean;
}) {
  if (isLoading) {
    return <Skeleton className='h-6 w-24 mb-6' />;
  }

  return (
    <div className='flex items-center gap-2 mb-6'>
      <div
        className={`h-3 w-3 rounded-full ${
          product?.stock === 0 ? "bg-red-500" : "bg-green-500"
        }`}
      ></div>
      <span className='text-sm font-medium text-stone-600 dark:text-stone-400'>
        in stock: {product.stock}
      </span>
    </div>
  );
}

export default StockStatus;
