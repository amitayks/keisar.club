import { useSearchParams } from "react-router-dom";

interface options {
  value: string;
  label: string;
}

function Filter({
  options,
  filterName,
}: {
  options: options[];
  filterName: string;
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentValue = searchParams.get(filterName) || options?.[0]?.value;

  function handleClick(value: string) {
    // if (searchParams.get("page")) {
    //   searchParams.set("page", 1);
    // }
    searchParams.set(filterName, value);
    setSearchParams(searchParams);
  }
  return (
    <div className='flex items-center overflow-x-auto pb-1 md:pb-0 hide-scrollbar'>
      <div className='flex gap-2'>
        {options.map((fill, i) => (
          <button
            key={i}
            onClick={() => handleClick(fill.value)}
            className={`px-4 py-2 text-sm rounded-md whitespace-nowrap transition-colors ${
              (fill.value === "All" && currentValue === "") ||
              currentValue === fill.value
                ? "bg-zinc-600 text-white"
                : "bg-stone-100 text-stone-800 hover:bg-stone-200 dark:bg-zinc-800 dark:text-stone-200 dark:hover:bg-zinc-700"
            }`}
          >
            {fill.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filter;
