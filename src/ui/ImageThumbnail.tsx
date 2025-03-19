import { Skeleton } from "./skeleton/Skeleton";

function ImageThumbnail({
  i,
  name,
  imageUrl,
  selectedImage,
  setSelectedImage,
}: {
  i: number;
  name: string;
  imageUrl: string;
  selectedImage: string;
  setSelectedImage: (imageUrl: string) => void;
}) {
  if (!imageUrl) return null;

  return (
    <div
      key={i}
      className={`aspect-square cursor-pointer rounded-md overflow-hidden ${
        selectedImage === imageUrl ? "ring-2 ring-indigo-500" : ""
      }`}
      onClick={() => setSelectedImage(imageUrl)}
    >
      <div className='w-full h-full relative'>
        <Skeleton className='absolute inset-0 w-full h-full' />
        <img
          src={imageUrl}
          alt={`${name} thumbnail ${i + 1}`}
          className='relative w-full h-full object-cover'
          onLoad={(e) => {
            // Hide skeleton when image is loaded
            const target = e.target as HTMLImageElement;
            const parent = target.parentElement;
            if (parent) {
              const skeleton = parent.querySelector(".skeleton") as HTMLElement;
              if (skeleton) {
                skeleton.style.opacity = "0";
              }
            }
          }}
        />
      </div>
    </div>
  );
}

export default ImageThumbnail;
