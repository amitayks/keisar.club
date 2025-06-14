import { Link, useLocation } from "react-router-dom";

const styles = {
  default:
    "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-lg font-medium transition-colors relative",
  mobile:
    "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-4 rounded-lg font-medium transition-colors block flex justify-center",
};

function HeaderTab({
  to,
  input,
  className,
  onClick,
  icon: Icon,
}: {
  to: string;
  input?: string;
  className: keyof typeof styles;
  onClick?: () => void;
  icon?: React.ElementType;
}) {
  const location = useLocation();
  const isActive =
    location.pathname === to ||
    (to !== "/" && location.pathname.startsWith(to));

  return (
    <Link
      to={to}
      className={`${styles[className]} ${
        isActive ? "text-blue-600 dark:text-blue-400" : ""
      }`}
      onClick={onClick}
    >
      <div className='flex items-center'>
        {Icon && <Icon className='h-5 w-5 mr-3' />}
        {input}
        {/* Active indicator for desktop */}
        {isActive && className === "default" && (
          <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full' />
        )}
      </div>
    </Link>
  );
}

export default HeaderTab;
