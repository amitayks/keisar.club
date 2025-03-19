import { Link } from "react-router-dom";

import { formatCurrency } from "../../utils/helpers";
import { useProductImage } from "./useProductImage";
import { Skeleton } from "../../ui/skeleton/Skeleton";
import CategoryTag from "../../ui/CategoryCard";

type Product = {
  id: string;
  SKU: string;
  name: string;
  longDescription: string;
  price: number;
  image: string;
  category: string[];
};

function ProductCard({ product }: { product: Product }) {
  const { imageData, isLoading } = useProductImage(product.image);

  return (
    <article
      key={product.id}
      className=' dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden transition-transform min-h-full'
    >
      <Link
        to={`/products/${product.SKU}`}
        state={{ preserveScroll: true }}
        className='flex flex-col h-full'
      >
        {isLoading || !imageData ? (
          <div className='aspect-square w-full'>
            <Skeleton className='w-full h-full object-cover' />
          </div>
        ) : (
          <img
            src={imageData}
            alt={product.name}
            className='w-full h-70 object-cover'
          />
        )}

        <div className='py-3 px-3 flex flex-col flex-grow'>
          <CategoryTag cat={product.category} type='product' />

          <h3
            className='text-x md:text-xl mb-2 mt-3 font-semibold text-right'
            dir='rtl'
          >
            {product.name}
          </h3>

          <p className=' mb-6 text-right' dir='rtl'>
            {product.longDescription.split(" ").slice(0, 4).join(" ")}
          </p>

          <div className='flex items-center justify-center mt-auto border-t border-blue-200 pt-4 dark:border-zinc-700'>
            <span className='md:text-xl text-lg font-bold'>
              {formatCurrency(product.price).slice(0, -3)}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default ProductCard;
