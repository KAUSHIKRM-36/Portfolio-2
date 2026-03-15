import { useRef, useEffect } from 'react';
import { Code, Cpu, Server, Database, Atom } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const categoriesContainerRef = useRef<HTMLDivElement>(null);
  const iconsContainerRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: 'Programming',
      skills: ['C', 'Java', 'Python'],
    },
    {
      title: 'Web Development',
      skills: ['React JS', 'Node JS', 'Express JS'],
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL'],
    },
    {
      title: 'AI/LLM Tools',
      skills: ['Prompt Engineering', 'Gemini API'],
    },
    {
      title: 'Other',
      skills: ['OS', 'ML', 'System Design', 'Azure DevOps'],
    },
  ];

  const icons = [Code, Cpu, Server, Database, Atom];

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

    // Animate skill categories with stagger
    if (categoriesContainerRef.current) {
      const categories = categoriesContainerRef.current.querySelectorAll('[data-skill-category]');
      gsap.fromTo(
        categories,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out',
          scrollTrigger: {
            trigger: categoriesContainerRef.current,
            start: 'top 75%',
            end: 'top 25%',
            scrub: false,
            markers: false,
          },
        }
      );

      // Animate skill badges within each category
      const skillBadges = categoriesContainerRef.current.querySelectorAll('[data-skill-badge]');
      skillBadges.forEach((badge, index) => {
        gsap.fromTo(
          badge,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: index * 0.05,
            ease: 'back.out',
            scrollTrigger: {
              trigger: categoriesContainerRef.current,
              start: 'top 75%',
              end: 'top 25%',
              scrub: false,
              markers: false,
            },
          }
        );
      });
    }

    // Animate icon cards with stagger
    if (iconsContainerRef.current) {
      const iconCards = iconsContainerRef.current.querySelectorAll('[data-icon-card]');
      gsap.fromTo(
        iconCards,
        { opacity: 0, y: 50, rotate: -5 },
        {
          opacity: 1,
          y: 0,
          rotate: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'back.out',
          scrollTrigger: {
            trigger: iconsContainerRef.current,
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
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-2xl text-gray-500 mb-4 font-light">My Skills</h2>
          <h3 ref={headingRef} className="text-6xl lg:text-7xl font-black">
            Technical Expertise
          </h3>
        </div>

        <div ref={categoriesContainerRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              data-skill-category
              className="bg-black border border-gray-800 p-8 rounded-2xl hover:border-lime-400/30 transition-all duration-300 group"
            >
              <h4 className="text-xl font-bold mb-6 text-lime-400 group-hover:text-lime-300 transition-colors duration-300">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    data-skill-badge
                    className="px-4 py-2 bg-black border border-gray-800 rounded-full text-sm hover:border-lime-400/50 transition-colors duration-300 font-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div ref={iconsContainerRef} className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-6">
          {icons.map((Icon, index) => (
            <div
              key={index}
              data-icon-card
              className="bg-black border border-gray-800 p-6 rounded-xl flex items-center justify-center hover:border-lime-400/50 transition-all duration-300 group"
            >
              <div className="p-4 bg-lime-400/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Icon size={36} className="text-lime-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}