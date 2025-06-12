import { Filter } from "lucide-react";
import { PROJECT_TYPES } from "../utils/constants";
import { useSearchParams } from "react-router-dom";

function PortfolioFilter({ style }: { style: string }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get("type") || PROJECT_TYPES?.[0]?.value;

  function handleFilterChange(value: string) {
    searchParams.set("type", value);
    setSearchParams(searchParams);
  }

  return (
    <div className={`${style}`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
        <div className='flex items-center justify-center'>
          {/* Project Type Filter */}
          <div className='flex items-center gap-2 overflow-x-auto pb-1 md:pb-0'>
            <Filter className='h-5 w-5 text-gray-400 flex-shrink-0' />
            <div className='flex gap-2 '>
              {PROJECT_TYPES.map((type) => (
                <button
                  key={type.value}
                  onClick={() => handleFilterChange(type.value)}
                  className={`px-4 py-2 text-sm rounded-lg whitespace-nowrap transition-colors font-medium 
                      ${
                        currentFilter === type.value
                          ? "bg-blue-600 text-white shadow-lg"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                      }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioFilter;
