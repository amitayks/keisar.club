import { Link } from "react-router-dom";

const base =
  "text-gray-700 hover:text-stone-900 hover:bg-stone-200 px-3 py-2 rounded-md font-medium";
const orderBase =
  "bg-stone-600 text-white px-4 py-2 rounded-md font-medium hover:bg-stone-800";

const styles = {
  default: base,
  mobile: base + " block",
  order: orderBase,
  mobileOrder: orderBase + " block",
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
