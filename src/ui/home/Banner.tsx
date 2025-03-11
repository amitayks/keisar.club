import { useNavigate } from "react-router-dom";
import MobileBanner from "./MobileBanner";

function Banner() {
  const navigate = useNavigate();
  return (
    <>
      <section
        className='text-white hidden md:block bg-cover bg-fixed bg-center '
        style={{
          backgroundImage:
            'url("https://qjyybkgqqadjedgelakf.supabase.co/storage/v1/object/public/site-image//wood-background.jpg")',
        }}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
          <div className='md:flex md:items-center md:justify-between'>
            <div className='mb-10 md:mb-0'>
              <div className='w-full'>
                <img
                  src='https://qjyybkgqqadjedgelakf.supabase.co/storage/v1/object/public/site-image//banner-desktop.png'
                  alt='Hero Image'
                  className='rounded-lg shadow-xl'
                  onClick={() => {
                    navigate("/products");
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
