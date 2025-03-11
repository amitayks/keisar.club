import { Mail, Phone, MapPin } from "lucide-react";
import ContactTab from "./ContactTab";

function ContactInfo() {
  return (
    <div>
      <h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
      <ul className='space-y-2'>
        <ContactTab input='keisarclub@gmail.com' icon={Mail} />
        <ContactTab input='+972-526471797' icon={Phone} />
        <ContactTab input='123 Business Ave, Suite 100' icon={MapPin} />
      </ul>
    </div>
  );
}

export default ContactInfo;
