import { Card } from "../../ui/skeleton/Card";
import { Skeleton } from "../../ui/skeleton/Skeleton";
import usePortfolioItem from "./usePortfolioItem";
// import { Button } from '../../ui/Button';

const PortfolioItem = () => {
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
        <Card className='grid gap-4 w-full h-full'>
          {portfolioItem?.images?.map((img: string, index: number) => (
            <img
              key={index}
              src={img}
              alt={portfolioItem?.title}
              className='rounded-lg object-cover w-full h-full'
            />
          ))}
        </Card>
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

export default PortfolioItem;
