import Filter from "../../ui/Filter";
import SearchBar from "../../ui/SearchBar";

function ProductFilters() {
  return (
    <section className='bg-white dark:bg-zinc-900 shadow-sm border-b border-stone-200 dark:border-zinc-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
          {/* Search */}
          <SearchBar />

          {/* Category Filter */}
          <Filter
            filterName='status'
            options={[
              { value: "all", label: "All" },
              { value: "soldout", label: "Sold Out" },
              { value: "available", label: "Availbale" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

export default ProductFilters;
