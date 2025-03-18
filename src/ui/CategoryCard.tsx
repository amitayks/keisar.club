function CategoryTag({ cat }: { cat: string[] }) {
  return (
    <div
      className='justify-between md:items-center hidden md:flex items-start '
      dir='rtl'
    >
      {cat?.map(
        (category: string, i: number) =>
          i < 3 && (
            <span
              key={category}
              className='bg-sky-100 bg:opacity-100 text-black-900 md:text-xs text-[8px] font-medium px-2.5 py-0.5 rounded'
            >
              {category}
            </span>
          )
      )}
    </div>
  );
}

export default CategoryTag;
