import { useState, useEffect, useRef } from 'react';

const useScrollFade = (threshold = 0.3) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const element = elementRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the element is visible
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Start fading when element starts going up past the threshold
      const fadeStart = windowHeight * threshold;
      
      if (elementTop < -fadeStart) {
        setIsFading(true);
        setIsVisible(false);
      } else if (elementTop < fadeStart) {
        // In the fade zone
        const fadeProgress = Math.abs(elementTop) / fadeStart;
        const opacity = 1 - Math.min(fadeProgress, 1);
        
        if (element.style) {
          element.style.opacity = opacity;
          element.style.transform = `translateY(${fadeProgress * -50}px)`;
        }
        
        setIsFading(fadeProgress > 0.1);
        setIsVisible(opacity > 0.1);
      } else {
        // Fully visible
        if (element.style) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
        setIsFading(false);
        setIsVisible(true);
      }
    };

    handleScroll(); // Initial call
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [threshold]);

  return { elementRef, isVisible, isFading };
};

export default useScrollFade;
