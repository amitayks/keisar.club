import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import useProducts from "./useProducts";
import ProductPreview from "./ProductPreview";
import Spinner from "../ui/Spinner";
// import ProductPreview from "./ProductPreview";

function FeaturesProducts() {
  const { isLoading, products, error } = useProducts();

  if (isLoading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  console.log(products);

  return (
    <section className='py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            Featured Products
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Explore our most popular offerings that customers love.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {products.map((product, i) =>
            i < 3 ? <ProductPreview product={product} /> : null
          )}
        </div>

        <div className='text-center mt-12'>
          <Link
            to='/products'
            className='inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors'
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
