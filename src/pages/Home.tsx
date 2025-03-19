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
      <div className='bg-gradient-to-b from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 h-20 w-full'></div>
      <ProductSection />
      {/* <CTASection /> */}
    </div>
  );
};

export default Home;
