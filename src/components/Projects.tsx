import { ExternalLink, Github, Smartphone, Settings, Home } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'AI Career Coach',
      description:
        'Built an AI-driven coaching platform with resume feedback, job recommendations, and interactive dashboards. Features modular architecture, fallback parsing, and seamless API orchestration.',
      tags: ['React', 'Node.js', 'Gemini API', 'AI/ML'],
      icon: Smartphone,
      gradient: 'from-lime-400 to-green-500',
    },
    {
      title: 'XML Automation Tool',
      description:
        'Automated XML parsing and database validation system. Implemented PK auto-insertion, keyword filtering, and robust error-handling. Improved efficiency by 33%.',
      tags: ['Python', 'MySQL', 'Automation'],
      icon: Settings,
      gradient: 'from-lime-400 to-yellow-400',
    },
    {
      title: 'Real Advisor',
      description:
        'Developed a comprehensive real estate advisory platform with property listings, market analysis, and user authentication. Built with modern web technologies for optimal performance.',
      tags: ['React', 'Node.js', 'MySQL', 'API'],
      icon: Home,
      gradient: 'from-lime-400 to-teal-400',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16 flex-wrap gap-4">
          <div>
            <h2 className="text-2xl text-gray-500 mb-4 font-light">Portfolio</h2>
            <h3 className="text-6xl lg:text-7xl font-black">
              Selected works
              <br />
              <span className="text-gray-700 font-light">2023-2025</span>
            </h3>
          </div>
          <button className="px-6 py-3 border-2 border-gray-700 rounded-full font-medium hover:border-lime-400 hover:text-lime-400 transition-colors duration-300">
            See More →
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group relative bg-black rounded-2xl overflow-hidden border border-gray-800 hover:border-lime-400/30 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon with background like services section */}
                  <div className="p-4 bg-lime-400/10 rounded-xl mb-6 w-max group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-lime-400" size={32} />
                  </div>

                  <h4 className="text-2xl font-bold mb-3">{project.title}</h4>
                  <p className="text-gray-400 mb-6 flex-grow font-light">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-black border border-gray-800 rounded-full text-xs text-gray-400 hover:border-lime-400/50 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-lime-400 transition-colors duration-300">
                      <ExternalLink size={16} />
                      View
                    </button>
                    <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-lime-400 transition-colors duration-300">
                      <Github size={16} />
                      Code
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
