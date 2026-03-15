import { useRef, useEffect } from 'react';
import { Code, Zap, Brain, Database } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const servicesContainerRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description:
        'Building modern, responsive web applications using React, Node.js, and Express. From concept to deployment, I create seamless user experiences.',
      tags: ['React JS', 'Node JS', 'Express JS'],
    },
    {
      icon: Zap,
      title: 'Automation Tooling',
      description:
        'Developing Python-based automation solutions to streamline workflows, reduce manual tasks, and improve operational efficiency.',
      tags: ['Python', 'MySQL', 'Scripting'],
    },
    {
      icon: Brain,
      title: 'AI Integrations',
      description:
        'Implementing AI-driven features using modern LLM APIs and prompt engineering to create intelligent, adaptive applications.',
      tags: ['Prompt Engineering', 'Gemini API', 'AI/ML'],
    },
    {
      icon: Database,
      title: 'Backend Development',
      description:
        'Designing and implementing robust backend systems with RESTful APIs, database optimization, and secure authentication.',
      tags: ['Node.js', 'MySQL', 'API Design'],
    },
  ];

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

    // Animate service cards with stagger
    if (servicesContainerRef.current) {
      const cards = servicesContainerRef.current.querySelectorAll('[data-service-card]');
      gsap.fromTo(
        cards,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: servicesContainerRef.current,
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
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-2xl text-gray-500 mb-4 font-light">Services</h2>
          <h3
            ref={headingRef}
            className="text-6xl lg:text-7xl font-black max-w-3xl leading-tight"
          >
            Available services that I can work on
          </h3>
        </div>

        <div className="space-y-16 mt-16">
          <div className="mb-8">
            <h4 className="text-2xl font-black mb-2">
              <span className="text-lime-400"></span> Design & Development
            </h4>
          </div>

          <div
            ref={servicesContainerRef}
            className="grid md:grid-cols-2 gap-6"
          >
            {services.map((service, index) => (
              <div
                key={index}
                data-service-card
                className="group bg-black border border-gray-800 p-8 rounded-2xl hover:border-lime-400/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 bg-lime-400/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-lime-400" size={32} />
                  </div>
                </div>

                <h5 className="text-2xl font-bold mb-4">{service.title}</h5>
                <p className="text-gray-400 mb-6 leading-relaxed font-light">{service.description}</p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-black border border-gray-800 rounded-full text-xs text-gray-400 hover:border-lime-400/50 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}