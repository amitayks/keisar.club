import { useState } from "react";

interface ExpandTableTextProps {
  maxLength?: number;
  children: string;
  className?: string;
  borderColor?: string;
  readMoreText?: string;
}

const ExpandTableText = ({
  children,
  maxLength = 200,
  className = "",
  borderColor = "border-indigo-200 dark:border-indigo-800",
  readMoreText = "Read More",
}: ExpandTableTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (typeof children !== "string") {
    return <div className={className}>{children}</div>;
  }

  const shouldTruncate = children.length > maxLength;

  if (!shouldTruncate) {
    return (
      <div
        className={`p-4 rounded-lg border-2 ${borderColor} bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:via:gray-800 dark:to-gray-700 ${className}`}
      >
        <p className='leading-relaxed text-gray-700 dark:text-gray-300'>
          {children}
        </p>
      </div>
    );
  }

  const truncatedText = children.slice(0, maxLength);
  const remainingText = children.slice(maxLength);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      onClick={handleClick}
      className={`
        cursor-pointer p-6 rounded-xl border-2 transition-all duration-300 transform 
        ${`${borderColor} bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 hover:shadow-md `}
        
        ${className}
      `}
    >
      <div className='relative'>
        <p className='leading-relaxed text-gray-600 dark:text-gray-400 text-lg'>
          {truncatedText}
          <span
            className={`transition-all duration-500 ease-in-out ${
              isExpanded
                ? "opacity-100 max-h-full"
                : "opacity-0 max-h-0 overflow-hidden"
            }`}
            style={{
              display: isExpanded ? "inline" : "none",
            }}
          >
            {remainingText}
          </span>
          {!isExpanded && (
            <>
              <span>... </span>
              <span className='text-indigo-600 dark:text-indigo-400 font-medium'>
                {readMoreText}
              </span>
            </>
          )}
        </p>

        {/* Expand/Collapse Indicator */}
        {/* <div
          className={`
          absolute -top-2 -right-2 w-6 h-6 rounded-full 
          ${
            isExpanded
              ? "bg-indigo-500 text-white"
              : "bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300"
          }
          flex items-center justify-center text-xs font-bold
          transition-all duration-300 transform
          ${isExpanded ? "rotate-180" : "rotate-0"}
        `}
        >
          {isExpanded ? "−" : "+"}
        </div> */}

        {/* {isExpanded && (
          <div className='mt-3 pt-3 border-t border-indigo-200 dark:border-indigo-700'>
            <span className='text-sm text-indigo-600 dark:text-indigo-400 font-medium'>
              ✓ Click anywhere to collapse
            </span>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ExpandTableText;
