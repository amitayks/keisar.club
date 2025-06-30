import { ExternalLink, Github } from "lucide-react";
import AdditionalInfoTable from "../components/AdditionalInfoTable";
import Breadcrumb from "../components/Breadcrumb";
import ErrorComponent from "../components/ErrorComponent";
import ExpandTableText from "../components/ExpandTableText";
import NoItemFound from "../components/NoItemFound";
import { PortfolioDetailSkeleton } from "../components/PortfolioDetailSkeleton";
import PortfolioImage from "../components/PortfolioImage";
import usePortfolioItem from "../hooks/usePortfolioItem";

const PortfolioDetail = () => {
  const {
    portfolioItem,
    image,
    imagePack,
    isLoadingPortfolio,
    isLoadingImage,
    isLoadingImagePack,
    error,
  } = usePortfolioItem();

  if (isLoadingPortfolio) {
    return <PortfolioDetailSkeleton />;
  }

  if (!portfolioItem) {
    return <NoItemFound />;
  }
  if (error) {
    return (
      <ErrorComponent
        message={`Failed to load portfolio item '${portfolioItem?.SKU}'`}
        details={error?.message || "The portfolio item could not be retrieved. Please try again."}
        showRetry={true}
        onRetry={() => window.location.reload()}
        showNavigation={true}
        fullPage={true}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Breadcrumb projectType={portfolioItem?.projectType} status={portfolioItem.status} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" dir="rtl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <PortfolioImage
            imageAspect={portfolioItem.settings?.imageAspect}
            image={image}
            imagePack={imagePack}
            title={portfolioItem.title}
            isLoadingImage={isLoadingImage}
            isLoadingImagePack={isLoadingImagePack}
          />

          <div className="space-y-8" dir={portfolioItem.settings.dir}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {portfolioItem.title}
              </h1>
            </div>

            <div className="flex ">
              <div className="flex flex-wrap gap-3 ">
                {portfolioItem?.technologies?.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                {portfolioItem.description}
              </p>
            </div>

            {(portfolioItem?.githubLink || portfolioItem?.liveLink) && (
              <div className="flex gap-4">
                {portfolioItem.githubLink && (
                  <a
                    href={portfolioItem?.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View Code
                  </a>
                )}
                {portfolioItem?.liveLink && (
                  <a
                    href={portfolioItem?.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Live
                  </a>
                )}
              </div>
            )}

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {portfolioItem.settings.dir === "rtl" ? "על הפרוייקט" : "About The Project"}
              </h3>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  <ExpandTableText
                    readMoreText={portfolioItem.settings.dir === "rtl" ? "קרא עוד" : "Read More"}
                    maxLength={100}
                  >
                    {portfolioItem?.longDescription}
                  </ExpandTableText>
                </p>
              </div>
            </div>

            {portfolioItem?.additionalInfo?.length > 0 && (
              <AdditionalInfoTable additionalInfo={portfolioItem.additionalInfo} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
