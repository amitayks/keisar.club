import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { usePortfolioImage } from "../hooks/usePortfolioImage";
import { PortfolioItem } from "../types/portfolio";

const PortfolioCard = ({
  portfolioItem,
  style,
}: {
  portfolioItem: PortfolioItem;
  style?: string;
}) => {
  const { image, isLoading: imageLoading } = usePortfolioImage(
    portfolioItem.image
  );

  return (
    <article
      className={`group relative bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-transparent ${style} `}
    >
      <Link to={`/portfolio/${portfolioItem.SKU}`} className='block'>
        <div className='aspect-square w-full relative overflow-hidden'>
          <div className='aspect-square bg-gray-200 dark:bg-gray-700' />
          {!imageLoading && image && (
            <img
              src={image}
              alt={portfolioItem.title}
              className='w-full h-full object-cover absolute inset-0 '
              onLoad={(e) => {
                const target = e.target as HTMLElement;
                target.style.opacity = "1";
              }}
              style={{ opacity: 0, transition: "opacity 0.3s ease-in-out" }}
            />
          )}
        </div>

        {/* Content */}
        <div className='px-6 py-6'>
          <h3 className='text-lg text-center font-semibold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-blue-200 transition-colors '>
            {portfolioItem.title}
          </h3>
        </div>
      </Link>

      {/* External Links */}
      <div className='absolute top-4 right-4 flex gap-2 md:opacity-0 group-hover:opacity-100 transition-opacity z-20'>
        {portfolioItem.githubLink && (
          <a
            href={portfolioItem?.githubLink}
            target='_blank'
            rel='noopener noreferrer'
            className='p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors'
            onClick={(e) => e.stopPropagation()}
          >
            <Github className='w-4 h-4 text-gray-700 dark:text-gray-300' />
          </a>
        )}
        {portfolioItem?.liveLink && (
          <a
            href={portfolioItem?.liveLink}
            target='_blank'
            rel='noopener noreferrer'
            className='p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors'
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className='w-4 h-4 text-gray-700 dark:text-gray-300' />
          </a>
        )}
      </div>
    </article>
  );
};

export default PortfolioCard;
