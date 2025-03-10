import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import useProducts from "./useProducts";

const featuredProducts = [
  {
    id: 1,
    name: "Premium Package",
    description: "Our most popular comprehensive service package",
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "$299",
  },
  {
    id: 2,
    name: "Standard Package",
    description: "Perfect for small to medium projects",
    image:
      "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "$199",
  },
  {
    id: 3,
    name: "Basic Package",
    description: "Essential services for startups and individuals",
    image:
      "https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "$99",
  },
];

function FeaturesProducts() {
  const { isLoading, products, error } = useProducts();

  if (isLoading) return <p>Loading...</p>;
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
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className='bg-white rounded-lg shadow-md overflow-hidden'
            >
              <img
                src={product.image}
                alt={product.name}
                className='w-full h-64 object-cover'
              />
              <div className='p-6'>
                <h3 className='text-xl font-semibold mb-2'>{product.name}</h3>
                <p className='text-gray-600 mb-4'>{product.description}</p>
                <div className='flex items-center justify-between'>
                  <span className='text-2xl font-bold text-indigo-600'>
                    {product.price}
                  </span>
                  <Link
                    to={`/products/${product.id}`}
                    className='bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors'
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
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
