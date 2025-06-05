import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

type SocialLink = {
  type: 'linkedin' | 'twitter' | 'email';
  url: string;
};

type TeamMemberProps = {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks?: SocialLink[];
};

const TeamMember = ({ name, role, bio, imageUrl, socialLinks = [] }: TeamMemberProps) => {
  const getSocialIcon = (type: string) => {
    switch (type) {
      case 'linkedin':
        return <Linkedin size={16} />;
      case 'twitter':
        return <Twitter size={16} />;
      case 'email':
        return <Mail size={16} />;
      default:
        return null;
    }
  };

  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-sm border border-neutral-100 hover:shadow-md transition-shadow"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-full h-64 object-cover object-center"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-neutral-900">{name}</h3>
        <p className="text-primary-600 font-medium mb-3">{role}</p>
        <p className="text-neutral-600 mb-4">{bio}</p>
        
        {socialLinks.length > 0 && (
          <div className="flex space-x-3">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-700 hover:bg-primary-100 hover:text-primary-600 transition"
                aria-label={`${name}'s ${link.type}`}
              >
                {getSocialIcon(link.type)}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TeamMember;