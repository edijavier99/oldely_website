import { Link } from 'react-router-dom';
import logo from "@/assets/oldelyv2.jpg"

const LinkGroup = ({
  title,
  links
}: {
  title: string;
  links: { label: string; path: string }[];
}) => {
  return (
    <div>
      <h4 className='font-bold text-black text-sm'>{title}</h4>
      <ul className='flex flex-col'>
        {links.map((link, i) => (
          <li key={i}>
            <Link
              to={link.path}
              onClick={() => window.scrollTo(0, 0)}
              className="hover:text-gray-900 text-xs text-gray-450 duration-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SocialLinks = () => {
  const socialLinks = [
    { href: 'https://www.instagram.com/impresario.invest/', iconClass: 'fab fa-instagram', label: 'Instagram' },
    { href: 'https://www.tiktok.com/@impresario_invest?_t=ZN-8wbLTZFW1FW&_r=1', iconClass: 'fab fa-tiktok', label: 'Twitter' },
    { href: 'https://www.linkedin.com/company/107403231', iconClass: 'fab fa-linkedin', label: 'LinkedIn' }
  ];

  return (
    <div className='flex flex-col'>
      <h4 className='font-bold text-black text-sm mb-2'>Our Social Media</h4>
      <ul className='flex space-x-4'>
        {socialLinks.map((social, i) => (
          <li key={i} className='duration-300 hover:text-gray-900'>
            <a 
              className='text-xl' 
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={social.label}
            >
              <i className={social.iconClass}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};



export const Footer = () => {
  return (
    <section className="text-[#667085] footerSection font-medium px-4 sm:px-6 lg:px-8">
      <hr className="border-gray-300" />
      <div className="grid space-y-5 grid-cols-1 sm:grid-cols-4 md:grid-cols-4 items-start justify-between mt-[35px]">
        <div className='flex'>
                <img alt="oldely" src={logo}  className='h-8' />
        </div>

        <LinkGroup title="Join Waitlist" links={[{ label: 'Early access', path: '#' }]} />
        <LinkGroup
          title="Company"
          links={[
            { label: 'Privacy Policy', path: '#' },
            { label: 'Legal Notice', path: '#' },
            { label: 'Terms Of Services', path: '#' },
          ]}
        />
        <SocialLinks />
      </div>

     <p className="text-xs mt-12">
        The Oldely wearable device and app are intended for general wellness and 
        personal health monitoring only. They are not a substitute for professional 
        medical advice, diagnosis, or treatment. Users should always consult a 
        healthcare professional regarding any medical concerns. Data collected is 
        securely stored and processed in accordance with applicable privacy laws.
    </p>

      <p className='text-center font-medium text-sm my-[50px]'>
        @2025 Oldely. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;