import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { PortfolioItem } from "../types/portfolio";
import { projectTypeColors } from "../utils/constants";

interface BreadcrumbProps {
  projectType: PortfolioItem["projectType"];
  status: PortfolioItem["status"];
}

function Breadcrumb({ projectType, status }: BreadcrumbProps) {
  // const statusColors = {
  //   completed: "text-green-600 dark:text-green-400",
  //   "in-progress": "text-yellow-600 dark:text-yellow-400",
  //   concept: "text-gray-600 dark:text-gray-400",
  // };

  return (
    <div className='bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
        <nav className='flex items-center justify-between'>
          <Link
            to='/portfolio'
            className='inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors'
          >
            <ArrowLeft className='w-5 h-5 mr-2' />
            Back to Portfolio
          </Link>
          <div className=''>
            {/* <span
              className={`font-medium capitalize ${statusColors[status]} mr-2`}
            >
              {status?.replace("-", " ")}
            </span> */}
            <span
              className={`px-3 py-2 rounded-full text-sm font-medium ${projectTypeColors[projectType]}`}
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
