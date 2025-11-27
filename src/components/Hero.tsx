import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <div className="order-2 lg:order-1 relative">
          <div className="relative w-full aspect-square max-w-md mx-auto lg:max-w-none">
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <img
                src="https://i.postimg.cc/cLrmj1Qx/88899.png"
                alt="Kaushik Mahajan"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 from-black/40 via-lime-400/30 to-transparent" />
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-8">
          <div className="space-y-6">
            <h1 className="text-7xl lg:text-8xl font-black leading-none tracking-tight">
              Kaushik
              <br />
              Mahajan
            </h1>
            <p className="text-gray-400 text-lg max-w-lg font-light leading-relaxed">
              Computer Science Engineering student passionate about building scalable,
              impactful software solutions using modern technologies.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-lime-400 text-black rounded-full font-bold hover:bg-lime-300 transition-all duration-300"
            >
              View Projects
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-gray-700 rounded-full font-medium hover:border-gray-500 transition-colors duration-300"
            >
              Contact Me
            </button>
          </div>

          <div className="flex gap-12 pt-8 border-t border-gray-800">
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
