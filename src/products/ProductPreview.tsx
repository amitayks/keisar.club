import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/helpers";
type Product = {
  id: string;
  SKU: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

function ProductPreview({ product }: { product: Product }) {
  return (
    <div
      key={product.id}
      // className='bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105'
      className='bg-white rounded-lg shadow-md overflow-hidden transition-transform'
    >
      <Link to={`/products/${product.SKU}`}>
        <img
          src={product.image}
          alt={product.name}
          // className='w-full h-64 object-cover'
          className='w-full h-70 object-cover'
        />
        <div className='p-6'>
          <div className='flex justify-between items-start mb-2'>
            <span className='bg-stone-200 text-stone-800 text-xs font-medium px-2.5 py-0.5 rounded'>
              {product.category.split(" ").at(0)}
            </span>
            <h3 className='text-xl font-semibold text-right' dir='rtl'>
              {product.name}
            </h3>
          </div>
          <p className='text-gray-600 mb-4 text-right' dir='rtl'>
            {product.description.split(" ").slice(0, 10).join(" ")}
          </p>
          <div className='flex items-center justify-between'>
            <span className='text-2xl font-bold text-stone-700'>
              {formatCurrency(product.price)}
            </span>

            <button className='bg-stone-500  text-white px-4 py-2 rounded-md font-medium hover:bg-stone-700 transition-colors'>
              View Details
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductPreview;
