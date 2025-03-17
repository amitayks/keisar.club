import { Skeleton } from "./Skeleton";

function HomeLoadingSkeleton() {
  return (
    <>
      <div className='relative max-w-3xl w-full mx-auto py-10 hidden md:block'>
        {/* Container with side labels */}
        <div className='relative'>
          {/* Left Hebrew Text Skeleton */}
          <Skeleton className='absolute left-0  top-1/2 transform -translate-y-1/2 h-20 w-36' />

          {/* Right Hebrew Text Skeleton */}
          <Skeleton className='absolute right-0 top-1/2 transform -translate-y-1/2 h-20 w-36' />

          {/* Main Image Container Skeleton */}
          <div className='rounded-xl overflow-hidden mx-40 '>
            <div className='relative aspect-square'>
              {/* Main wooden bowl background */}
              <Skeleton className='absolute inset-0 rounded-xl' />

              {/* Wooden Bowl Ring Skeletons */}
              <div className='absolute inset-0 flex items-center justify-center'>
                {[...Array(3)].map((_, i) => (
                  <Skeleton
                    key={i}
                    className='absolute rounded-full opacity-70'
                    style={{
                      width: `${90 - i - 1 * 12}%`,
                      height: `${90 - i - 1 * 12}%`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Banner Skeleton */}
      <div className='flex flex-col max-w-lg w-full mx-auto py-10 px-6 gap-5 md:hidden'>
        {/* Main Image Container Skeleton */}
        <div className='rounded-xl overflow-hidden'>
          <div className='relative aspect-square'>
            {/* Main wooden bowl background */}
            <Skeleton className='absolute inset-0 rounded-xl' />

            {/* Wooden Bowl Ring Skeletons - making it more heart-shaped */}
            <div className='absolute inset-0 flex items-center justify-center'>
              {[...Array(3)].map((_, i) => (
                <Skeleton
                  key={i}
                  className='absolute rounded-full opacity-70'
                  style={{
                    width: `${90 - i * 12}%`,
                    height: `${90 - i * 12}%`,
                    borderRadius: "50%",
                  }}
                />
              ))}

              {/* Heart Shape Skeleton */}
              <Skeleton
                className='absolute w-1/4 h-1/4 rounded-full'
                style={{ top: "38%" }}
              />
            </div>
          </div>
        </div>

        {/* Hebrew Text Skeleton at the bottom */}
        <div className='w-full flex justify-center my-10'>
          <Skeleton className='h-20 w-96' />
        </div>
      </div>
    </>
  );
}

export default HomeLoadingSkeleton;
