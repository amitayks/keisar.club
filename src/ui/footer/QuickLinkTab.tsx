import { Link } from "react-router-dom";

function QuickLinkTab({ to, input }: { to: string; input: string }) {
  return (
    <li className='flex items-center justify-center'>
      <Link
        to={to}
        className=' dark:hover:text-zinc-500 hover:text-zinc-600 transition-colors'
      >
        {input}
      </Link>
    </li>
  );
}

export default QuickLinkTab;
