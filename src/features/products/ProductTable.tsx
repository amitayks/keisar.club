import { formatCurrency } from "../../utils/helpers";
// import { Product } from "./useProductItem";
import { Skeleton } from "../../ui/skeleton/Skeleton";

function ProductTable({
  additionalInfo,
  isLoading,
}: {
  additionalInfo: any[];
  isLoading: boolean;
}) {
  if (isLoading) {
    return (
      <div className='mb-8'>
        <h2 className='text-lg font-semibold text-zinc-900 dark:text-stone-200 mb-2'>
          מידע נוסף
        </h2>
        <Skeleton className='h-48 w-full' />
      </div>
    );
  }

  return (
    <div className='mb-8'>
      <h2 className='text-lg font-semibold text-zinc-900 dark:text-stone-200 mb-2'>
        מידע נוסף
      </h2>
      <div className='text-stone-600 dark:text-stone-400 space-y-2'>
        {additionalInfo.map((info, i) => (
          <TableRow key={i} info={info} />
        ))}
      </div>
    </div>
  );
}

export default ProductTable;

interface Info {
  value: string;
  label: string;
}

function TableRow({ info }: { info: Info }) {
  return (
    <div className='flex justify-between py-2'>
      <span className='font-medium'>{info.label}</span>
      <span>{info.value}</span>
    </div>
  );
}
