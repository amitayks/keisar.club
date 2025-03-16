import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
type Product = {
  id: string;
  SKU: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string[];
};

function ProductPreview({ product }: { product: Product }) {
  // const handleClick = () => {
  //   sessionStorage.setItem("scrollPosition", window.scrollY.toString());
  // };

  return (
    <div
      key={product.id}
      // className='bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105'
      className='bg-white rounded-lg shadow-md overflow-hidden transition-transform h-full'
    >
      <Link
        to={`/products/${product.SKU}`}
        state={{ preserveScroll: true }}
        className='flex flex-col h-full'
        // onClick={handleClick}
      >
        <img
          src={product.image}
          alt={product.name}
          // className='w-full h-64 object-cover'
          className='w-full h-70 object-cover'
        />
        <div className='p-6 flex flex-col flex-grow'>
          <CategoryTag cat={product.category} />

          <h3 className='text-x md:text-xl font-semibold text-right' dir='rtl'>
            {product.name}
          </h3>

          <p className='text-gray-600 mb-4 text-right' dir='rtl'>
            {product.description.split(" ").slice(0, 4).join(" ")}
          </p>

          <div className='flex items-center justify-between mt-auto'>
            <span className='md:text-2xl text-xl font-bold text-stone-700'>
              {formatCurrency(product.price)}
            </span>
            <button className='bg-stone-700 text-white md:px-4 md:py-2 px-2 py-1 rounded-md font-medium hover:bg-stone-900 transition-colors'>
              לרכישה
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductPreview;

function CategoryTag({ cat }: { cat: string[] }) {
  return (
    <div
      className='justify-between md:items-center hidden md:flex items-start mb-2'
      dir='rtl'
    >
      {cat?.map((cat: string, i: number) => (
        <div
          key={cat}
          className='bg-stone-200 text-stone-800 md:text-xs text-[8px] font-medium px-2.5 py-0.5 rounded '
        >
          {i < 3 ? cat : null}
        </div>
      ))}
    </div>
  );
}
