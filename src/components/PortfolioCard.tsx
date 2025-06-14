import { Calendar, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { usePortfolioImage } from "../hooks/usePortfolioImage";
import { PortfolioItem } from "../types/portfolio";
import { projectTypeColors } from "../utils/constants";

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
      <Link
        to={`/portfolio/${portfolioItem.SKU}`}
        state={{ preserveScroll: true }}
        className='block'
      >
        {/* Image */}
        <div className='aspect-square w-full relative overflow-hidden'>
          <div className='aspect-square bg-gray-200 dark:bg-gray-700' />
          {!imageLoading && image && (
            <img
              src={image}
              alt={portfolioItem.title}
              className='w-full h-full object-cover absolute inset-0 z-10'
              onLoad={(e) => {
                const target = e.target as HTMLElement;
                target.style.opacity = "1";
              }}
              style={{ opacity: 0, transition: "opacity 0.3s ease-in-out" }}
            />
          )}
        </div>

        {/* Content */}
        <div className='px-6 pt-6'>
          {/* Project Type Badge */}
          <div
            className='md:flex items-center justify-between mb-3 hidden'
            dir='rtl'
          >
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                projectTypeColors[portfolioItem?.projectType || "Wood-Working"]
              }`}
            >
              {portfolioItem?.projectType?.replace("-", " ")}
            </span>
            <div
              className='flex items-center text-xs text-gray-500 dark:text-gray-400'
              dir='ltr'
            >
              <Calendar className='w-3 h-3 mr-1' />
              {new Date().getFullYear()}
            </div>
          </div>

          {/* Title */}
          <div dir={portfolioItem.settings.dir}>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
              {portfolioItem.title}
            </h3>

            <div className='border-t border-stone-200 dark:border-zinc-700 my-5 md:hidden '></div>

            {/* Description */}
            <p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2'>
              {portfolioItem.description}
            </p>

            {/* Technologies */}
            {portfolioItem.technologies && (
              <div className='md:flex flex-wrap justify-evenly gap-2 border-t border-stone-200 dark:border-zinc-700 hidden'>
                {portfolioItem.technologies.slice(0, 2).map((tech, index) => (
                  <span
                    key={index}
                    className='px-2 py-1 my-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-s rounded-md'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
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
