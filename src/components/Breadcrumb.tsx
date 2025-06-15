import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PortfolioItem } from "../types/portfolio";
import { PROJECT_TYPE_COLOR } from "../utils/constants";

interface BreadcrumbProps {
  projectType: PortfolioItem["projectType"];
  status: PortfolioItem["status"];
}

function Breadcrumb({ projectType }: BreadcrumbProps) {
  const navigate = useNavigate();

  return (
    <div className='bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
        <nav className='flex items-center justify-between'>
          <button
            onClick={() => navigate(-1)}
            className='inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors'
          >
            <ArrowLeft className='w-5 h-5 mr-2' />
            Go Back
          </button>
          <div className=''>
            <span
              className={`px-3 py-2 rounded-full text-sm font-medium ${PROJECT_TYPE_COLOR[projectType]}`}
            >
              {projectType?.replace("-", " ")}
            </span>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Breadcrumb;
