import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useSiteImage } from "../hooks/useSiteImages";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../utils/constants";
import SocialLinksComponent from "./SocialLinksComponent";

function BannerSection() {
  const { image } = useSiteImage(PERSONAL_INFO.profileImage2);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left px-6">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Available for new projects
            </div>

            <h1 className="text-4xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
              Hi, I'm{" "}
            </h1>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-medium">
              {PERSONAL_INFO.title}
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/portfolio"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl group"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-3xl rotate-6 animate-pulse-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl -rotate-6 animate-pulse-20 " />

              <img
                src={image}
                alt={PERSONAL_INFO.name}
                className="relative w-full h-full object-cover rounded-3xl shadow-2xl inset-0"
                onLoad={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.opacity = "1";
                }}
                style={{ opacity: 0, transition: "opacity 0.3s ease-in-out" }}
              />
            </div>

            <div className="absolute -right-[-3rem] top-1/2 -translate-y-1/2 md:-right-[-10rem] lg:-right-[-4rem] ">
              <div className="md:hidden">
                <SocialLinksComponent
                  socialLinks={SOCIAL_LINKS}
                  variant="filled"
                  orientation="vertical"
                  size="md"
                  className="flex flex-col gap-2"
                />
              </div>

              <div className="hidden md:block">
                <SocialLinksComponent
                  socialLinks={SOCIAL_LINKS}
                  variant="filled"
                  orientation="vertical"
                  size="lg"
                  className="flex flex-col gap-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerSection;
