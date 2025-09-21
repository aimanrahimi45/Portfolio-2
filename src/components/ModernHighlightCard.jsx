import { useRef, useState } from 'react';
import { gsap } from 'gsap';

const ModernHighlightCard = ({ 
  icon, 
  title, 
  description, 
  className = '',
  color = 'blue'
}) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Color variants
  const colorVariants = {
    blue: {
      bg: 'from-blue-500/10 to-blue-600/10',
      border: 'border-blue-500/30',
      hoverBorder: 'hover:border-blue-400/60',
      text: 'text-blue-600',
      hoverText: 'hover:text-blue-500',
      glow: 'shadow-blue-500/20',
      iconBg: 'bg-blue-100',
      hoverIconBg: 'hover:bg-blue-200'
    },
    purple: {
      bg: 'from-purple-500/10 to-purple-600/10',
      border: 'border-purple-500/30',
      hoverBorder: 'hover:border-purple-400/60',
      text: 'text-purple-600',
      hoverText: 'hover:text-purple-500',
      glow: 'shadow-purple-500/20',
      iconBg: 'bg-purple-100',
      hoverIconBg: 'hover:bg-purple-200'
    },
    teal: {
      bg: 'from-teal-500/10 to-teal-600/10',
      border: 'border-teal-500/30',
      hoverBorder: 'hover:border-teal-400/60',
      text: 'text-teal-600',
      hoverText: 'hover:text-teal-500',
      glow: 'shadow-teal-500/20',
      iconBg: 'bg-teal-100',
      hoverIconBg: 'hover:bg-teal-200'
    }
  };

  const colors = colorVariants[color] || colorVariants.blue;

  // Handle mouse move for 3D tilt effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to card center
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Calculate rotation values (limited to a small range)
    const rotateY = (x / rect.width) * 10;
    const rotateX = -(y / rect.height) * 10;
    
    // Apply the transformation
    gsap.to(card, {
      rotateY,
      rotateX,
      transformPerspective: 1000,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  // Reset card position when mouse leaves
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    
    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)'
    });
    
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className={`relative group overflow-hidden backdrop-blur-sm bg-white rounded-2xl border ${colors.border} ${colors.hoverBorder} p-6 transition-all duration-300 transform-gpu ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background gradient */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
      />
      
      {/* Glow effect on hover */}
      <div 
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 ${isHovered ? `shadow-lg ${colors.glow}` : ''}`}
      />
      
      {/* Icon container */}
      <div 
        className={`w-14 h-14 rounded-xl ${colors.iconBg} ${colors.hoverIconBg} flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110`}
      >
        <div className={`text-2xl ${colors.text} ${colors.hoverText} transition-colors duration-300`}>
          {icon}
        </div>
      </div>
      
      {/* Title */}
      <h3 className={`text-xl font-bold mb-3 ${colors.text} ${colors.hoverText} transition-colors duration-300`}>
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
      
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100/50 group-hover:bg-gray-200/50 transition-colors duration-300" />
      <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-gray-100/50 group-hover:bg-gray-200/50 transition-colors duration-300" />
    </div>
  );
};

export default ModernHighlightCard;