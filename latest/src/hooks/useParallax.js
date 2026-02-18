import { useEffect, useState, useRef } from 'react';

export const useParallax = (speed = 0.5, offset = 0) => {
  const [transform, setTransform] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;
      
      const rect = elementRef.current.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate when element enters viewport
      const scrollPosition = window.scrollY + windowHeight;
      const elementStart = elementTop - windowHeight;
      const elementEnd = elementTop + elementHeight;
      
      // Only apply parallax when element is in or near viewport
      if (scrollPosition >= elementStart && window.scrollY <= elementEnd) {
        const scrolled = window.scrollY - elementStart + offset;
        setTransform(scrolled * speed);
      } else if (window.scrollY < elementStart) {
        setTransform(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, offset]);

  return { transform, ref: elementRef };
};

export default useParallax;
