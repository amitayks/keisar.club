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
      <Icon className='h-5 w-5 mr-2' />
      <span>{input}</span>
    </li>
  );
}

export default ContactTab;
