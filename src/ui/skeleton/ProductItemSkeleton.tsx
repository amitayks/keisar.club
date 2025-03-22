import { Skeleton } from "./Skeleton";

function ProductItemSkeleton({ length = 3 }: { length?: number }) {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
      {Array.from({ length }).map((_, i) => (
        <article
          key={i}
          className='bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col'
        >
          {/* Image skeleton - maintaining exact aspect ratio */}
          <div className='aspect-square w-full'>
            <Skeleton className='w-full h-full' />
          </div>

          {/* Content area with consistent padding */}
          <div className='p-6 flex flex-col flex-grow'>
            {/* Category tags - matching actual layout */}
            <div
              className='justify-between md:items-center hidden md:flex items-start mb-1'
              dir='rtl'
            >
              {[...Array(3)].map((_, i) => (
                <span key={i} className='inline-block'>
                  <Skeleton className='w-16 h-4 rounded' />
                </span>
              ))}
            </div>

            {/* Product name - right aligned */}
            <div className='text-right mb-2' dir='rtl'>
              <Skeleton className='w-3/5 h-6 ml-auto' />
            </div>

            {/* Description - right aligned */}
            <div className='text-right mb-2' dir='rtl'>
              <Skeleton className='w-3/4 h-4 ml-auto' />
            </div>

            {/* Price section with blue divider */}
            <div className='flex items-center justify-center mt-auto border-t border-blue-200 pt-1'>
              <span className='w-full text-center'>
                <Skeleton className='w-16 h-6 mx-auto' />
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ProductItemSkeleton;
