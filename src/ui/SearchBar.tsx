import { useState } from "react";
import { Search, X } from "lucide-react";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className='relative w-full md:w-72'>
      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
        <Search className='h-5 w-5 text-stone-400' />
      </div>
      <input
        type='text'
        placeholder='Search products...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='block w-full pl-10 pr-10 py-2 border border-stone-300 dark:border-zinc-700 rounded-md leading-5 bg-white dark:bg-zinc-800 placeholder-stone-500 dark:placeholder-stone-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
      />
      {searchTerm && (
        <button
          onClick={() => setSearchTerm("")}
          className='absolute inset-y-0 right-0 pr-3 flex items-center text-stone-400 hover:text-stone-600 dark:text-zinc-400 dark:hover:text-zinc-200'
        >
          <X className='h-4 w-4' />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
