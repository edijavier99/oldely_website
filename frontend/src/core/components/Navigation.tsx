import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logov2 from "@/assets/oldelyv2.jpg";
import { Link } from 'react-router-dom';
import WaitlistFlow from '../../modules/home/components/WaitlistFlow';


const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Product', href: '#product' },
    { name: 'How it works', href: '#how-it-works' },
  ];

  return (
    <nav className="w-full border-b border-neutral-200">
      <div className="px-6 md:pl-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img className="h-8" src={logov2} alt="Logo" />
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center gap-4">

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-neutral-700 hover:text-neutral-900 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-neutral-200 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            <WaitlistFlow buttonClassName="flex items-center justify-center" buttonLabel="Join Waitlist" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;



