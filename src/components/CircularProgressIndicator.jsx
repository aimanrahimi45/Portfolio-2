import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const CircularProgressIndicator = ({ 
  skill, 
  level, 
  size = 120,
  strokeWidth = 8,
  color = '#3b82f6',
  backgroundColor = '#e5e7eb',
  className = ''
}) => {
  const circleRef = useRef(null);
  const textRef = useRef(null);
  const [displayLevel, setDisplayLevel] = useState(0);
  const animationRef = useRef(null);

  // Calculate radius and circumference
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  
  // Calculate stroke dashoffset based on level
  const strokeDashoffset = circumference - (level / 100) * circumference;

  useEffect(() => {
    if (!circleRef.current) return;

    // Animate the circular progress
    animationRef.current = gsap.fromTo(
      circleRef.current,
      { 
        strokeDashoffset: circumference,
        opacity: 0
      },
      {
        strokeDashoffset,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: circleRef.current.parentElement,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        onUpdate: () => {
          // Calculate current progress based on strokeDashoffset
          const currentOffset = gsap.getProperty(circleRef.current, 'strokeDashoffset');
          const progress = Math.round((1 - currentOffset / circumference) * 100);
          setDisplayLevel(progress);
        }
      }
    );

    // Animate the text
    gsap.fromTo(
      textRef.current,
      { 
        scale: 0.5,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        delay: 0.5,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: textRef.current.parentElement,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Cleanup function
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [level, circumference, radius]);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          className="transform -rotate-90"
        >
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={backgroundColor}
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Progress circle */}
          <circle
            ref={circleRef}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
          />
        </svg>
        {/* Percentage text */}
        <div 
          ref={textRef}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="text-lg font-bold text-gray-700">
            {displayLevel}%
          </span>
        </div>
      </div>
      {/* Skill name */}
      <div className="mt-3 text-center">
        <span className="text-sm font-medium text-gray-700">
          {skill}
        </span>
      </div>
    </div>
  );
};

export default CircularProgressIndicator;