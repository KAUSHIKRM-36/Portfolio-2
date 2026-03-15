import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollTriggerConfig {
  start?: string;
  end?: string;
  scrub?: number | boolean;
  markers?: boolean;
}

export const useScrollTrigger = (
  elementRef: React.RefObject<HTMLElement>,
  animationConfig: {
    from?: Record<string, any>;
    to: Record<string, any>;
  },
  scrollConfig: ScrollTriggerConfig = {}
) => {
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const defaults = {
      start: 'top 75%',
      end: 'top 25%',
      scrub: false,
      markers: false,
      ...scrollConfig,
    };

    // Set initial state if 'from' is provided
    if (animationConfig.from) {
      gsap.set(element, animationConfig.from);
    }

    // Create animation
    gsap.to(element, {
      ...animationConfig.to,
      scrollTrigger: {
        trigger: element,
        start: defaults.start,
        end: defaults.end,
        scrub: defaults.scrub,
        markers: defaults.markers,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [elementRef, animationConfig, scrollConfig]);
};