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
      className='dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden transition-transform h-full flex flex-col'
    >
      <Link
        to={`/products/${product.SKU}`}
        state={{ preserveScroll: true }}
        className='flex flex-col h-full'
      >
        {/* Image container with fixed aspect ratio */}
        <div className='aspect-square w-full relative overflow-hidden'>
          <Skeleton className='absolute inset-0 w-full h-full' />
          {!isLoading && imageData && (
            <img
              src={imageData}
              alt={product.name}
              className='w-full h-full object-cover absolute inset-0 z-10'
              onLoad={(e) => {
                const target = e.target as HTMLElement;
                target.style.opacity = "1";
              }}
              style={{ opacity: 0, transition: "opacity 0.3s ease-in-out" }}
            />
          )}
        </div>

        <div className='p-4 flex flex-col flex-grow'>
          <CategoryTag cat={product.category} type='product' />

          <h3
            className='text-lg md:text-xl mb-2 mt-3 font-semibold text-right line-clamp-2'
            dir='rtl'
          >
            {product.name}
          </h3>

          <p
            className='mb-4 text-right line-clamp-2 text-stone-600 dark:text-stone-400'
            dir='rtl'
          >
            {product.longDescription?.split(" ").slice(0, 8).join(" ")}...
          </p>

          <div className='flex items-center justify-center mt-auto pt-4 border-t border-stone-200 dark:border-zinc-700'>
            <span className='text-lg md:text-xl font-bold text-zinc-900 dark:text-stone-200'>
              {formatCurrency(product.price).slice(0, -3)}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default ProductCard;
