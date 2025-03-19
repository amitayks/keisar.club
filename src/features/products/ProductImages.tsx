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
      <div className='aspect-square w-full rounded-lg overflow-hidden mb-4'>
        {isLoadingImage || !selectedImage ? (
          <Skeleton className='w-full h-full' />
        ) : (
          <img
            src={selectedImage}
            alt={name}
            className='w-full h-full object-cover'
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
                    <Skeleton className='w-full h-full' />
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
                    <Skeleton className='w-full h-full' />
                  ) : (
                    <img
                      src={imageItem.url}
                      alt={`${name} thumbnail ${i + 1}`}
                      className='w-full h-full object-cover'
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
