import Link from 'next/link';

export default function AboutMe() {
  return (
    <section id="about" className="px-6 md:px-8 py-24 max-w-6xl mx-auto border-t border-glass-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-4">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-primary mb-2">
            03 / ABOUT ME
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground">
            MY JOURNEY
          </h3>
        </div>
        <div className="lg:col-span-8 flex flex-col items-start">
          <h4 className="text-xl md:text-2xl font-extrabold mb-6 text-[#dae2fd] leading-snug">
            I am a front-end developer based in India with a BSC IT background.
          </h4>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-md mb-8">
            I specialize in building accessible, high-performance, and user-friendly web interfaces. 
            I am deeply curious about solving complex design problems and ensuring codebase sustainability. 
            When I'm not coding, you can find me hitting the gym or playing Call of Duty.
          </p>
          <Link 
            href="/about" 
            className="border border-[#1E293B] bg-glass-bg text-[#dae2fd] font-semibold px-6 py-3.5 rounded-xl font-mono text-xs uppercase tracking-widest hover:bg-[#334155] active:translate-y-0.5 transition-all duration-300"
          >
            MORE ABOUT ME
          </Link>
        </div>
      </div>
    </section>
  );
}