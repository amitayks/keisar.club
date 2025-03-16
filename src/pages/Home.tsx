import HeroSection from "../ui/HeroSection";
import FeaturesSection from "../ui/FeaturesPortfolio";
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
      {/* <CTASection /> */}
    </div>
  );
};

export default Home;
