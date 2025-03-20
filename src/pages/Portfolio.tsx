import { useEffect, useState } from "react";
import PortfolioCard from "../features/portfolio/PortfolioCard";
import usePortfolio from "../features/portfolio/usePortfolio";
import { Skeleton } from "../ui/skeleton/Skeleton";

function Portfolio() {
  const { portfolio, isLoading } = usePortfolio();
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Set initial load to false after component mounts
  useEffect(() => {
    if (!isLoading) {
      setIsInitialLoad(false);
    }
  }, [isLoading]);

  // Function to render portfolio grid or portfolio card skeletons
  const renderPortfolioGrid = () => {
    if (isInitialLoad || isLoading) {
      // Return skeleton grid while loading
      return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8'>
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <PortfolioCardSkeleton key={index} />
            ))}
        </div>
      );
    }

    if (portfolio.length === 0) {
      return (
        <div className='flex flex-col items-center justify-center py-16 text-center max-w-md mx-auto'>
          <h3 className='text-xl font-semibold text-zinc-900 dark:text-stone-200 mb-3'>
            No portfolio items found
          </h3>
          <p className='text-stone-600 dark:text-stone-400 mb-6'>
            Please check back later as we continue to update our portfolio with
            new projects.
          </p>
        </div>
      );
    }

    return (
      <div className='grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8'>
        {portfolio.map((item) => (
          <PortfolioCard key={item.id} portfolio={item} />
        ))}
      </div>
    );
  };

  return (
    <section className='bg-zinc-100 dark:bg-zinc-800 min-h-screen'>
      <div className='bg-gradient-to-b from-white to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 h-20 w-full'></div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='text-center mb-16'>
          {isLoading ? (
            <>
              <Skeleton className='h-10 w-64 mx-auto mb-4' />
              <Skeleton className='h-6 w-full max-w-lg mx-auto' />
            </>
          ) : (
            <>
              <h2 className='text-3xl font-bold text-stone-900 dark:text-stone-200 mb-4'>
                Our Portfolio
              </h2>
              <p className='text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto'>
                Discover our diverse portfolio showcasing a range of projects
                and achievements.
              </p>
            </>
          )}
        </div>

        {renderPortfolioGrid()}
      </div>
    </section>
  );
}

// Skeleton component for portfolio cards during loading
const PortfolioCardSkeleton = () => {
  return (
    <div className='bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden h-full flex flex-col'>
      <div className='aspect-square w-full'>
        <Skeleton className='w-full h-full' />
      </div>
      <div className='p-4 flex flex-col flex-grow space-y-4'>
        <Skeleton className='h-4 w-1/3' />
        <Skeleton className='h-4 w-4/5' />
        <div className='mt-auto pt-4'>
          <Skeleton className='h-6 w-3/4 mx-auto' />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
