function MenuButton({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      className={`inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-stone-200 dark:focus:ring-gray-700 ${className}`}
      onClick={onClick}
      aria-label='Menu'
    >
      {children}
    </button>
  );
}

export default MenuButton;
