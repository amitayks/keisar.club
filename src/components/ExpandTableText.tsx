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
  borderColor = "border-indigo-200 dark:border-indigo-900",
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
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">{children}</p>
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
        ${`${borderColor} bg-gradient-to-tr from-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700 hover:shadow-md `}
        
        ${className}
      `}
    >
      <div className="relative">
        <p className="leading-relaxed text-gray-600 dark:text-gray-400 text-lg">
          {truncatedText}
          <span
            className={`transition-all duration-500 ease-in-out ${
              isExpanded ? "opacity-100 max-h-full" : "opacity-0 max-h-0 overflow-hidden"
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
              <span className="text-indigo-600 dark:text-indigo-500 font-medium">
                {readMoreText}
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default ExpandTableText;
