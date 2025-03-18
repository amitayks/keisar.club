function CategoryTag({ cat, type }: { cat: string[]; type: string }) {
  const styled =
    type === "product"
      ? "bg-sky-100 bg:opacity-100 text-black-900 md:text-[10px] font-medium px-2.5 py-0.5 rounded "
      : "bg-sky-100 bg:opacity-100 text-black-900 md:text-[15px] font-medium px-6 py-1 rounded mt-2 mx-auto";

  return (
    <div
      className='justify-between md:items-center hidden md:flex items-start '
      dir='rtl'
    >
      {cat?.map(
        (category: string, i: number) =>
          i < 3 && (
            <span key={category} className={styled}>
              {category}
            </span>
          )
      )}
    </div>
  );
}

export default CategoryTag;
