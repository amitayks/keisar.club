import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FeaturesPortfolio from "../FeaturesPortfolio";
import {
  BANNER_IMAGE_URL_DESKTOP,
  BANNER_IMAGE_URL_MOBILE,
  WOOD_BACKGROUND_IMAGE_URL,
} from "../../utils/constants";

function Banner() {
  const [isLoadingBackground, setIsLoadingBackground] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = WOOD_BACKGROUND_IMAGE_URL;
    img.onload = () => setIsLoadingBackground(true);
  }, [WOOD_BACKGROUND_IMAGE_URL]);

  return (
    <>
      <section
        className={`text-white bg-cover bg-fixed bg-center transition-opacity duration-500 ${
          isLoadingBackground ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url("${WOOD_BACKGROUND_IMAGE_URL}")`,
        }}
      >
        <ScreenBanner type='desktop' />
        <ScreenBanner type='mobile' />

        {/* <section className='py-16'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <FeaturesPortfolio />
          </div>
        </section> */}
      </section>
    </>
  );
}

export default Banner;

function ScreenBanner({ type }: { type: "desktop" | "mobile" }) {
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
              src={
                type === "desktop"
                  ? BANNER_IMAGE_URL_DESKTOP
                  : BANNER_IMAGE_URL_MOBILE
              }
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
