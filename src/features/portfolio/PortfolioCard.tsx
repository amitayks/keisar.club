import { Link } from "react-router-dom";
import { Skeleton } from "../../ui/skeleton/Skeleton";
import { usePortfolioImage } from "./usePortfolioImage";
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
  const { imageData, isLoading } = usePortfolioImage(portfolio.image);

  return (
    <article
      key={portfolio.id}
      className='bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden transition-transform h-full flex flex-col product-card-transition'
    >
      <Link
        to={`/portfolio/${portfolio.SKU}`}
        state={{ preserveScroll: true }}
        className='flex flex-col h-full'
      >
        {/* Image container with fixed aspect ratio */}
        <div className='aspect-square w-full relative overflow-hidden'>
          <Skeleton className='absolute inset-0 w-full h-full' />
          {!isLoading && imageData && (
            <img
              src={imageData}
              alt={portfolio.title}
              className='w-full h-full object-cover absolute inset-0 z-10'
              onLoad={(e) => {
                const target = e.target as HTMLElement;
                target.style.opacity = "1";
              }}
              style={{ opacity: 0, transition: "opacity 0.3s ease-in-out" }}
            />
          )}
        </div>

        <div className='p-4 flex flex-col flex-grow'>
          <CategoryTag cat={portfolio?.category} type='portfolio' />

          <p
            className='text-stone-600 dark:text-stone-400 mb-4 text-right line-clamp-2 mt-3'
            dir='rtl'
          >
            {portfolio?.description}
          </p>

          <div className='flex items-center justify-center mt-auto pt-4 border-t border-stone-200 dark:border-zinc-700'>
            <h3
              className='text-lg md:text-xl font-semibold text-right text-zinc-900 dark:text-stone-200'
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
