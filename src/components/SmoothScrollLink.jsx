import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const SmoothScrollLink = ({ to, children, className, onClick }) => {
  const location = useLocation();

  const handleClick = (e) => {
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
      to={to}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

export default SmoothScrollLink;