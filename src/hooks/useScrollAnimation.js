import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * Custom hook to handle scroll-triggered animations
 * @param {number} threshold - Visibility threshold to trigger the animation (0-1)
 * @param {boolean} triggerOnce - Whether to trigger the animation only once
 * @returns {Object} - Animation controls and ref to attach to the element
 */
const useScrollAnimation = (threshold = 0.2, triggerOnce = true) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return { ref, controls, inView };
};

export default useScrollAnimation;