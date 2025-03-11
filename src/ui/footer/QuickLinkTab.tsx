import { Link } from "react-router-dom";

function QuickLinkTab({ link, input }: { link: string; input: string }) {
  return (
    <li className='flex items-center justify-center'>
      <Link
        to={link}
        className='text-gray-400 hover:text-white transition-colors'
      >
        {input}
      </Link>
    </li>
  );
}

export default QuickLinkTab;
