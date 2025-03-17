import { Skeleton } from "./Skeleton";

function ProductItemSkeleton() {
  return (
    <section className='py-16 bg-white'>
      <div className='max-w-full mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
          {Array.from({ length: 3 }).map((_, i) => (
            <article
              key={i}
              className='bg-white rounded-lg shadow-md overflow-hidden transition-transform h-full flex flex-col'
            >
              {/* image loading skeleton */}
              <div className='aspect-square w-full'>
                <Skeleton className='w-full h-full object-cover' />
              </div>

              {/* content */}
              <div className='p-6 flex flex-col flex-grow'>
                {/* category tags */}
                <div
                  className='justify-between md:items-center hidden md:flex items-start mb-2'
                  dir='rtl'
                >
                  {[...Array(3)].map((_, i) => (
                    <span
                      key={i}
                      className='bg-stone-200 text-stone-800 md:text-xs text-[8px] font-medium px-2.5 py-0.5 rounded'
                    >
                      <Skeleton className='w-20 h-4' />
                    </span>
                  ))}
                </div>

                {/* name */}
                <h3
                  className='text-x md:text-xl font-semibold text-right mb-2'
                  dir='rtl'
                >
                  <Skeleton className='w-3/6 h-8' />
                </h3>

                {/* description */}
                <p className='text-gray-600 mb-4 text-right' dir='rtl'>
                  <Skeleton className='w-3/4 h-5' />
                </p>

                {/* price and button */}
                <div className='flex items-center justify-between mt-auto'>
                  <span className='md:text-2xl text-xl font-bold text-stone-700'>
                    <Skeleton className='w-16 h-6' />
                  </span>

                  <button className='rounded-md'>
                    <Skeleton className='w-20 h-8' />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductItemSkeleton;
