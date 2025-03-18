import Banner from "../ui/home/Banner";
import PortfolioSection from "../ui/home/PortfolioSection";
import ProductSection from "../ui/home/FeaturesProducts";
// import CTASection from "../ui/home/CTASection";

const Home = () => {
  // const { settings, isLoading } = useSettings();
  // console.log(settings);
  return (
    <div className='min-w-min animate-fadeIn'>
      <Banner />
      <PortfolioSection />
      <ProductSection />
      {/* <CTASection /> */}
    </div>
  );
};

export default Home;
