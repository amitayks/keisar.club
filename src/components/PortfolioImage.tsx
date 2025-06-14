import { useEffect, useState } from "react";
import { Skeleton } from "./Skeleton";
import { PortfolioItem } from "../types/portfolio";

interface ImagePackItem {
  url: string | null;
  isLoading?: boolean | null;
}

interface ImageProps {
  title: PortfolioItem["title"];
  image: PortfolioItem["image"] | null;
  imagePack: ImagePackItem[];
  imageAspect: string;
  isLoadingImage: boolean;
  isLoadingImagePack: boolean;
}

function PortfolioImage({
  title,
  image,
  imagePack,
  imageAspect,
  isLoadingImage,
  isLoadingImagePack,
}: ImageProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (image) {
      setSelectedImage(image);
    }
  }, [image]);

  return (
    <div className='space-y-6'>
      {/* Main Image */}
      <div
        className={`aspect-${imageAspect} w-full relative overflow-hidden rounded-lg mb-4`}
      >
        {isLoadingImage && (
          <Skeleton className='absolute inset-0 w-full h-full ' />
        )}
        {!isLoadingImage && selectedImage && (
          <img
            src={selectedImage}
            alt={title}
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

export default PortfolioImage;
