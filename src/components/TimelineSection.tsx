import { Briefcase, Calendar, GraduationCap } from "lucide-react";
import { TimelineSectionProps } from "../types/Timeline";

const TimelineSection = ({
  title,
  icon,
  iconColor,
  items,
  type = "education",
}: TimelineSectionProps) => {
  const getIconComponent = () => {
    switch (icon) {
      case "graduation":
        return <GraduationCap className={`w-8 h-8 ${iconColor} mr-3`} />;
      case "briefcase":
        return <Briefcase className={`w-8 h-8 ${iconColor} mr-3`} />;
      default:
        return <GraduationCap className={`w-8 h-8 ${iconColor} mr-3`} />;
    }
  };

  const getTimelineColor = () => {
    return type === "education"
      ? "bg-purple-600 dark:bg-purple-400"
      : "bg-blue-600 dark:bg-blue-400";
  };

  return (
    <div>
      <div className='flex items-center md:justify-normal justify-center mb-8'>
        {getIconComponent()}
        <h2 className='text-3xl font-bold text-gray-900 dark:text-white'>
          {title}
        </h2>
      </div>

      <div className='space-y-8'>
        {items.map((item, index) => (
          <div
            key={index}
            className='relative pl-8 border-l-2 border-gray-200 dark:border-gray-700'
          >
            <div
              className={`absolute w-4 h-4 ${getTimelineColor()} rounded-full -left-2.5 top-0`}
            />
            <div className='bg-gray-50 dark:bg-gray-900 rounded-lg p-6'>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-1'>
                {item.title}
              </h3>
              <div className='flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-3'>
                <span className='font-medium'>{item.subtitle}</span>
                <span className='flex items-center'>
                  <Calendar className='w-4 h-4 mr-1' />
                  {item.period}
                </span>
              </div>
              <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineSection;
