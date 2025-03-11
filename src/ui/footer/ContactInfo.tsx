import { Mail, Phone, MapPin } from "lucide-react";

function ContactInfo() {
  return (
    <div>
      <h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
      <ul className='space-y-2'>
        <li className='flex items-center'>
          <Mail className='h-5 w-5 mr-2 text-indigo-400' />
          <span className='text-gray-400'>info@keisarclub.com</span>
        </li>
        <li className='flex items-center'>
          <Phone className='h-5 w-5 mr-2 text-indigo-400' />
          <span className='text-gray-400'>+1 (555) 123-4567</span>
        </li>
        <li className='flex items-start'>
          <MapPin className='h-5 w-5 mr-2 text-indigo-400 mt-1' />
          <span className='text-gray-400'>
            123 Business Ave, Suite 100
            <br />
            New York, NY 10001
          </span>
        </li>
      </ul>
    </div>
  );
}

export default ContactInfo;
