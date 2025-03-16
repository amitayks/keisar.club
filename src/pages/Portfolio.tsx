import { Skeleton } from "../ui/Skeleton";
import { Card } from "../ui/Card";
import usePortfolio from "../features/portfolio/usePortfolio";
import PortfolioPreview from "../features/portfolio/PortfolioPreview";

interface Portfolio {
  id: string;
  title: string;
  content: string;
  images: string[];
  SKU: string;
  category: string;
  description: string;
}

function Portfolio() {
  const { portfolio, isLoading } = usePortfolio();

  console.log(portfolio);

  if (isLoading) {
    return (
      <Card className='p-6 max-w-xl mx-auto'>
        <Skeleton className='h-6 w-1/2 mb-4' />
        <Skeleton className='h-4 w-full mb-2' />
        <Skeleton className='h-4 w-full mb-2' />
        <Skeleton className='h-60 w-full' />
      </Card>
    );
  }

  return (
    <section className='py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            Our Portfolio
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Discover our diverse portfolio showcasing a range of projects and
            achievements.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {portfolio.map((portfolio) => (
            <PortfolioPreview portfolio={portfolio} />
          ))}
        </div>
      </div>
    </section>

    // //////////////////////////////////////////////////////////////
    // <Card className='p-6 max-w-xl mx-auto shadow-lg rounded-2xl'>
    //   <h2 className='text-2xl font-bold mb-4 text-center'>{blogs?.title}</h2>
    //   <p className='text-gray-600 text-center mb-6'>{blogs?.content}</p>
    //   <div className='grid grid-cols-2 gap-4'>
    //     {blogs?.images.map((img: string, index: number) => (
    //       <img
    //         key={index}
    //         src={img}
    //         alt={blogs?.title}
    //         className='rounded-lg object-cover w-full h-48'
    //       />
    //     ))}
    //   </div>
    // </Card>
  );
}

export default Portfolio;
