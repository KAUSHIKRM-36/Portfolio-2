import { Code, Cpu, Server, Database, Atom } from 'lucide-react';

export default function Skills() {
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
      skills: ['MySQL' ,'PostgreSQL'],
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

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-2xl text-gray-500 mb-4 font-light">My Skills</h2>
          <h3 className="text-6xl lg:text-7xl font-black">Technical Expertise</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-black border border-gray-800 p-8 rounded-2xl hover:border-lime-400/30 transition-all duration-300 group"
            >
              <h4 className="text-xl font-bold mb-6 text-lime-400 group-hover:text-lime-300 transition-colors duration-300">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-black border border-gray-800 rounded-full text-sm hover:border-lime-400/50 transition-colors duration-300 font-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-6">
            {icons.map((Icon, index) => (
                <div
                key={index}
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
