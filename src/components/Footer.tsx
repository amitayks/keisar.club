import { PERSONAL_INFO, SOCIAL_LINKS } from "../utils/constants";
import Logo from "./Logo";
import SocialLinksComponent from "./SocialLinksComponent";

const Footer = () => {
  return (
    <footer className='bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-20 flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center text-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Brand Section */}
        <div className='flex items-center justify-center mb-6'>
          <Logo
            width={32}
            height={32}
            fill='currentColor'
            className='text-gray-900 dark:text-white'
            style={{ transform: "scaleX(-1)" }}
          />
          <span className='ml-3 text-xl font-bold text-gray-900 dark:text-white aspect-'>
            {PERSONAL_INFO.name}
          </span>
        </div>

        <p className='text-gray-600 dark:text-gray-400 mb-8 max-w-md leading-relaxed text-center'>
          {PERSONAL_INFO.tagline}
        </p>

        <div className='mb-8'>
          <SocialLinksComponent
            socialLinks={SOCIAL_LINKS}
            variant='outline'
            // showLabels={true}
            // size='lg'
          />
        </div>

        {/* Bottom Section */}
        <div className='border-t border-gray-100 dark:border-gray-800 pt-8 w-full flex justify-center'>
          <p className='text-gray-600 dark:text-gray-400 text-sm'>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
