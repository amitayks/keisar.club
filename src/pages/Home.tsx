import Banner from "../features/home/Banner";
import PortfolioSection from "../features/home/PortfolioSection";
import FeaturedProducts from "../features/home/FeaturedProducts";
import ReviewSection from "../features/home/ReviewSection";

const Home = () => {
  return (
    <div className='min-h-screen animate-fadeIn'>
      <Banner />
      <PortfolioSection />
      <div className='bg-gradient-to-b from-zinc-200 to-white dark:from-zinc-800 dark:to-zinc-900 h-20 w-full'></div>
      <FeaturedProducts />
      <div className='bg-gradient-to-b from-white to-zinc-200 dark:from-zinc-900 dark:to-zinc-800 h-20 w-full'></div>
      <ReviewSection />
      <div className='bg-gradient-to-b from-zinc-200 to-white dark:from-zinc-800 dark:to-zinc-900 h-20 w-full'></div>
    </div>
  );
};

export default Home;
