import { Link } from 'react-router-dom';
import React, { type MouseEvent } from 'react';

interface SmoothScrollLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
}

const SmoothScrollLink = React.forwardRef<HTMLAnchorElement, SmoothScrollLinkProps>(
  ({ to, children, className, onClick, ...props }, ref) => {
    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      console.log('DEBUG: SmoothScrollLink clicked, to:', to, 'isAnchor:', to.startsWith('#'));
      // If it's an internal anchor link (starts with #)
      if (to.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(to);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (onClick) {
        onClick(e);
      }
    };

    return (
      <Link
        ref={ref}
        to={to}
        className={className}
        onClick={handleClick}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

SmoothScrollLink.displayName = 'SmoothScrollLink';

export default SmoothScrollLink;