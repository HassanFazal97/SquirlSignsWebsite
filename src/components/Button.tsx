import React from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  external = false,
  className = '',
  onClick,
  type = 'button'
}: ButtonProps) => {
  // Base style for all buttons
  const baseStyle = 'inline-flex items-center justify-center font-medium transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2';
  
  // Size styles
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800',
    secondary: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 active:bg-neutral-300',
    outline: 'bg-transparent text-primary-600 border border-primary-600 hover:bg-primary-50',
  };
  
  const buttonStyle = `${baseStyle} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;
  
  // Render as link if href is provided
  if (href) {
    if (external) {
      return (
        <a 
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonStyle}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }
    
    if (href.startsWith('#')) {
      return (
        <a 
          href={href}
          className={buttonStyle}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }
    
    return (
      <Link 
        to={href}
        className={buttonStyle}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }
  
  // Render as button otherwise
  return (
    <button 
      type={type}
      className={buttonStyle}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;