import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import useProducts from "../../features/products/useProducts";
import ProductCard from "../../features/products/ProductCard";

function FeaturesProducts() {
  const { products } = useProducts();

  return (
    <section className='py-16 bg-white dark:bg-zinc-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          {products.map((product, i) =>
            i < 8 ? <ProductCard product={product} /> : null
          )}
        </div>

        <div className='text-center mt-12'>
          <Link
            to='/products'
            className='inline-flex items-center text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-800 font-medium hover:text-indigo-800 transition-colors'
          >
            View All Products
            <ArrowRight className='ml-2 h-5 w-5' />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturesProducts;
