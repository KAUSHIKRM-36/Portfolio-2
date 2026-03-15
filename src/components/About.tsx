import { useRef, useEffect } from 'react';
import { Box } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: false,
          markers: false,
        },
      }
    );

    // Animate paragraphs with stagger
    if (paragraphsRef.current) {
      const paragraphs = paragraphsRef.current.querySelectorAll('p');
      gsap.fromTo(
        paragraphs,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: paragraphsRef.current,
            start: 'top 75%',
            end: 'top 25%',
            scrub: false,
            markers: false,
          },
        }
      );
    }

    // Animate button
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: buttonRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: false,
          markers: false,
        },
      }
    );

    // Animate education card
    gsap.fromTo(
      educationRef.current,
      { opacity: 0, x: 60 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: educationRef.current,
          start: 'top 75%',
          end: 'top 25%',
          scrub: false,
          markers: false,
        },
      }
    );

    // Animate stats cards with stagger
    if (statsRef.current) {
      const stats = statsRef.current.querySelectorAll('div > div');
      gsap.fromTo(
        stats,
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 75%',
            end: 'top 25%',
            scrub: false,
            markers: false,
          },
        }
      );
    }
  }, []);

  return (
    <section id="about" className="min-h-screen py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-2xl text-gray-500 mb-4 font-light">About me</h2>
          <h3
            ref={headingRef}
            className="text-6xl lg:text-7xl font-black max-w-3xl leading-tight"
          >
            I can deliver results that exceed your expectations.
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <div ref={paragraphsRef} className="space-y-6">
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                Hi, I'm Kaushik Mahajan, a final-year B.E. student at JSS Science and Technology
                University, Mysuru, specializing in Computer Science and Engineering. With a CGPA
                of 9.21 and a passion for creating meaningful and impactful solutions, I thrive at
                the intersection of innovation and engineering.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                I have hands-on experience in full-stack development, automation tools, and AI-driven
                applications. My journey has been shaped by challenging projects that go beyond
                theoretical knowledge, allowing me to deliver scalable and efficient solutions in
                real-world scenarios.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                Outside of coding, I enjoy playing football, painting, and exploring new recipes in
                the kitchen. I believe in continuous learning and staying updated with the latest
                technologies to build the future of software.
              </p>
            </div>

            <button
              ref={buttonRef}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-lime-400 text-black rounded-full font-bold hover:bg-lime-300 transition-all duration-300 inline-flex items-center gap-2"
            >
              Get In Touch
            </button>
          </div>

          <div className="relative">
            <div className="absolute top-0 right-0 w-32 h-32">
              <Box size={120} className="text-gray-800/50" />
            </div>

            <div className="space-y-8 pt-12">
              <div
                ref={educationRef}
                className="bg-black border border-gray-800 p-8 rounded-2xl hover:border-lime-400/30 transition-colors duration-300"
              >
                <h4 className="text-2xl font-black mb-6">Education</h4>
                <div className="space-y-6">
                  <div>
                    <div className="text-lg font-bold">B.E. Computer Science & Engineering</div>
                    <div className="text-gray-400 font-light text-sm mt-1">JSS Science and Technology University, Mysuru</div>
                    <div className="text-lime-400 font-bold mt-3">CGPA: 9.21 | Graduating 2026</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold">Pre-University</div>
                    <div className="text-gray-400 font-light text-sm mt-1">Percentage: 97.33%</div>
                  </div>
                </div>
              </div>

              <div ref={statsRef} className="grid grid-cols-3 gap-4">
                <div className="bg-black border border-gray-800 p-6 rounded-xl text-center hover:border-lime-400/30 transition-colors duration-300">
                  <div className="text-4xl font-black text-lime-400">312+</div>
                  <div className="text-gray-500 text-xs font-light mt-2">Hours Coded</div>
                </div>
                <div className="bg-black border border-gray-800 p-6 rounded-xl text-center hover:border-lime-400/30 transition-colors duration-300">
                  <div className="text-4xl font-black text-lime-400">281+</div>
                  <div className="text-gray-500 text-xs font-light mt-2">Commits</div>
                </div>
                <div className="bg-black border border-gray-800 p-6 rounded-xl text-center hover:border-lime-400/30 transition-colors duration-300">
                  <div className="text-4xl font-black text-lime-400">10+</div>
                  <div className="text-gray-500 text-xs font-light mt-2">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}