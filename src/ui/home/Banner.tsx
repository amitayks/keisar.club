import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSiteImage } from "../../hooks/useSiteImages";

function Banner() {
  const { data: backgroundImage } = useSiteImage("wood-background.jpg");
  const { data: bannerImageMobile } = useSiteImage("banner-mobile.png");
  const { data: bannerImageDesktop } = useSiteImage("banner-desktop.png");
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    if (backgroundImage && bannerImageMobile && bannerImageDesktop) {
      const timer = setTimeout(() => setImagesLoaded(true), 100);
      return () => clearTimeout(timer);
    }
  }, [backgroundImage, bannerImageMobile, bannerImageDesktop]);

  return (
    <section
      className='text-white bg-cover bg-fixed bg-center'
      style={{
        backgroundImage: backgroundImage ? `url("${backgroundImage}")` : "none",
      }}
    >
      <ScreenBanner
        type='desktop'
        img={bannerImageDesktop}
        isLoaded={imagesLoaded}
      />
      <ScreenBanner
        type='mobile'
        img={bannerImageMobile}
        isLoaded={imagesLoaded}
      />
    </section>
  );
}

export default Banner;

function ScreenBanner({
  type,
  img,
  isLoaded,
}: {
  type: "desktop" | "mobile";
  img: string | undefined;
  isLoaded: boolean;
}) {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  const styles = {
    desktop: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden md:block",
    mobile: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:hidden",
  };

  return (
    <div className={styles[type]}>
      <div className='py-8 md:flex md:items-center md:justify-between'>
        <div className='w-full relative min-h-[200px]'>
          {/* Skeleton placeholder */}
          <div
            className={`absolute inset-0 bg-gray-300 rounded-2xl transition-opacity duration-500 ${
              imageLoaded ? "opacity-0" : "opacity-100 animate-pulse"
            }`}
          />

          {/* Actual image */}
          {img && (
            <img
              src={img}
              alt='Hero Image'
              className={`w-full rounded-2xl shadow-xl object-cover transition-opacity duration-500 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => navigate("/products")}
              onLoad={() => setImageLoaded(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
