import Banner from "./Banner";
import FeaturesSection from "./FeaturesPortfolio";
import FeaturesProducts from "../../features/products/FeaturesProducts";
import CTASection from "./CTASection";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturesSection />
      <FeaturesProducts />
      {/* <CTASection /> */}
    </div>
  );
};

export default Home;
