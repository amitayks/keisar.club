import { useState } from "react";
import { Search, X } from "lucide-react";

function ProductFilters(products: any) {
  // State for filtering and searching
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  // Filter categories
  const categories = ["All", "Premium", "Standard", "Basic", "Custom"];

  return (
    <section className='bg-white dark:bg-zinc-900 shadow-sm border-b border-stone-200 dark:border-zinc-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
          {/* Search */}
          <div className='relative w-full md:w-72'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <Search className='h-5 w-5 text-stone-400' />
            </div>
            <input
              type='text'
              placeholder='Search products...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='block w-full pl-10 pr-10 py-2 border border-stone-300 dark:border-zinc-700 rounded-md leading-5 bg-white dark:bg-zinc-800 placeholder-stone-500 dark:placeholder-stone-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className='absolute inset-y-0 right-0 pr-3 flex items-center text-stone-400 hover:text-stone-600 dark:text-zinc-400 dark:hover:text-zinc-200'
              >
                <X className='h-4 w-4' />
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className='flex items-center overflow-x-auto pb-1 md:pb-0 hide-scrollbar'>
            <div className='flex gap-2'>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() =>
                    setSelectedCategory(category === "All" ? "" : category)
                  }
                  className={`px-4 py-2 text-sm rounded-md whitespace-nowrap transition-colors ${
                    (category === "All" && selectedCategory === "") ||
                    selectedCategory === category
                      ? "bg-indigo-600 text-white"
                      : "bg-stone-100 text-stone-800 hover:bg-stone-200 dark:bg-zinc-800 dark:text-stone-200 dark:hover:bg-zinc-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductFilters;
