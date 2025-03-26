import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSiteImage } from "../../hooks/useSiteImages";
import { Skeleton } from "../../ui/skeleton/Skeleton";

function Banner() {
  const { data: backgroundImage, isLoading: isLoadingBackground } =
    useSiteImage("wood-background.webp");
  const { data: bannerImageDesktop, isLoading: isLoadingDesktop } =
    useSiteImage("banner-desktop.png");
  const { data: bannerImageMobile, isLoading: isLoadingMobile } =
    useSiteImage("banner-mobile.png");

  // Determine if all assets are loading
  const isLoading = isLoadingBackground || isLoadingDesktop || isLoadingMobile;

  return (
    <section
      className='bg-cover bg-center bg-no-repeat'
      style={{
        backgroundImage: `url("${backgroundImage}")`,
        // backgroundColor: isLoadingBackground ? " dark:zinc-800" : "transparent", // Fallback dark color while loading
      }}
    >
      <div className='max-w-7xl mx-auto px-0 md:px-4'>
        {/* Desktop Banner */}
        <div className='hidden md:block'>
          <BannerImage
            image={bannerImageDesktop}
            isLoading={isLoadingDesktop}
            alt='Featured Products Banner'
            aspectRatio='aspect-[21/12]'
          />
        </div>

        {/* Mobile Banner */}
        <div className='md:hidden'>
          <BannerImage
            image={bannerImageMobile}
            isLoading={isLoadingMobile}
            alt='Featured Products Banner'
            aspectRatio='aspect-[9/12]'
          />
        </div>
      </div>
    </section>
  );
}

function BannerImage({
  image,
  isLoading,
  alt,
  aspectRatio,
}: {
  image: string | undefined;
  isLoading: boolean;
  alt: string;
  aspectRatio: string;
}) {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  // Reset imageLoaded state when image changes
  useEffect(() => {
    setImageLoaded(false);
  }, [image]);

  return (
    <div className='py-6 px-4 sm:px-6 lg:px-8'>
      <div
        className={`w-full relative ${aspectRatio} overflow-hidden rounded-lg md:rounded-2xl`}
      >
        {/* Skeleton loader */}
        {(isLoading || !imageLoaded) && (
          <div className='absolute inset-0 w-full h-full'>
            <Skeleton className='w-full h-full rounded-lg md:rounded-2xl' />
          </div>
        )}

        {/* Actual image */}
        {image && (
          <img
            src={image}
            alt={alt}
            className={`w-full h-full object-contain md:object-cover rounded-lg md:rounded-2xl shadow-xl transition-opacity duration-500 cursor-pointer ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => navigate("/products")}
            onLoad={() => setImageLoaded(true)}
          />
        )}
      </div>
    </div>
  );
}

export default Banner;
