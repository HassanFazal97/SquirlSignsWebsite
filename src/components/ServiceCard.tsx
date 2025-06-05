import { motion } from 'framer-motion';
import React from 'react';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl?: string;
};

const ServiceCard = ({ title, description, icon, imageUrl }: ServiceCardProps) => {
  return (
    <motion.div 
      className="rounded-xl overflow-hidden bg-white shadow-sm border border-neutral-100 hover:shadow-md transition-shadow"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {imageUrl && (
        <div className="h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-100 text-primary-600 mb-5">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold text-neutral-900 mb-3">{title}</h3>
        <p className="text-neutral-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;