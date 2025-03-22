import { Skeleton } from "./Skeleton";

const HomePageSkeleton = () => {
  return (
    <div className='min-h-screen'>
      {/* Banner Skeleton */}
      <div className='bg-zinc-800'>
        <div className='max-w-7xl mx-auto px-0 md:px-4'>
          {/* Desktop Banner Skeleton */}
          <div className='hidden md:block py-6 px-4 sm:px-6 lg:px-8'>
            <div className='w-full aspect-[21/12] rounded-2xl overflow-hidden'>
              <Skeleton className='w-full h-full rounded-2xl' />
            </div>
          </div>

          {/* Mobile Banner Skeleton */}
          <div className='md:hidden py-6 px-4'>
            <div className='w-full aspect-[9/12] rounded-lg overflow-hidden'>
              <Skeleton className='w-full h-full rounded-lg' />
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section Skeleton */}
      <div className='py-16 bg-zinc-200 dark:bg-zinc-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <Skeleton className='h-10 w-48 mx-auto mb-4' />
            <Skeleton className='h-6 w-full max-w-lg mx-auto' />
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8'>
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <PortfolioCardSkeleton key={index} />
              ))}
          </div>

          <div className='text-center mt-12'>
            <Skeleton className='h-6 w-48 mx-auto' />
          </div>
        </div>
      </div>

      {/* Gradient Divider */}
      <div className='bg-gradient-to-b from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 h-20 w-full'></div>

      {/* Featured Products Skeleton */}
      <div className='py-16 bg-white dark:bg-zinc-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <Skeleton className='h-10 w-64 mx-auto mb-4' />
            <Skeleton className='h-6 w-full max-w-lg mx-auto' />
          </div>

          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8'>
            {Array(8)
              .fill(0)
              .map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))}
          </div>

          <div className='text-center mt-12'>
            <Skeleton className='h-6 w-40 mx-auto' />
          </div>
        </div>
      </div>

      {/* Reviews Section Skeleton */}
      <div className='py-16 bg-indigo-50 dark:bg-zinc-800'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-10'>
            <Skeleton className='h-10 w-64 mx-auto mb-4' />
            <Skeleton className='h-6 w-full max-w-lg mx-auto' />
          </div>

          <div className='bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-6 md:p-8 min-h-[320px] flex items-center justify-center'>
            <div className='w-full'>
              <div className='flex justify-center mb-6'>
                <Skeleton className='h-12 w-12 rounded-full' />
              </div>

              <div className='space-y-3 mb-8'>
                <Skeleton className='h-6 w-3/4 mx-auto' />
                <Skeleton className='h-6 w-5/6 mx-auto' />
                <Skeleton className='h-6 w-2/3 mx-auto' />
              </div>

              <div className='flex flex-col items-center'>
                <Skeleton className='w-12 h-12 rounded-full mb-3' />
                <Skeleton className='h-5 w-32 mb-2' />
                <Skeleton className='h-4 w-24' />
              </div>

              <div className='flex justify-center mt-8 space-x-2'>
                {Array(4)
                  .fill(0)
                  .map((_, index) => (
                    <Skeleton
                      key={index}
                      className='h-2.5 w-2.5 rounded-full mx-0.5'
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Portfolio Card Skeleton
const PortfolioCardSkeleton = () => {
  return (
    <div className='bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden h-full flex flex-col'>
      <div className='aspect-square w-full'>
        <Skeleton className='w-full h-full' />
      </div>
      <div className='p-4 flex flex-col flex-grow space-y-3'>
        <Skeleton className='h-4 w-1/3' />
        <Skeleton className='h-4 w-5/6' />
        <div className='mt-auto pt-4'>
          <Skeleton className='h-6 w-2/3 mx-auto' />
        </div>
      </div>
    </div>
  );
};

// Product Card Skeleton
const ProductCardSkeleton = () => {
  return (
    <div className='bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden h-full flex flex-col'>
      <div className='aspect-square w-full'>
        <Skeleton className='w-full h-full' />
      </div>
      <div className='p-4 flex flex-col flex-grow space-y-3'>
        <Skeleton className='h-4 w-1/3' />
        <Skeleton className='h-6 w-4/5' />
        <Skeleton className='h-4 w-2/3' />
        <div className='mt-auto pt-4'>
          <Skeleton className='h-6 w-24 mx-auto' />
        </div>
      </div>
    </div>
  );
};

export default HomePageSkeleton;
