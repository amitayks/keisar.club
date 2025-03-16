import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import PortfolioPreview from "../features/portfolio/PortfolioPreview";
import FeatureHeader from "./FeatureHeader";

function FeaturesSection() {
  return (
    <section className='py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <FeatureHeader />

        <PortfolioPreview />

        <div className='text-center mt-12'>
          <Link
            to='/portfolio'
            className='inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors'
          >
            View All of Our Portfolio
            <span>
              <ArrowRight className='ml-2 h-5 w-5' />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
