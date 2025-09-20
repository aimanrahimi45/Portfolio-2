import React from 'react';
import SmoothScrollLink from './SmoothScrollLink';

interface PortfolioLogoProps {
  className?: string;
  [key: string]: unknown; // To allow other props like aria-label
}

const PortfolioLogo: React.FC<PortfolioLogoProps> = ({ className, ...props }) => {
  return (
    <SmoothScrollLink
      to="/"
      className={`flex-shrink-0 flex items-center group ${className || ''}`}
      aria-label="Home"
      {...props}
    >
      <span className="font-bold text-xl text-white group-hover:text-blue-400 transition-colors duration-300">
        Portfolio
      </span>
    </SmoothScrollLink>
  );
};

export default PortfolioLogo;