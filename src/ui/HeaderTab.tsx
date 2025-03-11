import { Link } from "react-router-dom";

const styles = {
  order:
    "bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700",
  default:
    "text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium",
  mobile:
    "block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium",
  mobileOrder:
    "block bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 mt-2",
};

function HeaderTab({
  to,
  input,
  className,
  onClick,
}: {
  to: string;
  input: string;
  className: keyof typeof styles;
  onClick?: () => void;
}) {
  return (
    <Link to={to} className={styles[className]} onClick={onClick}>
      {input}
    </Link>
  );
}

export default HeaderTab;
