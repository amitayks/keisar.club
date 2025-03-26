import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PortfolioCard from "../portfolio/PortfolioCard";
import usePortfolio from "../portfolio/usePortfolio";
import { Skeleton } from "../../ui/skeleton/Skeleton";

function PortfolioSection() {
  const { portfolio, isLoading } = usePortfolio();
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Set initial load to false after component mounts and data is loaded
  useEffect(() => {
    if (!isLoading) {
      setIsInitialLoad(false);
    }
  }, [isLoading]);

  const displayedPortfolio = portfolio.slice(0, 6);

  return (
    <section className='py-16 dark:bg-zinc-800 bg-zinc-200 text-zinc-900 dark:text-zinc-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          {isLoading ? (
            <Skeleton className='h-10 w-48 mx-auto mb-4' />
          ) : (
            <h2 className='text-3xl font-bold mb-4'>Our Portfolio</h2>
          )}
          {isLoading ? (
            <Skeleton className='h-6 w-full max-w-lg mx-auto' />
          ) : (
            <p className='text-stone-700 dark:text-stone-400 max-w-2xl mx-auto'>
              Explore our past work and see the quality of our craftsmanship
            </p>
          )}
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8'>
          {isInitialLoad || isLoading
            ? Array(6)
                .fill(0)
                .map((_, index) => <PortfolioCardSkeleton key={index} />)
            : displayedPortfolio.map((item) => (
                <PortfolioCard key={item.id} portfolio={item} />
              ))}
        </div>

        <div className='text-center mt-12'>
          <Link
            to='/portfolio'
            className='inline-flex items-center text-stone-700 dark:text-stone-400 font-medium hover:text-stone-900 dark:hover:text-stone-200 transition-colors group'
          >
            <span>View All of Our Portfolio</span>
            <ArrowRight className='ml-2 h-5 w-5 transition-transform group-hover:translate-x-1' />
          </Link>
        </div>
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

export default PortfolioSection;
