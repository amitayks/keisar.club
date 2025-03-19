function CategoryTag({ cat, type }: { cat: string[]; type: string }) {
  const styled = {
    product:
      "bg-sky-100 dark:bg-zinc-700 bg:opacity-100 text-black-900 md:text-[10px] font-medium px-2.5 py-0.5 rounded ",
    portfolio:
      "bg-sky-100 dark:bg-zinc-700 opacity-100 text-black-900 md:text-[15px] font-medium px-6 py-1 rounded mt-2 mx-auto",
    detail:
      "bg-sky-100 dark:bg-zinc-700 opacity-100 text-black-900 text-xs font-medium px-2.5 py-0.5 rounded-full mt-2 mx-auto",
  };

  return (
    <div
      className='justify-between md:items-center hidden md:flex items-start gap-2'
      dir='rtl'
    >
      {cat?.map(
        (category: string, i: number) =>
          i < 3 && (
            <span
              key={category}
              className={styled[type as keyof typeof styled]}
            >
              {category}
            </span>
          )
      )}
    </div>
  );
}

export default CategoryTag;
