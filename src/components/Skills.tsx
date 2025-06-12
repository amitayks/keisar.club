import { Link } from "react-router-dom";
import { SKILLS } from "../utils/constants";
import { ArrowRight } from "lucide-react";

function Skills({
  style,
  aboutButton,
}: {
  style: string;
  aboutButton: boolean;
}) {
  return (
    <section className={`py-20  ${style}`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
            {`< Skills & Expertise />`}
          </h2>
          {/* <p className='text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto'>
            A diverse skill set spanning traditional craftsmanship and modern
            technology
          </p> */}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {SKILLS.map((skillCategory, index) => (
            <div
              key={index}
              className='bg-white dark:bg-gray-900 rounded-2xl p-8 mx-10 md:mx-5 lg:mx-0 shadow-sm hover:shadow-lg transition-all duration-200 border border-gray-100 dark:border-gray-700 flex flex-col h-full'
            >
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>
                {skillCategory.category}
              </h3>

              <div className='space-y-2 flex-grow'>
                {skillCategory.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className='flex items-center justify-between'
                  >
                    <span className='text-gray-600 dark:text-gray-400'>
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              <div className='mt-4'>
                <div className='flex items-center justify-between mb-1 '>
                  <span className='text-sm text-gray-500 dark:text-gray-500 capitalize'>
                    {skillCategory.level}
                  </span>
                </div>
                <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 '>
                  <div
                    className={`h-2 rounded-full transition-all duration-500  ${
                      skillCategory.level === "expert"
                        ? "w-full bg-green-500"
                        : skillCategory.level === "advanced"
                        ? "w-4/5 bg-blue-500"
                        : skillCategory.level === "intermediate"
                        ? "w-3/5 bg-yellow-500"
                        : "w-2/5 bg-gray-400"
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        {aboutButton && (
          <div className='flex items-center justify-center mt-10'>
            <Link
              to='/about'
              className='inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl group'
            >
              Learn More About Me
              <ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform' />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;
