import { Link } from "react-router-dom";
import { useState } from "react";
import { Skeleton } from "../../ui/skeleton/Skeleton";
import { useProductImage } from "../products/useProductImage";
import CategoryTag from "../../ui/CategoryCard";

type Portfolio = {
  id: string;
  title: string;
  content: string;
  image: string;
  SKU: string;
  category: string[];
  description: string;
};

function PortfolioCard({ portfolio }: { portfolio: Portfolio }) {
  const { imageData, isLoading } = useProductImage(portfolio.image);
  const [isImageLoaded, setIsImageLoaded] = useState(isLoading);

  return (
    <article
      key={portfolio.id}
      className='bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden transition-transform min-h-full'
    >
      <Link
        to={`/portfolio/${portfolio.SKU}`}
        state={{ preserveScroll: true }}
        className='flex flex-col h-full'
      >
        {/* {isLoading || !imageData ? (
          <div className='aspect-square w-full'>
            <Skeleton className='w-full h-full object-cover' />
          </div>
        ) : (
          <img
            src={imageData}
            alt={portfolio.title}
            // loading='lazy'
            className='w-full h-70 object-cover'
          />
        )} */}
        <div className='relative aspect-square w-full'>
          {isLoading && (
            <Skeleton className='absolute inset-0 w-full h-full object-cover' />
          )}
          {imageData && (
            <img
              src={imageData}
              alt={portfolio.title}
              onLoad={() => {
                const timer = setTimeout(() => {
                  setIsImageLoaded(true);
                }, 5000);
                return () => clearTimeout(timer);
              }}
              className='w-full h-70 object-cover'
            />
          )}
        </div>

        <div className='py-3 px-3 flex flex-col flex-grow'>
          <CategoryTag cat={portfolio?.category} type='portfolio' />

          <p
            className='hidden md:block text-gray-600 mb-6 text-right'
            dir='rtl'
          >
            {portfolio?.description?.split(" ").slice(0, 4).join(" ")}
          </p>

          <div className='flex items-center justify-center mt-auto md:border-t border-blue-200 md:pt-4 dark:border-zinc-700'>
            <h3
              className='text-x md:text-xl mb-2  font-semibold text-right'
              dir='rtl'
            >
              {portfolio?.title}
            </h3>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default PortfolioCard;
