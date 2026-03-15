import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxConfig {
  speed?: number;
}

export const useParallax = (
  elementRef: React.RefObject<HTMLElement>,
  { speed = 0.3 }: ParallaxConfig = {}
) => {
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    gsap.fromTo(
      element,
      { y: 0 },
      {
        y: window.innerHeight * speed * -1,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          markers: false,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [elementRef, speed]);
};