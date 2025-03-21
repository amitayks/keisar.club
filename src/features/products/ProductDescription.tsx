import { Skeleton } from "../../ui/skeleton/Skeleton";
import { Product } from "./useProductItem";
function ProductDescription({
  product,
  isLoading,
}: {
  product: Product;
  isLoading: boolean;
}) {
  return (
    <div className='mb-6'>
      <h2 className='text-lg font-semibold text-zinc-900 dark:text-stone-200 mb-2'>
        תיאור
      </h2>
      {isLoading ? (
        <div className='space-y-2'>
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-5/6' />
          <Skeleton className='h-4 w-4/6' />
        </div>
      ) : (
        <p className='text-stone-600 dark:text-stone-400'>
          {product.longDescription}
        </p>
      )}
    </div>
  );
}

export default ProductDescription;
