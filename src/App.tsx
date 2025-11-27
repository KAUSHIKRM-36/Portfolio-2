import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import MarqueeText from './components/MarqueeText';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <MarqueeText />
      <Experience />
      <Services />
      <Projects />
      <MarqueeText />
      <Contact />
    </div>
  );
}

export default App;
