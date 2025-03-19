import { Skeleton } from "../ui/skeleton/Skeleton";
import usePortfolioItem from "../features/portfolio/usePortfolioItem";
// import { Button } from '../../ui/Button';

const PortfolioDetail = () => {
  const { portfolioItem, isLoading } = usePortfolioItem();

  if (isLoading) {
    return (
      <div className='p-20 max-w-2xl mx-auto shadow-lg rounded-2xl'>
        <Skeleton className='h-8 w-3/4 mb-4' />
        <Skeleton className='h-5 w-full mb-4' />
        <Skeleton className='h-60 w-full' />
      </div>
    );
  }

  return (
    <div className='p-20 max-w-2xl mx-auto shadow-lg rounded-2xl'>
      <h2 className='text-2xl font-bold mb-4 text-center'>
        {portfolioItem?.title}
      </h2>
      <p className='text-gray-600 text-center mb-6'>{portfolioItem?.content}</p>
      <img
        src={portfolioItem?.mainImage}
        alt={portfolioItem?.title}
        className='rounded-lg object-cover w-full h-full-6'
      />
      <div className='grid grid-cols-2 gap-4'>
        <div className='grid gap-4 h-full bg-white shadow-sm rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 w-full mx-auto max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%]'>
          {portfolioItem?.images?.map((img: string, index: number) => (
            <img
              key={index}
              src={img}
              alt={portfolioItem?.title}
              className='rounded-lg object-cover w-full h-full'
            />
          ))}
        </div>
      </div>
      {/* {portfolioItem?.product && ( */}
      <div className='mt-6 text-center'>
        <button className='bg-blue-600 text-white px-4 py-2 rounded-md'>
          לרכישה כעת
        </button>
      </div>
      {/* )} */}
    </div>
  );
};

export default PortfolioDetail;
