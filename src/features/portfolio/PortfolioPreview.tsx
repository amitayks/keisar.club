import { Link } from "react-router-dom";
import usePortfolio from "./usePortfolio";
import { Skeleton } from "../../ui/Skeleton";

type Portfolio = {
  id: string;
  title: string;
  content: string;
  mainImage: string;
  SKU: string;
  category: string;
  description: string;
};

function PortfolioPreview() {
  const { portfolio, isLoading } = usePortfolio();
  // const handleClick = () => {
  //   sessionStorage.setItem("scrollPosition", window.scrollY.toString());
  // };

  if (isLoading) {
    return <Skeleton className='h-60 w-full' />;
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
      {portfolio.map((product, i) =>
        i < 6 ? <Preview key={i} portfolio={product} /> : null
      )}
    </div>
  );
}

function Preview({ portfolio }: { portfolio: Portfolio }) {
  return (
    <div
      key={portfolio.id}
      // className='bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105'
      className='bg-white rounded-lg shadow-md overflow-hidden transition-transform'
    >
      <Link
        to={`/portfolio/${portfolio.SKU}`}
        state={{ preserveScroll: true }}
        // onClick={handleClick}
      >
        <img
          src={portfolio.mainImage}
          alt={portfolio.title}
          // className='w-full h-64 object-cover'
          className='w-full h-70 object-cover'
        />
        <div className='p-6'>
          <div className='flex justify-between items-start mb-2'>
            <span className='bg-stone-200 text-stone-800 text-xs font-medium px-2.5 py-0.5 rounded'>
              engraving
              {/* {blog?.category} */}
            </span>
            <h3 className='text-xl font-semibold text-right' dir='rtl'>
              {portfolio.title}
            </h3>
          </div>
          <p className='text-gray-600 mb-4 text-right' dir='rtl'>
            {portfolio.description?.split(" ").slice(0, 10).join(" ")}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default PortfolioPreview;
