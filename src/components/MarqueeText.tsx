import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MarqueeText() {
  const text = 'REACT • NODE.JS • PYTHON • AUTOMATION • AI/ML • FULL STACK • ';
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    // Animate marquee on scroll
    gsap.fromTo(
      marqueeRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: 'top 85%',
          end: 'top 35%',
          scrub: false,
          markers: false,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={marqueeRef}
      className="relative overflow-hidden bg-gradient-to-r from-lime-400 to-lime-300 py-6 transform -rotate-2 my-20"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="text-4xl md:text-5xl font-black mx-8 text-black">{text}</span>
        <span className="text-4xl md:text-5xl font-black mx-8 text-black">{text}</span>
        <span className="text-4xl md:text-5xl font-black mx-8 text-black">{text}</span>
      </div>
    </div>
  );
}