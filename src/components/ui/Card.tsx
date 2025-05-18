import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${hover ? 'card-hover' : ''} ${className}`}>
      {children}
    </div>
  );
};

export const CardImage: React.FC<{ src: string; alt: string; className?: string }> = ({ 
  src, 
  alt, 
  className = '' 
}) => {
  return (
    <div className="relative h-48 md:h-64 overflow-hidden">
      <img 
        src={src} 
        alt={alt} 
        className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 ${className}`} 
      />
    </div>
  );
};

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`p-5 ${className}`}>
      {children}
    </div>
  );
};

export const CardTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <h3 className={`text-xl font-heading font-semibold text-gray-800 mb-2 ${className}`}>
      {children}
    </h3>
  );
};

export default Card;