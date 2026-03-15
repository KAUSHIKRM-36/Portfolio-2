import { Mail, Linkedin, Github ,Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-2xl text-gray-500 mb-4 font-light">Get in touch</h2>
          <h3 className="text-6xl lg:text-7xl font-black max-w-3xl leading-tight">
            Let's work
            <br />
            together
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              I'm always interested in hearing about new projects and opportunities. Feel free to
              reach out through any of the channels below. Let's create something amazing together!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:belikekaushik@gmail.com"
                className="flex items-center gap-4 p-4 bg-black border border-gray-800 rounded-xl hover:border-lime-400/50 transition-all duration-300 group"
              >
                <div className="p-3 bg-gray-900 rounded-lg group-hover:bg-lime-400/10 transition-colors duration-300">
                  <Mail className="text-lime-400 group-hover:scale-110 transition-transform duration-300" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-light">Email</div>
                  <div className="font-medium text-white">belikekaushik@gmail.com</div>
                </div>
              </a>
            </div>

            <div className="space-y-4 pt-8 border-t border-gray-800">
              <h4 className="text-sm text-gray-500 font-light">Social links</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/kaushik-rm-a277aa264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-black border border-gray-800 rounded-xl hover:border-lime-400/50 transition-all duration-300 group"
                >
                  <Linkedin className="text-gray-400 group-hover:text-lime-400 transition-colors duration-300" size={24} />
                </a>
                <a
                  href="https://github.com/KAUSHIKRM-36"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-black border border-gray-800 rounded-xl hover:border-lime-400/50 transition-all duration-300 group"
                >
                  <Github className="text-gray-400 group-hover:text-lime-400 transition-colors duration-300" size={24} />
                </a>
                <a
                    href="https://www.instagram.com/_.kaushik._06"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-black border border-gray-800 rounded-xl hover:border-lime-400/50 transition-all duration-300 group"
                >
                <Instagram className="text-gray-400 group-hover:text-lime-400 transition-colors duration-300" size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-black border border-gray-800 p-8 rounded-2xl hover:border-lime-400/30 transition-colors duration-300">
              <h4 className="text-2xl font-bold mb-4">Get in Touch</h4>
              <p className="text-gray-400 font-light leading-relaxed mb-6">
                Have a project in mind or want to collaborate? Drop me an email and I'll get back to
                you as soon as possible.
              </p>
              <a
                href="mailto:belikekaushik@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-lime-400 text-black rounded-full font-bold hover:bg-lime-300 transition-all duration-300"
              >
                Just an Email away  
              </a>
            </div>

            <div className="bg-black border border-gray-800 p-8 rounded-2xl hover:border-lime-400/30 transition-colors duration-300">
              <h4 className="text-2xl font-bold mb-4">Follow Me</h4>
              <p className="text-gray-400 font-light leading-relaxed mb-6">
                Check out my latest projects and updates on GitHub and LinkedIn.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/KAUSHIKRM-36"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-gray-700 rounded-full font-medium hover:border-lime-400 hover:text-lime-400 transition-all duration-300"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/kaushik-rm-a277aa264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-gray-700 rounded-full font-medium hover:border-lime-400 hover:text-lime-400 transition-all duration-300"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-20 pt-8 border-t border-gray-800">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="text-gray-500 text-sm font-light">
              © Kaushik Mahajan. All rights reserved 2025
            </div>
            <div className="flex gap-6 text-sm text-gray-500 font-light">
              <a href="#home" className="hover:text-white transition-colors duration-300">
                Home
              </a>
              <a href="#about" className="hover:text-white transition-colors duration-300">
                About
              </a>
              <a href="#projects" className="hover:text-white transition-colors duration-300">
                Projects
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}