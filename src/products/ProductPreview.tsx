import { Link } from "react-router-dom";

type Product = {
  id: string;
  SKU: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

function ProductPreview({ product }: { product: Product }) {
  return (
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
  );
}

export default ProductPreview;
