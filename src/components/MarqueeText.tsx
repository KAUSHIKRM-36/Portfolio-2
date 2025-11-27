export default function MarqueeText() {
  const text = 'REACT • NODE.JS • PYTHON • AUTOMATION • AI/ML • FULL STACK • ';

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-lime-400 to-lime-300 py-6 transform -rotate-2 my-20">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="text-4xl md:text-5xl font-black mx-8 text-black">{text}</span>
        <span className="text-4xl md:text-5xl font-black mx-8 text-black">{text}</span>
        <span className="text-4xl md:text-5xl font-black mx-8 text-black">{text}</span>
      </div>
    </div>
  );
}
