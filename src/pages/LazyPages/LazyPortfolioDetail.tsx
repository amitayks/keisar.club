import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "../../ui/skeleton/Skeleton";

// Custom loading skeleton for portfolio detail
const PortfolioDetailSkeleton = () => {
  return (
    <div className='dark:bg-zinc-900 dark:text-white min-h-screen' dir='rtl'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* Breadcrumb */}
        <div className='flex items-center justify-between mb-8'>
          <Skeleton className='h-6 w-32' />
          <Skeleton className='h-6 w-24' />
        </div>

        {/* Portfolio Details */}
        <div className='lg:grid lg:grid-cols-2 lg:gap-x-8'>
          {/* Portfolio Images */}
          <div className='mb-8 lg:mb-0'>
            {/* Main image */}
            <div className='aspect-square w-full rounded-lg overflow-hidden mb-4'>
              <Skeleton className='w-full h-full' />
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
                    <Skeleton className='w-full h-full' />
                  </div>
                ))}
            </div>
          </div>

          {/* Portfolio Info */}
          <div className='space-y-6'>
            {/* Portfolio Title */}
            <div>
              <Skeleton className='h-10 w-3/4 mb-2' />
              <div className='flex gap-4 mb-4'>
                <Skeleton className='h-6 w-32' />
                <Skeleton className='h-6 w-40' />
              </div>
            </div>

            {/* Description */}
            <div>
              <Skeleton className='h-8 w-40 mb-2' />
              <div className='space-y-2'>
                <Skeleton className='h-4 w-full' />
                <Skeleton className='h-4 w-5/6' />
                <Skeleton className='h-4 w-4/6' />
              </div>
            </div>

            {/* Content */}
            <div>
              <Skeleton className='h-8 w-40 mb-2' />
              <div className='space-y-2'>
                <Skeleton className='h-4 w-full' />
                <Skeleton className='h-4 w-5/6' />
                <Skeleton className='h-4 w-full' />
                <Skeleton className='h-4 w-4/6' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const loadPortfolioDetail = async () => {
  const module = await import("../../pages/PortfolioDetail"); // Import dynamically
  return module.default;
};

const LazyPortfolioDetail = () => {
  const { data: Component, isLoading } = useQuery({
    queryKey: ["portfolioDetailComponent"],
    queryFn: loadPortfolioDetail,
    staleTime: Infinity, // Keeps it cached indefinitely
  });

  if (isLoading) return <PortfolioDetailSkeleton />;
  return Component ? <Component /> : null;
};

export default LazyPortfolioDetail;
