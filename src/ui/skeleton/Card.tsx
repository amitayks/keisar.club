import { cn } from "../../utils/helpers";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white shadow-sm rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 w-full mx-auto max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%]",
        className
      )}
    >
      {children}
    </div>
  );
}

// <Card className='p-6 max-w-xl mx-auto'>
// <div className='flex flex-wrap'>
//   <div className='w-1/2 p-2'>
//     <Skeleton className='h-4 w-full mb-2' />
//     <Skeleton className='h-4 w-full mb-2' />
//     <Skeleton className='h-6 w-full mb-4 ' />
//   </div>
//   <div className='w-1/2 p-2'>
//     <Skeleton className='h-60 w-full' />
//   </div>
// </div>
// </Card>
// <Card className='p-6 max-w-xl mx-auto'>
// <Skeleton className='h-6 w-1/2 mb-4' />
// <Skeleton className='h-4 w-full mb-2' />
// <Skeleton className='h-4 w-full mb-2' />
// <Skeleton className='h-60 w-full' />
// </Card>
