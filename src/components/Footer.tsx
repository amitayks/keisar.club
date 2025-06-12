import SocialLinks from "./SocialLinks";
import { PERSONAL_INFO } from "../utils/constants";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className='bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='flex items-center justify-center'>
          {/* Brand Section */}
          <div className='md:col-span-2'>
            <div className='flex items-center justify-center mb-6'>
              <Logo
                width={32}
                height={32}
                fill='currentColor'
                className='text-gray-900 dark:text-white'
                style={{ transform: "scaleX(-1)" }}
              />
              <span className='ml-3 text-xl font-bold text-gray-900 dark:text-white'>
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className='text-gray-600 dark:text-gray-400 mb-6 max-w-md leading-relaxed'>
              {PERSONAL_INFO.tagline}
            </p>

            {/* Social Links */}
            <SocialLinks />
          </div>
        </div>

        {/* Bottom Section */}
        <div className='flex border-t border-gray-100 dark:border-gray-800 mt-12 pt-8 justify-center'>
          <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
            <p className='text-gray-600 dark:text-gray-400 text-sm'>
              &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
