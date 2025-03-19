import { formatCurrency } from "../../utils/helpers";
import { Product } from "./useProduct";
import { Skeleton } from "../../ui/skeleton/Skeleton";

function ProductTable({
  product,
  isLoading,
}: {
  product: Product;
  isLoading: boolean;
}) {
  if (isLoading) {
    return (
      <div className='mb-8'>
        <h2 className='text-lg font-semibold text-zinc-900 dark:text-stone-200 mb-2'>
          מידע נוסף
        </h2>
        <Skeleton className='h-48 w-full' />
      </div>
    );
  }

  return (
    <div className='mb-8'>
      <h2 className='text-lg font-semibold text-zinc-900 dark:text-stone-200 mb-2'>
        מידע נוסף
      </h2>
      <div className='text-stone-600 dark:text-stone-400 space-y-2'>
        <div className='flex justify-between py-2'>
          <span className='font-medium'>Wood</span>
          <span>{product?.wood}</span>
        </div>
        <div className='flex justify-between py-2'>
          <span className='font-medium'>Weight</span>
          <span>{product.weight}</span>
        </div>
        <div className='flex justify-between py-2'>
          <span className='font-medium'>Height</span>
          <span>{product.height}</span>
        </div>
        <div className='flex justify-between py-2'>
          <span className='font-medium'>Length</span>
          <span>{product.length}</span>
        </div>
        <div className='flex justify-between py-2'>
          <span className='font-medium'>Width</span>
          <span>{product.width}</span>
        </div>
        <div className='flex justify-between py-2'>
          <span className='font-medium'>Shipment Price</span>
          <span>
            {product.shipmentPrice
              ? formatCurrency(product.shipmentPrice)
              : formatCurrency(0)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductTable;
