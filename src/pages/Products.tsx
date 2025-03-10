import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, X } from "lucide-react";
import useProducts from "../products/useProducts";
import Spinner from "../ui/Spinner";

const Products = () => {
  const { products, isLoading } = useProducts();

  // State for filtering and searching
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = ["All", "Premium", "Standard", "Basic", "Custom"];

  if (isLoading) return <Spinner />;

  // Filter products based on search term and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "" ||
      selectedCategory === "All" ||
      product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-indigo-600 to-purple-600 text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          <div className='text-center'>
            <h1 className='text-4xl font-extrabold mb-4'>Our Products</h1>
            <p className='text-xl text-indigo-100 max-w-3xl mx-auto'>
              Explore our range of premium products designed to meet your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className='bg-white shadow-md'>
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
                className='block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className='absolute inset-y-0 right-0 pr-3 flex items-center'
                >
                  <X className='h-4 w-4 text-gray-400 hover:text-gray-600' />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className='flex items-center space-x-2'>
              <Filter className='h-5 w-5 text-gray-400' />
              <span className='text-sm text-gray-600'>Filter by:</span>
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

      {/* Products Grid */}
      <section className='py-12 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {filteredProducts.length > 0 ? (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {products.map((product) => (
                <div
                  key={product.id}
                  className='bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105'
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className='w-full h-64 object-cover'
                  />
                  <div className='p-6'>
                    <div className='flex justify-between items-start mb-2'>
                      <h3 className='text-xl font-semibold'>{product.name}</h3>
                      <span className='bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded'>
                        {product.category}
                      </span>
                    </div>
                    <p className='text-gray-600 mb-4'>
                      {product.description.split(" ").slice(0, 10).join(" ")}
                    </p>
                    <div className='flex items-center justify-between'>
                      <span className='text-2xl font-bold text-indigo-600'>
                        {product.price}
                      </span>
                      <Link
                        to={`/products/${product.SKU}`}
                        className='bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors'
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className='text-center py-12'>
              <h3 className='text-xl font-medium text-gray-900 mb-2'>
                No products found
              </h3>
              <p className='text-gray-600 mb-4'>
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("");
                }}
                className='bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors'
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
