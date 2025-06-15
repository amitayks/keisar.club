import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import PortfolioCard from "../components/PortfolioCard";
import PortfolioFilter from "../components/PortfolioFilter";
import usePortfolioItems from "../hooks/usePortfolioItems";
import { PortfolioItem } from "../types/portfolio";

function Portfolio() {
  const { portfolioItems, isLoading } = usePortfolioItems();
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      setIsInitialLoad(false);
    }
  }, [isLoading]);

  return (
    <div className='min-h-screen bg-gradient-to-bl dark:from-gray-800 dark:via-gray-900 dark:to-gray-900'>
      <PortfolioFilter style=' bg-gradient-to-br from-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-800' />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {isInitialLoad || isLoading ? (
          <PortfolioGridSkeleton />
        ) : portfolioItems.length === 0 ? (
          <NoProjectsFound />
        ) : (
          <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {portfolioItems.map((portfolioItem: PortfolioItem) => (
              <PortfolioCard
                key={portfolioItem.id}
                portfolioItem={portfolioItem}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const PortfolioGridSkeleton = () => {
  return (
    <div
      className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8'
      dir='rtl'
    >
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <article
            key={index}
            className='group relative bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden border border-gray-100 dark:border-transparent animate-pulse'
          >
            <div className='aspect-square w-full relative overflow-hidden'>
              <div className='aspect-square bg-gray-200 dark:bg-gray-700' />
            </div>

            <div className='px-6 py-6'>
              <div className='flex items-center justify-center '>
                <div className='h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded ' />
              </div>
            </div>

            <div className='absolute top-4 right-4 flex gap-2 md:opacity-0'>
              <div className='w-8 h-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-lg'>
                <div className='w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded m-2' />
              </div>
              <div className='w-8 h-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-lg'>
                <div className='w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded m-2' />
              </div>
            </div>
          </article>
        ))}
    </div>
  );
};

const NoProjectsFound = () => {
  return (
    <div className='flex flex-col items-center justify-center py-16 text-center max-w-md mx-auto'>
      <div className='w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-6'>
        <Search className='w-12 h-12 text-gray-400' />
      </div>
      <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
        No projects found
      </h3>
      <p className='text-gray-600 dark:text-gray-400 mb-6'>
        Try adjusting your search terms or filters to find what you're looking
        for.
      </p>
    </div>
  );
};

export default Portfolio;
