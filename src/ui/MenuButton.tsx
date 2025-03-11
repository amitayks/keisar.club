// const base =
//   "inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

// const styles = {
//   primary: base + " px-4 py-3 md:px-6 md:py-4",
//   small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
//   round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-ms",
//   secondary:
//     "inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
//   smallGray:
//     "inline-block text-sm rounded-full bg-gray-300 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2 md:px-5 md:py-2.5 text-xs",
// };

function MenuButton({
  children,
  //   disabled,
  //   type,
  onClick,
}: //   className,
{
  children: React.ReactNode;
  //   disabled: boolean;
  //   type: keyof typeof styles;
  onClick?: () => void;
  //   className?: string;
}) {
  return (
    <button
      //   className={`${styles[type]} ${className}`}
      className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none'
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default MenuButton;
