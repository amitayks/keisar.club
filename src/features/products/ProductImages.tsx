import { Skeleton } from "../../ui/skeleton/Skeleton";

function ProductImages({
  isLoadingImage,
  isLoadingImagePack,
  image,
  imagePack,
  selectedImage,
  setSelectedImage,
  name,
}: {
  isLoadingImage: boolean;
  isLoadingImagePack: boolean;
  image: string | null;
  imagePack: { url: string | null; error: Error | null; isLoading: boolean }[];
  selectedImage: string | null;
  setSelectedImage: (imageUrl: string) => void;
  name: string;
}) {
  return (
    <div className='mb-8 lg:mb-0'>
      {/* Main image with consistent height */}

      <div className='aspect-square w-full relative overflow-hidden rounded-lg mb-4'>
        <Skeleton className='absolute inset-0 w-full h-full' />
        {!isLoadingImage && selectedImage && (
          <img
            src={selectedImage}
            alt={name}
            className='w-full h-full object-cover absolute inset-0 z-10'
            onLoad={(e) => {
              const target = e.target as HTMLElement;
              target.style.opacity = "1";
            }}
            style={{ opacity: 0, transition: "opacity 0.3s ease-in-out" }}
          />
        )}
      </div>

      {/* Thumbnail Images */}
      <div className='grid grid-cols-4 gap-2'>
        {isLoadingImagePack
          ? Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className='aspect-square rounded-md overflow-hidden'
                >
                  <Skeleton className='w-full h-full' />
                </div>
              ))
          : imagePack &&
            imagePack.map((imageItem, i) => {
              if (!imageItem.url) {
                return (
                  <div
                    key={i}
                    className='aspect-square rounded-md overflow-hidden'
                  >
                    <Skeleton className=' w-full h-full' />
                  </div>
                );
              }

              return (
                <div
                  key={i}
                  className={`aspect-square cursor-pointer rounded-md overflow-hidden ${
                    selectedImage === imageItem.url
                      ? "ring-2 ring-indigo-500"
                      : ""
                  }`}
                  onClick={() =>
                    imageItem.url && setSelectedImage(imageItem.url)
                  }
                >
                  {imageItem.isLoading ? (
                    <Skeleton className='absolute inset-0 w-full h-full' />
                  ) : (
                    <img
                      src={imageItem.url}
                      alt={`${name} thumbnail ${i + 1}`}
                      className='w-full h-full object-cover'
                      onLoad={(e) => {
                        const target = e.target as HTMLElement;
                        target.style.opacity = "1";
                      }}
                      style={{
                        opacity: 0,
                        transition: "opacity 0.3s ease-in-out",
                      }}
                    />
                  )}
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default ProductImages;
