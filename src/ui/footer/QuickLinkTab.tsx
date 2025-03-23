import { Link } from "react-router-dom";

function QuickLinkTab({ link, input }: { link: string; input: string }) {
  return (
    <li className='flex items-center justify-center'>
      <Link
        to={link}
        className=' dark:hover:text-white hover:text-zinc-600 transition-colors'
      >
        {input}
      </Link>
    </li>
  );
}

export default QuickLinkTab;
