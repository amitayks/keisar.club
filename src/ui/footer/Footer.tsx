import QuickLinks from "./QuickLinks";
import Brand from "./Brand";
import ContactInfo from "./ContactInfo";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className='bg-white text-black dark:bg-zinc-900 dark:text-white'>
      <div className='flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 justify-between justify-items-center'>
          <Brand />
          <QuickLinks />
          <ContactInfo />
          <SocialMedia />
        </div>

        <div className='border-t border-gray-300 mt-12 pt-8 text-center dark:border-stone-700'>
          <p>
            &copy; {new Date().getFullYear()} Keisar Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
