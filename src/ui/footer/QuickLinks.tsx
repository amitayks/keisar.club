import { HEADER_LINKS } from "../../utils/constants";
import QuickLinkTab from "./QuickLinkTab";

function QuickLinks() {
  return (
    <div>
      <div className='flex items-center justify-center'>
        <h3 className='flex text-lg font-semibold'>Site Map</h3>
      </div>

      <ul className='flex flex-col space-y-2 mt-2'>
        {HEADER_LINKS.map((link, i) => (
          <QuickLinkTab key={i} to={link.to} input={link.input} />
        ))}
      </ul>
    </div>
  );
}

export default QuickLinks;
