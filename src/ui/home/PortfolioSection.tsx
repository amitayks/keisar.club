import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import PortfolioCard from "../../features/portfolio/PortfolioCard";
import usePortfolio from "../../features/portfolio/usePortfolio";

function PortfolioSection() {
  const { portfolio } = usePortfolio();

  return (
    <section className='py-16 dark:bg-zinc-800 bg-zinc-200 text-zinc-900 dark:text-zinc-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* <FeatureHeader /> */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold mb-4'>Portfolio</h2>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
          {portfolio.map(
            (portfolio, i) =>
              i < 6 && (
                <PortfolioCard key={portfolio.id} portfolio={portfolio} />
              )
          )}
        </div>

        <div className='text-center mt-12'>
          <Link
            to='/portfolio'
            className='inline-flex items-center text-stone-500 dark:text-stone-400 font-medium hover:text-stone-900 dark:hover:text-stone-200 transition-colors'
          >
            View All of Our Portfolio
            <span>
              <ArrowRight className='ml-2 h-5 w-5' />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
