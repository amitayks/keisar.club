import { Link } from "react-router-dom";
import { Product } from "./useProduct";

import CategoryTag from "../../ui/CategoryCard";

import { ArrowLeft } from "lucide-react";
import { Skeleton } from "../../ui/skeleton/Skeleton";

function Breadcrumb({
  product,
  isLoading,
}: {
  product: Product;
  isLoading: boolean;
}) {
  return (
    <nav
      className='flex items-center justify-between text-sm font-medium mb-8'
      dir='ltr'
    >
      <Link
        to='/products'
        className='hover:text-gray-900 dark:hover:text-white flex items-center'
      >
        <ArrowLeft className='h-4 w-4 mr-1' />
        Back to Products
      </Link>
      {isLoading ? (
        <Skeleton className='h-6 w-24' />
      ) : (
        <CategoryTag cat={product.category as string[]} type='detail' />
      )}
    </nav>
  );
}

export default Breadcrumb;
