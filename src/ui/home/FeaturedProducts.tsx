import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useProducts from "../../features/products/useProducts";
import ProductCard from "../../features/products/ProductCard";
import { Skeleton } from "../skeleton/Skeleton";

function FeaturedProducts() {
  const { products, isLoading } = useProducts();
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Set initial load to false after component mounts and data is loaded
  useEffect(() => {
    if (!isLoading) {
      setIsInitialLoad(false);
    }
  }, [isLoading]);

  const featuredProducts = products.slice(0, 8);

  return (
    <section className='py-16 bg-white dark:bg-zinc-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-stone-900 dark:text-stone-200 mb-4'>
            Featured Products
          </h2>
          <p className='text-stone-600 dark:text-stone-400 max-w-2xl mx-auto'>
            Explore our collection of high-quality handcrafted items
          </p>
        </div>

        {/* Products Grid with Skeleton Loading */}
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8'>
          {isInitialLoad || isLoading
            ? Array(8)
                .fill(0)
                .map((_, index) => <ProductCardSkeleton key={index} />)
            : featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </div>

        {/* View All Link */}
        <div className='text-center mt-12'>
          <Link
            to='/products'
            className='inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium transition-colors group'
          >
            <span>View All Products</span>
            <ArrowRight className='ml-2 h-5 w-5 transition-transform group-hover:translate-x-1' />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Skeleton component for product cards during loading
const ProductCardSkeleton = () => {
  return (
    <div className='bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden h-full flex flex-col'>
      <div className='aspect-square w-full'>
        <Skeleton className='w-full h-full' />
      </div>
      <div className='p-4 flex flex-col flex-grow space-y-3'>
        <Skeleton className='h-4 w-1/3' />
        <Skeleton className='h-6 w-4/5' />
        <Skeleton className='h-4 w-2/3' />
        <div className='mt-auto pt-4'>
          <Skeleton className='h-6 w-24 mx-auto' />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
