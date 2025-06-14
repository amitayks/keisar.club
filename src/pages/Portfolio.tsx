import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import PortfolioCard from "../components/PortfolioCard";
import PortfolioFilter from "../components/PortfolioFilter";
import usePortfolioItems from "../hooks/usePortfolioItems";
import { PortfolioItem } from "../types/portfolio";

function Portfolio() {
  const { portfolioItems, isLoading, portfolioError } = usePortfolioItems();
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      setIsInitialLoad(false);
    }
  }, [isLoading]);

  return (
    <div className='min-h-screen bg-gradient-to-bl dark:from-gray-800 dark:via-gray-900 dark:to-gray-900'>
      <PortfolioFilter style=' bg-gradient-to-br from-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-800' />

      {/* Portfolio Grid */}
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
          <div
            key={index}
            className='bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 animate-pulse'
          >
            <div className='aspect-[4/4] bg-gray-200 dark:bg-gray-700' />
            <div className='p-6'>
              <div className='flex items-center justify-between mb-3'>
                <div className='h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded-full' />
                <div className='h-4 w-12 bg-gray-200 dark:bg-gray-700 rounded' />
              </div>
              <div className='h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-2' />
              <div className='h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-1' />
              <div className='h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded mb-4' />
              <div className='flex gap-2'>
                <div className='h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded' />
                <div className='h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded' />
              </div>
            </div>
          </div>
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
