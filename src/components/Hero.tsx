import { useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const hero = heroSectionRef.current;
    if (!hero) return;

    // ==========================================
    // INITIAL LOAD ANIMATIONS
    // ==========================================
    
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    );

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.2, ease: 'power3.out' }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1.2, delay: 0.3, ease: 'power3.out' }
    );

    gsap.fromTo(
      buttonsRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.4, ease: 'power3.out' }
    );

    gsap.fromTo(
      statsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.5, ease: 'power3.out' }
    );

    // ==========================================
    // CINEMATIC EXIT ANIMATION ON SCROLL
    // ==========================================

    // Create a timeline for coordinated animations
    const exitTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: 'center center', // When hero center hits viewport center
        end: 'bottom center', // Until hero bottom hits viewport center
        scrub: 1.5, // Smooth scroll-linked animation
        markers: false, // Set to true for debugging
        onUpdate: (self) => {
          // Optional: log progress for debugging
          // console.log('Scroll Progress:', self.progress);
        },
      },
    });

    // Animate image: move right, scale up, fade out
    exitTimeline.to(
      imageRef.current,
      {
        x: 300, // Move significantly right
        scale: 2, // Zoom in more
        opacity: 0, // Completely transparent
        ease: 'none',
      },
      0 // Start at timeline beginning
    );

    // Animate text content: fade out and slide right
    exitTimeline.to(
      contentRef.current,
      {
        opacity: 0,
        x: 200, // Slide right off-screen
        ease: 'none',
      },
      0 // Synchronized with image animation
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={heroSectionRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Image Column */}
        <div className="order-2 lg:order-1 relative">
          <div
            ref={imageRef}
            className="relative w-full aspect-square max-w-md mx-auto lg:max-w-none"
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <img
                src="https://i.postimg.cc/cLrmj1Qx/88899.png"
                alt="Kaushik Mahajan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Text Content Column */}
        <div
          ref={contentRef}
          className="order-1 lg:order-2 space-y-8"
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="space-y-6">
            <h1
              ref={titleRef}
              className="text-7xl lg:text-8xl font-black leading-none tracking-tight"
            >
              Kaushik
              <br />
              Mahajan
            </h1>
            <p
              ref={subtitleRef}
              className="text-gray-400 text-lg max-w-lg font-light leading-relaxed"
            >
              Computer Science Engineering student passionate about building scalable,
              impactful software solutions using modern technologies.
            </p>
          </div>

          <div ref={buttonsRef} className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-lime-400 text-black rounded-full font-bold hover:bg-lime-300 transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-gray-700 rounded-full font-medium hover:border-lime-400 hover:text-lime-400 transition-colors duration-300"
            >
              Contact Me
            </button>
          </div>

          <div ref={statsRef} className="flex gap-12 pt-8 border-t border-gray-800">
            <div>
              <div className="text-4xl font-black text-lime-400">9.21</div>
              <div className="text-gray-500 text-sm font-light mt-1">CGPA</div>
            </div>
            <div>
              <div className="text-4xl font-black text-lime-400">2026</div>
              <div className="text-gray-500 text-sm font-light mt-1">Graduate</div>
            </div>
            <div>
              <div className="text-4xl font-black text-lime-400">50+</div>
              <div className="text-gray-500 text-sm font-light mt-1">Projects</div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-gray-500" />
      </button>
    </section>
  );
}