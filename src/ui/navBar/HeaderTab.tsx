import { Link } from "react-router-dom";

const base =
  "text-gray-700 dark:text-gray-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md font-medium";
const orderBase =
  "bg-stone-600 text-white px-4 py-2 rounded-md font-medium hover:bg-stone-800 dark:bg-stone-700 dark:hover:bg-stone-900";

const styles = {
  default: base,
  mobile: base + " block w-full text-left",
  order: orderBase,
  mobileOrder: orderBase + " block w-full text-center",
};

function HeaderTab({
  to,
  input,
  className,
  onClick,
  icon: Icon,
}: {
  to: string;
  input: string;
  className: keyof typeof styles;
  onClick?: () => void;
  icon?: React.ElementType;
}) {
  return (
    <Link to={to} className={styles[className]} onClick={onClick}>
      <div className='flex items-center'>
        {Icon && <Icon className='h-5 w-5 mr-3' />}
        {input}
      </div>
    </Link>
  );
}

export default HeaderTab;
