import { Github, Linkedin, Mail } from "lucide-react";
import CTASection from "../components/CTASection";
import ExperienceSection from "../components/ExperienceSection";
import Skills from "../components/Skills";
import { useSiteImage } from "../hooks/useSiteImages";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../utils/constants";
import SocialLinksComponent from "../components/SocialLinksComponent";

const About = () => {
  const { image } = useSiteImage(PERSONAL_INFO.profileImage);

  return (
    <div className='min-h-screen bg-white dark:bg-gray-900'>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900  dark:to-gray-800 overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div className='flex flex-col'>
              <h1 className=' flex justify-center text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6'>
                About {PERSONAL_INFO.name}
              </h1>
              {/* <p className='flex justify-end text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed'>
                {PERSONAL_INFO.bio}
              </p> */}

              {/* Social Links */}
              <div className='md:block hidden'>
                <SocialLinksComponent
                  socialLinks={SOCIAL_LINKS}
                  variant='filled'
                  showLabels
                />
              </div>
              <div className='md:hidden'>
                <SocialLinksComponent
                  socialLinks={SOCIAL_LINKS}
                  variant='filled'
                  size='md'
                  // showLabels
                />
              </div>
              {/* <div className='flex gap-4'>
                <a
                  href={PERSONAL_INFO.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-100 dark:border-gray-700'
                >
                  <Github className='w-6 h-6' />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-100 dark:border-gray-700'
                >
                  <Linkedin className='w-6 h-6' />
                </a>
                <a
                  href={PERSONAL_INFO.email}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-100 dark:border-gray-700'
                >
                  <Mail className='w-6 h-6' />
                </a>
              </div> */}
            </div>

            <div className='relative'>
              <div className='relative w-80 h-80 mx-auto lg:w-96 lg:h-96'>
                <div className='absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-3xl rotate-6 opacity-20' />
                <img
                  src={image}
                  alt={PERSONAL_INFO.name}
                  className='relative w-full h-full object-cover rounded-3xl shadow-2xl inset-0'
                  onLoad={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.opacity = "1";
                  }}
                  style={{ opacity: 0, transition: "opacity 0.3s ease-in-out" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Skills
        aboutButton={false}
        style='bg-gradient-to-tl from-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'
      />

      <ExperienceSection style='bg-gradient-to-bl from-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900' />

      <CTASection style='bg-gradient-to-bl from-gray-50 to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-900' />
    </div>
  );
};

export default About;
