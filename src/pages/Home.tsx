import Banner from "../ui/home/Banner";
import PortfolioSection from "../ui/home/PortfolioSection";
import FeaturesProducts from "../ui/home/FeaturesProducts";
// import CTASection from "../ui/home/CTASection";

const Home = () => {
  return (
    <div className='min-w-min animate-fadeIn'>
      <Banner />
      <PortfolioSection />
      <FeaturesProducts />
      {/* <CTASection /> */}
    </div>
  );
};

export default Home;
