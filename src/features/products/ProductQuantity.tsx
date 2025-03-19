function ProductQuantity({
  quantity,
  setQuantity,
  handleQuantityChange,
  isDisabled,
}: {
  quantity: number;
  setQuantity: (quantity: number) => void;
  handleQuantityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
}) {
  return (
    <div className='flex items-center'>
      <button
        type='button'
        onClick={() => setQuantity(quantity + 1)}
        className='p-2 border border-stone-300 dark:border-stone-700 rounded-r-md bg-stone-50 text-stone-500 hover:bg-stone-100 dark:bg-zinc-900 dark:text-white disabled:opacity-50'
        disabled={isDisabled}
      >
        +
      </button>
      <input
        type='number'
        id='quantity'
        name='quantity'
        min='1'
        value={quantity}
        onChange={handleQuantityChange}
        className='p-2 w-16 border-t border-b border-stone-300 dark:border-stone-700 text-center focus:ring-indigo-500 focus:border-indigo-500 rounded-none dark:bg-zinc-900 dark:text-white disabled:opacity-50'
        disabled={isDisabled}
      />
      <button
        type='button'
        onClick={() => quantity > 1 && setQuantity(quantity - 1)}
        className='p-2 border border-stone-300 dark:border-stone-700 rounded-l-md bg-stone-50 text-stone-500 hover:bg-stone-100 dark:bg-zinc-900 dark:text-white disabled:opacity-50'
        disabled={isDisabled}
      >
        -
      </button>
      <label
        htmlFor='quantity'
        className='block text-sm font-medium text-stone-600 dark:text-stone-400 mr-4'
      >
        Quantity
      </label>
    </div>
  );
}

export default ProductQuantity;
