export const PortfolioDetailSkeleton = () => {
  return (
    <div className='min-h-screen bg-white dark:bg-gray-900'>
      {/* Breadcrumb */}
      <div className='bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <nav className='flex items-center justify-between'>
            {/* Back to Portfolio link */}
            <div className='flex items-center'>
              <div className='w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mr-2' />
              <div className='h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse' />
            </div>
            {/* Project type badge */}
            <div className='h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse' />
          </nav>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12' dir='rtl'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Images Section */}
          <div className='space-y-6'>
            {/* Main Image */}
            <div className='aspect-square w-full relative overflow-hidden rounded-lg'>
              <div className='w-full h-full bg-gray-200 dark:bg-gray-700 animate-pulse' />
            </div>

            {/* Thumbnail Images */}
            <div className='grid grid-cols-4 gap-2'>
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className='aspect-square rounded-md overflow-hidden'
                  >
                    <div className='w-full h-full bg-gray-200 dark:bg-gray-700 animate-pulse' />
                  </div>
                ))}
            </div>
          </div>

          {/* Project Info Section */}
          <div className='space-y-8'>
            {/* Title */}
            <div>
              <div className='h-12 w-4/5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4' />
            </div>

            {/* Technologies */}
            <div className='flex'>
              <div className='flex flex-wrap gap-3'>
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={i}
                      className='h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse'
                    />
                  ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <div className='space-y-2'>
                <div className='h-6 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse' />
                <div className='h-6 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse' />
                <div className='h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse' />
              </div>
            </div>

            {/* External Links */}
            <div className='flex gap-4'>
              <div className='h-12 w-32 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse' />
              <div className='h-12 w-28 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse' />
            </div>

            {/* About The Project Section */}
            <div>
              <div className='h-6 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4' />
              <div className='prose prose-gray dark:prose-invert max-w-none'>
                <div className='p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700'>
                  <div className='space-y-3'>
                    <div className='h-5 w-full bg-gray-200 dark:bg-gray-600 rounded animate-pulse' />
                    <div className='h-5 w-4/5 bg-gray-200 dark:bg-gray-600 rounded animate-pulse' />
                    <div className='h-5 w-5/6 bg-gray-200 dark:bg-gray-600 rounded animate-pulse' />
                    <div className='h-5 w-3/4 bg-gray-200 dark:bg-gray-600 rounded animate-pulse' />
                    <div className='h-5 w-2/3 bg-gray-200 dark:bg-gray-600 rounded animate-pulse' />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info Table */}
            <div>
              <div className='space-y-3'>
                {Array(4)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      key={index}
                      className='flex justify-between py-2 border-b border-gray-100 dark:border-gray-800'
                    >
                      <div className='h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse' />
                      <div className='h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse' />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
