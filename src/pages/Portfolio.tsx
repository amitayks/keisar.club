import PortfolioCard from "../features/portfolio/PortfolioCard";
import usePortfolio from "../features/portfolio/usePortfolio";

function Portfolio() {
  const { portfolio } = usePortfolio();

  return (
    <section className='py-16 bg-zinc-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold text-stone-300 mb-4'>
            Our Portfolio
          </h2>
          <p className='text-xl text-stone-400 max-w-3xl mx-auto'>
            Discover our diverse portfolio showcasing a range of projects and
            achievements.
          </p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
          {portfolio.map((portfolio) => (
            <PortfolioCard key={portfolio.id} portfolio={portfolio} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
