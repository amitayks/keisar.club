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
      className={`relative cursor-pointer rounded-md overflow-hidden ${
        selectedImage === imageUrl ? "ring-2 ring-indigo-500" : ""
      }`}
      onClick={() => setSelectedImage(imageUrl)}
    >
      <Skeleton className='absolute inset-0 w-full h-full object-cover' />
      <img
        src={imageUrl}
        alt={`${name} thumbnail`}
        className='relative h-auto w-full object-cover'
      />
    </div>
  );
}

export default ImageThumbnail;
