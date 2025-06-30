import BannerSection from "../components/BannerSection";
import FeaturedProjectsSection from "../components/FeaturedProjectsSection";
import Skills from "../components/Skills";

function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <BannerSection />

      <Skills
        aboutButton={true}
        style="bg-gradient-to-tr from-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
      />

      <FeaturedProjectsSection />
    </div>
  );
}

export default Home;
