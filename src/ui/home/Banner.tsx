import { useNavigate } from "react-router-dom";
import MobileBanner from "./MobileBanner";
import { useEffect, useState } from "react";

function Banner() {
  const navigate = useNavigate();
  const [isLoadingBackground, setIsLoadingBackground] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const imageUrl =
    "https://qjyybkgqqadjedgelakf.supabase.co/storage/v1/object/public/site-image//wood-background.jpg";

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setIsLoadingBackground(true);
  }, [imageUrl]);

  return (
    <>
      <section
        className={`text-white hidden md:block bg-cover bg-fixed bg-center transition-opacity duration-500 ${
          isLoadingBackground ? "opacity-100" : "opacity-50"
        }`}
        style={{
          backgroundImage: `url("${imageUrl}")`,
        }}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
          <div className='md:flex md:items-center md:justify-between'>
            <div className='mb-10 md:mb-0'>
              <div className='w-full relative '>
                {!isLoading && (
                  <div className='absolute inset-0 bg-gray-300 animate-pulse rounded-2xl' />
                )}
                <img
                  src='https://qjyybkgqqadjedgelakf.supabase.co/storage/v1/object/public/site-image//banner-desktop.png'
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
      </section>
      <MobileBanner />
    </>
  );
}

export default Banner;
