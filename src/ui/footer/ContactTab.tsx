import { LucideIcon } from "lucide-react";

function ContactTab({
  input,
  icon: Icon,
}: {
  input: string;
  icon: LucideIcon;
}) {
  return (
    <li className='flex items-center'>
      <Icon className='h-5 w-5 mr-2 text-stone-300' />
      <span className='text-gray-400'>{input}</span>
    </li>
  );
}

export default ContactTab;
