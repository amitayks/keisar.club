export const PortfolioDetailSkeleton = () => {
  return (
    <div className='min-h-screen bg-white dark:bg-gray-900' dir='rtl'>
      <div className='bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <div className='flex items-center justify-between'>
            <div className='h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse' />
            <div className='h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse' />
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <div className='space-y-6'>
            <div className='aspect-square bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse' />
            <div className='grid grid-cols-4 gap-4'>
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className='aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse'
                  />
                ))}
            </div>
          </div>

          <div className='space-y-8'>
            <div>
              <div className='h-10 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4' />
              <div className='h-6 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2' />
              <div className='h-6 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse' />
            </div>

            <div className='grid grid-cols-2 gap-6'>
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className='h-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse'
                  />
                ))}
            </div>

            <div>
              <div className='h-6 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4' />
              <div className='flex gap-3'>
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={i}
                      className='h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse'
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
