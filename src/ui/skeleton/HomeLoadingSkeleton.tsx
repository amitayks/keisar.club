import { Skeleton } from "./Skeleton";
import ProductItemSkeleton from "./ProductItemSkeleton";

function HomeLoadingSkeleton() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Banner Section */}
      <section className='relative'>
        <div className='hidden md:block'>
          <DesktopBannerSkeleton />
        </div>
        <div className='md:hidden'>
          <MobileBannerSkeleton />
        </div>
      </section>

      {/* Portfolio Skeleton Section */}
      <section className='py-16 bg-zinc-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <Skeleton className='h-10 w-48 mx-auto' />
          </div>

          {/* Portfolio items - using same grid structure */}
          <ProductItemSkeleton length={6} />

          <div className='text-center mt-12'>
            <Skeleton className='h-6 w-40 mx-auto' />
          </div>
        </div>
      </section>

      {/* Products Skeleton Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Product items - using refactored skeleton */}
          <ProductItemSkeleton length={6} />

          <div className='text-center mt-12'>
            <Skeleton className='h-6 w-40 mx-auto' />
          </div>
        </div>
      </section>
    </div>
  );
}

function DesktopBannerSkeleton() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
      <div className='relative aspect-[16/9] md:aspect-[21/9]'>
        <Skeleton className='w-full h-full rounded-2xl' />
      </div>
    </div>
  );
}

function MobileBannerSkeleton() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
      <div className='relative aspect-square'>
        <Skeleton className='w-full h-full rounded-2xl' />
      </div>
    </div>
  );
}

// function HomeLoadingSkeleton() {
//   return (
//     <div className='transition-opacity duration-500'>
//       {/* Desktop Banner Skeleton */}
//       <DesktopBannerSkeleton />

//       {/* Mobile Banner Skeleton */}
//       <MobileBannerSkeleton />

//       {/* Portfolio Skeleton */}
//       <div className=' hidden md:block bg-zinc-900'>
//         <ProductItemSkeleton length={6} />
//       </div>
//       <div className=' md:hidden bg-zinc-900'>
//         <ProductItemSkeleton length={6} />
//       </div>

//       {/* Products Skeleton */}
//       <div className=' hidden md:block '>
//         <ProductItemSkeleton length={6} />
//       </div>
//       <div className=' md:hidden'>
//         <ProductItemSkeleton length={6} />
//       </div>
//     </div>
//   );
// }

// function DesktopBannerSkeleton() {
//   return (
//     <div className='relative max-w-3xl w-full mx-auto py-10 hidden md:block'>
//       {/* Container with side labels */}
//       <div className='relative'>
//         {/* Left Hebrew Text Skeleton */}
//         <Skeleton className='absolute left-0  top-1/2 transform -translate-y-1/2 h-20 w-36' />

//         {/* Right Hebrew Text Skeleton */}
//         <Skeleton className='absolute right-0 top-1/2 transform -translate-y-1/2 h-20 w-36' />

//         {/* Main Image Container Skeleton */}
//         <div className='rounded-xl overflow-hidden mx-40 '>
//           <div className='relative aspect-square'>
//             {/* Main wooden bowl background */}
//             <Skeleton className='absolute inset-0 rounded-xl' />

//             {/* Wooden Bowl Ring Skeletons */}
//             <div className='absolute inset-0 flex items-center justify-center'>
//               {[...Array(3)].map((_, i) => (
//                 <Skeleton
//                   key={i}
//                   className='absolute rounded-full opacity-70'
//                   style={{
//                     width: `${90 - i - 1 * 12}%`,
//                     height: `${90 - i - 1 * 12}%`,
//                   }}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function MobileBannerSkeleton() {
//   return (
//     <div className='flex flex-col max-w-lg w-full mx-auto py-10 px-6 gap-5 md:hidden'>
//       {/* Main Image Container Skeleton */}
//       <div className='rounded-xl overflow-hidden'>
//         <div className='relative aspect-square'>
//           {/* Main wooden bowl background */}
//           <Skeleton className='absolute inset-0 rounded-xl' />

//           {/* Wooden Bowl Ring Skeletons - making it more heart-shaped */}
//           <div className='absolute inset-0 flex items-center justify-center'>
//             {[...Array(3)].map((_, i) => (
//               <Skeleton
//                 key={i}
//                 className='absolute rounded-full opacity-70'
//                 style={{
//                   width: `${90 - i * 12}%`,
//                   height: `${90 - i * 12}%`,
//                   borderRadius: "50%",
//                 }}
//               />
//             ))}

//             {/* Heart Shape Skeleton */}
//             <Skeleton
//               className='absolute w-1/4 h-1/4 rounded-full'
//               style={{ top: "38%" }}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Hebrew Text Skeleton at the bottom */}
//       <div className='w-full flex justify-center my-10'>
//         <Skeleton className='h-20 w-96' />
//       </div>
//     </div>
//   );
// }

export default HomeLoadingSkeleton;
