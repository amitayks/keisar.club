import { Info, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

function ProductOrderButton({
  handleOrder,
  isDisabled,
}: {
  handleOrder: () => void;
  isDisabled: boolean;
}) {
  return (
    <div className='flex flex-col sm:flex-row gap-4'>
      <Link
        to='/contact'
        className='flex-1 bg-stone-100 text-stone-800 px-6 py-3 rounded-md font-medium hover:bg-stone-200 transition-colors flex items-center justify-center disabled:opacity-50'
      >
        Ask a Question
        <Info className='h-5 w-5 mr-2' />
      </Link>
      <button
        type='button'
        onClick={handleOrder}
        disabled={isDisabled}
        className='flex-1 bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center disabled:opacity-50'
      >
        Order Now
        <ShoppingCart className='h-5 w-5 mr-2' />
      </button>
    </div>
  );
}

export default ProductOrderButton;
