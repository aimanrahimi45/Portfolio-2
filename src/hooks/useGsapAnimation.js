import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for creating GSAP scroll-triggered animations
 * @param {Object} options - Configuration options for the animation
 * @param {string|HTMLElement} options.trigger - Element to trigger the animation
 * @param {HTMLElement} options.target - Element to animate
 * @param {Object} options.from - Starting animation values
 * @param {Object} options.to - Ending animation values
 * @param {Object} options.scrollTrigger - ScrollTrigger configuration
 * @param {Array} options.dependencies - Dependencies for the useEffect hook
 */
const useGsapAnimation = ({
  trigger,
  target,
  from,
  to,
  scrollTrigger = {},
  dependencies = []
}) => {
  const targetRef = useRef(target);
  const animationRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  useEffect(() => {
    // Get the target element
    const targetElement = targetRef.current || target;
    
    if (!targetElement) return;

    // Create the animation
    animationRef.current = gsap.fromTo(
      targetElement,
      from,
      {
        ...to,
        scrollTrigger: {
          trigger: trigger || targetElement,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          ...scrollTrigger
        }
      }
    );

    // Cleanup function
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
    };
  }, dependencies);

  return targetRef;
};

/**
 * Hook for creating fade-in animations
 */
export const useFadeInAnimation = (options = {}) => {
  return useGsapAnimation({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0, duration: 1 },
    ...options
  });
};

/**
 * Hook for creating fade-in-left animations
 */
export const useFadeInLeftAnimation = (options = {}) => {
  return useGsapAnimation({
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: 1 },
    ...options
  });
};

/**
 * Hook for creating fade-in-right animations
 */
export const useFadeInRightAnimation = (options = {}) => {
  return useGsapAnimation({
    from: { opacity: 0, x: 50 },
    to: { opacity: 1, x: 0, duration: 1 },
    ...options
  });
};

/**
 * Hook for creating staggered animations for multiple elements
 */
export const useStaggeredAnimation = (options = {}) => {
  const { targets, stagger = 0.2, ...restOptions } = options;
  
  useEffect(() => {
    if (!targets || targets.length === 0) return;

    const animation = gsap.fromTo(
      targets,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger,
        scrollTrigger: {
          trigger: targets[0],
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          ...restOptions.scrollTrigger
        }
      }
    );

    return () => {
      animation.kill();
    };
  }, [targets, stagger, restOptions.scrollTrigger]);
};

export default useGsapAnimation;