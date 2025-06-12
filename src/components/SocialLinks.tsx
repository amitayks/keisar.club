import {
  Facebook,
  Github,
  Instagram,
  Mail,
  MessageCircleMore,
} from "lucide-react";
import { PERSONAL_INFO } from "../utils/constants";

function SocialLinks() {
  return (
    <div className='flex gap-4 justify-center'>
      <a
        href={PERSONAL_INFO.github}
        target='_blank'
        rel='noopener noreferrer'
        className='p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors'
        aria-label='GitHub'
      >
        <Github className='w-5 h-5' />
      </a>
      {/* <a
                href={PERSONAL_INFO.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors'
                aria-label='LinkedIn'
              >
                <Linkedin className='w-5 h-5' />
              </a> */}
      <a
        href={`mailto:${PERSONAL_INFO.email}`}
        className='p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors'
        aria-label='Email'
      >
        <Mail className='w-5 h-5' />
      </a>
      <a
        href={`${PERSONAL_INFO.whatsapp}`}
        className='p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors'
        aria-label='Email'
      >
        <MessageCircleMore className='w-5 h-5' />
      </a>
      <a
        href={`${PERSONAL_INFO.instagram}`}
        className='p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors'
        aria-label='Email'
      >
        <Instagram className='w-5 h-5' />
      </a>
      <a
        href={`${PERSONAL_INFO.facebook}`}
        className='p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors'
        aria-label='Email'
      >
        <Facebook className='w-5 h-5' />
      </a>
    </div>
  );
}

export default SocialLinks;
