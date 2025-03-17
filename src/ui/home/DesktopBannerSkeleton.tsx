import { Skeleton } from "../skeleton/Skeleton";

const DesktopBannerSkeleton = () => {
  return (
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
  );
};

export default DesktopBannerSkeleton;
