import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import useFeaturdItems from "../hooks/useFeaturedItems";
import PortfolioCard from "./PortfolioCard";

function FeaturedProjectsSection() {
  const { portfolioItems: featuredProjects } = useFeaturdItems(true);

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work across different disciplines
          </p>
        </div>

        {featuredProjects.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" dir="rtl">
            {featuredProjects.map((featuredItem, i) => {
              if (i >= 6) return;
              return (
                <PortfolioCard
                  key={i}
                  portfolioItem={featuredItem}
                  style={`
                    ${i >= 4 ? "hidden md:block" : ""}
                  `}
                />
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <ExternalLink className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Projects Coming Soon
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm currently working on some exciting projects. Check back soon!
            </p>
          </div>
        )}

        <div className="text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl group"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjectsSection;
