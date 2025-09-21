import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const AnimatedProgressBar = ({ 
  skill, 
  level, 
  color = 'from-blue-500 to-blue-600',
  height = 'h-2.5',
  showPercentage = true,
  className = ''
}) => {
  const progressRef = useRef(null);
  const [displayLevel, setDisplayLevel] = useState(0);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!progressRef.current) return;

    // Create animation for progress bar fill
    animationRef.current = gsap.to(progressRef.current, {
      width: `${level}%`,
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: progressRef.current.parentElement,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      onUpdate: () => {
        // Update the displayed percentage during animation
        const progress = Math.round(gsap.getProperty(progressRef.current, 'width') / progressRef.current.parentElement.offsetWidth * 100);
        setDisplayLevel(progress);
      }
    });

    // Cleanup function
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [level]);

  return (
    <div className={`mb-4 ${className}`}>
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-300">
          {skill}
        </span>
        {showPercentage && (
          <span className="text-gray-500 text-sm font-medium">
            {displayLevel}%
          </span>
        )}
      </div>
      <div className={`w-full bg-gray-200 rounded-full overflow-hidden ${height}`}>
        <div
          ref={progressRef}
          className={`bg-gradient-to-r ${color} h-full rounded-full transition-all duration-1000 ease-out`}
          style={{ width: '0%' }}
        ></div>
      </div>
    </div>
  );
};

export default AnimatedProgressBar;