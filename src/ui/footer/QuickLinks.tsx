import QuickLinkTab from "./QuickLinkTab";

function QuickLinks() {
  return (
    <div>
      <div className='flex items-center justify-center'>
        <h3 className='flex text-lg font-semibold'>Site Map</h3>
      </div>

      <ul className='flex flex-col space-y-2 mt-2'>
        <QuickLinkTab link='/' input='Home' />
        <QuickLinkTab link='/about' input='About Us' />
        <QuickLinkTab link='/products' input='Products' />
        <QuickLinkTab link='/contact' input='Contact' />
      </ul>
    </div>
  );
}

export default QuickLinks;
