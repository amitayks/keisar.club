import { useState } from "react";
import { Search, Filter, X } from "lucide-react";

function ProductFilters(products: any) {
  // State for filtering and searching
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  // Filter products based on search term and category
  const categories = ["All", "Premium", "Standard", "Basic", "Custom"];

  //   const filteredProducts = products.filter((product: any) => {
  //     const matchesSearch =
  //       product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       product.description.toLowerCase().includes(searchTerm.toLowerCase());
  //     const matchesCategory =
  //       selectedCategory === "" ||
  //       selectedCategory === "All" ||
  //       product.category === selectedCategory;
  //     return matchesSearch && matchesCategory;
  //   });

  return (
    <section className=' shadow-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0'>
          {/* Search */}
          <div className='relative w-full md:w-64'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <Search className='h-5 w-5 text-gray-400' />
            </div>
            <input
              type='text'
              placeholder='Search products...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='block w-full pl-10 pr-3 py-2 border border-zinc-700 rounded-md leading-5  dark:bg-zinc-800 placeholder-gray-500 focus:outline-none focus:ring-zinc-600 focus:border-zinc-600 sm:text-sm'
            />

            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className='absolute inset-y-0 right-0 pr-3 flex items-center dark:text-zinc-400'
              >
                <X className='h-4 w-4 text-gray-400 hover:text-gray-600' />
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className='flex items-center space-x-2'>
            {/* <Filter className='h-5 w-5 text-gray-400' /> */}
            {/* <span className='text-sm text-gray-600'>Filter by:</span> */}
            <div className='flex flex-wrap gap-2'>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() =>
                    setSelectedCategory(category === "All" ? "" : category)
                  }
                  className={`px-3 py-1 text-sm rounded-full ${
                    (category === "All" && selectedCategory === "") ||
                    selectedCategory === category
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
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
