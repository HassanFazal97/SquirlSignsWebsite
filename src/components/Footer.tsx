import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and mission */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/squirl-logo.png" alt="SquirlSigns Logo" className="h-7 w-7" />
              <span className="text-xl font-bold text-neutral-900">SquirlSigns</span>
            </Link>
            <p className="text-neutral-600 mt-4 leading-relaxed">
              Breaking communication barriers with AI-powered ASL translation.
            </p>
            <div className="flex space-x-4 mt-6">
              <SocialIcon icon={<Facebook size={20} />} href="https://facebook.com" />
              <SocialIcon icon={<Twitter size={20} />} href="https://twitter.com" />
              <SocialIcon icon={<Instagram size={20} />} href="https://www.instagram.com/squirlsigns/" />
              <SocialIcon icon={<Linkedin size={20} />} href="https://www.linkedin.com/company/squirl-signs/" />
            </div>
          </div>
          
          {/* Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neutral-900">Pages</h3>
            <ul className="space-y-3">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/services">What We Do</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neutral-900">What We Do</h3>
            <ul className="space-y-3">
              <FooterLink href="/services#translation">ASL Translation</FooterLink>
              <FooterLink href="/services#learning">ASL Learning</FooterLink>
              <FooterLink href="/services#accessibility">Accessibility Solutions</FooterLink>
              <FooterLink href="/services#community">Community Building</FooterLink>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neutral-900">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-neutral-600">
                <Mail size={20} className="text-primary-600 mt-0.5 flex-shrink-0" />
                <span>squirl.enactusutm@gmail.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link 
                to="/contact" 
                className="px-5 py-2.5 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition inline-block"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-200 mt-12 pt-8 text-center text-neutral-600 text-sm">
          <p>© {currentYear} SquirlSigns. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Helper components
const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-neutral-200 text-neutral-700 hover:text-primary-600 hover:border-primary-600 transition"
    aria-label="Social media"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link 
      to={href} 
      className="text-neutral-600 hover:text-primary-600 transition"
    >
      {children}
    </Link>
  </li>
);

export default Footer;