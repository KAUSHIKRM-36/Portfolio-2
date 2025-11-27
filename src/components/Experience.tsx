import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-2xl text-gray-500 mb-4 font-light">Experience</h2>
          <h3 className="text-6xl lg:text-7xl font-black">Professional Journey</h3>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lime-400 to-lime-400 hidden md:block" />

          <div className="space-y-12">
            <div className="relative pl-0 md:pl-24">
              <div className="absolute left-5 top-8 w-6 h-6 bg-lime-400 rounded-full border-4 border-black hidden md:block" />

              <div className="bg-black border border-gray-800 p-8 rounded-2xl hover:border-lime-400/30 transition-all duration-300">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-lime-400/10 rounded-lg">
                      <Briefcase className="text-lime-400" size={24} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold">Software Development Intern</h4>
                      <p className="text-gray-400 font-light">Aurigo Software Technologies</p>
                    </div>
                  </div>
                  <span className="px-4 py-2 bg-lime-400/10 text-lime-400 rounded-full text-sm font-medium">
                    Jul 2025 - Nov 2025
                  </span>
                </div>

                <ul className="space-y-3 text-gray-400 font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-lime-400 mt-1 font-bold">•</span>
                    <span>
                      Built XML automation tools using Python & MySQL to streamline data processing
                      and validation workflows.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lime-400 mt-1 font-bold">•</span>
                    <span>
                      Developed custom reporting pipelines that improved data accuracy and reduced
                      manual intervention.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lime-400 mt-1 font-bold">•</span>
                    <span>
                      Refactored Masterworks SaaS platform modules to enhance performance and
                      maintainability.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lime-400 mt-1 font-bold">•</span>
                    <span>
                      Collaborated with cross-functional teams to deliver high-quality solutions
                      within tight deadlines.
                    </span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 mt-6">
                  {['Python', 'MySQL', 'XML', 'Automation', 'SaaS'].map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-black border border-gray-800 rounded-full text-xs text-gray-400 hover:border-lime-400/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
