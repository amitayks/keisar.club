import { useState, useEffect } from "react";
import Banner from "../ui/home/Banner";
import PortfolioSection from "../ui/home/PortfolioSection";
import FeaturedProducts from "../ui/home/FeaturedProducts";
import ReviewSection from "../ui/home/ReviewSection";
import HomePageSkeleton from "../ui/skeleton/HomePageSkeleton";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate initial page load
  useEffect(() => {
    // Set a timeout to show skeleton for at least 800ms for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <HomePageSkeleton />;
  }

  return (
    <div className='min-h-screen animate-fadeIn'>
      <Banner />
      <PortfolioSection />
      <div className='bg-gradient-to-b from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 h-20 w-full'></div>
      <FeaturedProducts />
      <div className='bg-gradient-to-b from-zinc-200 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 h-20 w-full'></div>
      <ReviewSection />
      <div className='bg-gradient-to-t from-zinc-200 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 h-20 w-full'></div>
    </div>
  );
};

export default Home;
