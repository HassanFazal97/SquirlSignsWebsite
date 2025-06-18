import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Removed HandMetal
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/squirl-logo.png" alt="SquirlSigns Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-neutral-900">SquirlSigns</span>
        </Link>

        {/* Desktop Menu Centered */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex space-x-8">
            {/* Removed Home NavLink */}
            <NavLink to="/about" active={isActive('/about')}>About Us</NavLink>
            <NavLink to="/services" active={isActive('/services')}>What We Do</NavLink>
            <NavLink to="/contact" active={isActive('/contact')}>Contact</NavLink>
          </div>
        </div>

        {/* Try it now button on right */}
        <div className="hidden md:flex ml-auto">
          <Link
            to="/try"
            className="bg-primary-600 text-white font-semibold px-5 py-2 rounded-md shadow hover:bg-primary-700 transition-colors"
          >
            Try it now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-neutral-900" />
          ) : (
            <Menu className="h-6 w-6 text-neutral-900" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-xl"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {/* Removed Home MobileNavLink */}
            <MobileNavLink to="/about" active={isActive('/about')}>About Us</MobileNavLink>
            <MobileNavLink to="/services" active={isActive('/services')}>What We Do</MobileNavLink>
            <MobileNavLink to="/contact" active={isActive('/contact')}>Contact</MobileNavLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

// Desktop NavLink component
const NavLink = ({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className={`font-medium transition-colors hover:text-primary-600 ${
      active ? 'text-primary-600' : 'text-neutral-800'
    }`}
  >
    {children}
  </Link>
);

// Mobile NavLink component
const MobileNavLink = ({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className={`py-3 px-4 text-lg font-medium transition-colors hover:bg-primary-50 rounded-md ${
      active ? 'text-primary-600 bg-primary-50' : 'text-neutral-800'
    }`}
  >
    {children}
  </Link>
);

export default Navbar;