import { useState, useEffect } from "react";
import useProducts from "../features/products/useProducts";
import ProductFilters from "../features/products/ProductFilters";
import ProductCard from "../features/products/ProductCard";
import { useMoveBack } from "../hooks/useMoveBack";
import { Skeleton } from "../ui/skeleton/Skeleton";

const Products = () => {
  const { products, isLoading } = useProducts();
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Set initial load to false after component mounts
  useEffect(() => {
    if (!isLoading) {
      setIsInitialLoad(false);
    }
  }, [isLoading]);

  // Function to render product grid or product card skeletons
  const renderProductGrid = () => {
    if (isInitialLoad || isLoading) {
      // Return skeleton grid while loading
      return <ProductSkeletonGrid />;
    }

    if (products.length === 0) {
      return <NoProductFound />;
    }

    return (
      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  };

  return (
    <div className='min-h-screen bg-white dark:bg-zinc-900'>
      {/* Filters and Search */}
      <ProductFilters />

      {/* Products Grid */}
      <section className='py-8 md:py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {renderProductGrid()}
        </div>
      </section>
    </div>
  );
};

// Skeleton component for product cards during loading
const ProductCardSkeleton = () => {
  return (
    <div className='dark:bg-zinc-800 bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col'>
      <div className='aspect-square w-full'>
        <Skeleton className='w-full h-full' />
      </div>
      <div className='p-4 flex flex-col flex-grow space-y-4'>
        <Skeleton className='h-4 w-1/3' />
        <Skeleton className='h-6 w-5/6' />
        <Skeleton className='h-4 w-full' />
        <Skeleton className='h-4 w-4/5' />
        <div className='mt-auto pt-4'>
          <Skeleton className='h-6 w-24 mx-auto' />
        </div>
      </div>
    </div>
  );
};

export default Products;

function ProductSkeletonGrid() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
    </div>
  );
}

function NoProductFound() {
  const moveBack = useMoveBack();

  return (
    <div className='flex flex-col items-center justify-center py-16 text-center max-w-md mx-auto'>
      <h3 className='text-xl font-semibold text-zinc-900 dark:text-stone-200 mb-3'>
        No products found
      </h3>
      <p className='text-stone-600 dark:text-stone-400 mb-6'>
        Please try adjusting your search or filter criteria, or check back later
        for new products.
      </p>
      <button
        onClick={moveBack}
        className='bg-indigo-600 text-white px-5 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors'
      >
        &larr; Go Back
      </button>
    </div>
  );
}
