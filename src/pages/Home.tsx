import HeroSection from "../ui/HeroSection";
import FeaturesSection from "../ui/FeaturesSection";
import FeaturesProducts from "../features/products/FeaturesProducts";
import CTASection from "../ui/CTASection";

import { Skeleton } from "../ui/Skeleton";
import { Card } from "../ui/Card";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <FeaturesProducts />
      <CTASection />
      <Card className='p-6 max-w-xl mx-auto'>
        <Skeleton className='h-6 w-1/2 mb-4' />
        <Skeleton className='h-4 w-full mb-2' />
        <Skeleton className='h-4 w-full mb-2' />
        <Skeleton className='h-60 w-full' />
      </Card>
    </div>
  );
};

export default Home;
