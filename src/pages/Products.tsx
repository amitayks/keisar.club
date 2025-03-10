import useProducts from "../products/useProducts";
import Spinner from "../ui/Spinner";
import ProductIntro from "../products/ProductIntro";
import ProductFilters from "../products/ProductFilters";
import ProductPreview from "../products/ProductPreview";
import { useMoveBack } from "../hooks/useMoveBack";

const Products = () => {
  const { products, isLoading } = useProducts();
  const moveBack = useMoveBack();

  if (isLoading) return <Spinner />;

  return (
    <div>
      {/* Hero Section */}
      <ProductIntro />

      {/* Filters and Search */}
      <ProductFilters products={products} />

      {/* Products Grid */}
      <section className='py-12 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {products.length > 0 ? (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {products.map((product) => (
                <ProductPreview product={product} />
              ))}
            </div>
          ) : (
            <div className='text-center py-12'>
              <h3 className='text-xl font-medium text-gray-900 mb-2'>
                No products found
              </h3>
              <p className='text-gray-600 mb-4'>
                Please try again later or contact us for more information.
              </p>
              <button
                onClick={moveBack}
                className='bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors'
              >
                &larr; Back
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
