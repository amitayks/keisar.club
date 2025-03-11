import HeroSection from "../ui/HeroSection";
import FeaturesSection from "../ui/FeaturesSection";
import FeaturesProducts from "../features/products/FeaturesProducts";
import CTASection from "../ui/CTASection";

const Home = () => {
  return (
    <div>
      <HeroSection />

      <FeaturesSection />

      <FeaturesProducts />

      <CTASection />
    </div>
  );
};

export default Home;
