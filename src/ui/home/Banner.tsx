import { useNavigate } from "react-router-dom";
import { useState } from "react";

import useGetImage from "../../hooks/useGetImage";
import DesktopBannerSkeleton from "./DesktopBannerSkeleton";
import MobileBannerSkeleton from "./MobileBannerSkeleton";

function Banner() {
  const { data: backgroundImage, isLoading: isLoadingBackground } = useGetImage(
    "wood-background.jpg"
  );
  const { data: bannerImageMobile, isLoading: isLoadingBannerMobile } =
    useGetImage("banner-mobile.png");
  const { data: bannerImageDesktop, isLoading: isLoadingBannerDesktop } =
    useGetImage("banner-desktop.png");

  if (isLoadingBackground || isLoadingBannerMobile || isLoadingBannerDesktop)
    return (
      <>
        <MobileBannerSkeleton />
        <DesktopBannerSkeleton />
      </>
    );

  return (
    <section
      // className='relative text-white'
      className={`text-white bg-cover bg-fixed bg-center transition-opacity duration-500`}
      style={{
        backgroundImage: `url("${backgroundImage}")`,
      }}
    >
      <ScreenBanner type='desktop' img={bannerImageDesktop} />
      <ScreenBanner type='mobile' img={bannerImageMobile} />

      {/* <section className='py-16'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <FeaturesPortfolio />
          </div>
        </section> */}
    </section>
  );
}

export default Banner;

function ScreenBanner({
  type,
  img,
}: {
  type: "desktop" | "mobile";
  img: string | undefined;
}) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const styles = {
    desktop: " max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden md:block", //
    mobile: " max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 md:hidden", //
  };

  return (
    <div className={`${styles[type]}`}>
      <div className='md:flex md:items-center md:justify-between'>
        <div className='mb-10 md:mb-0'>
          <div className='w-full relative '>
            {!isLoading && (
              <div className='absolute inset-0 bg-gray-300 animate-pulse rounded-2xl' />
            )}
            <img
              src={img}
              alt='Hero Image'
              className={`rounded-lg shadow-xl object-cover transition-opacity duration-500 ${
                isLoading ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => {
                navigate("/products");
              }}
              onLoad={() => {
                setIsLoading(true);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
