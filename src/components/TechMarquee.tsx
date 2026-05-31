import { 
  SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiTypescript
} from 'react-icons/si';
import { Marquee, MarqueeContent, MarqueeItem } from './ui/marquee';

export default function TechMarquee() {
  const frontendTechnologies = [
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'React.js', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  ];

  return (
    <section id="technologies" className="py-20 bg-glass-bg border-y border-glass-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-primary mb-2 text-center">
          01 / TECHNICAL TOOLKIT
        </h2>
        <h3 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-center text-foreground">
          CORE FRONTEND TECH
        </h3>
      </div>

      <div className="relative py-4">
        {/* Left & Right gradient blurs for infinite scroll look */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#101829] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#101829] to-transparent z-10 pointer-events-none" />

        <Marquee>
          <MarqueeContent speed={30} pauseOnHover>
            {frontendTechnologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <MarqueeItem
                  key={index}
                  className="mx-4"
                >
                  <div 
                    className="glass-card px-6 py-3.5 rounded-full flex items-center gap-3 border border-glass-border shadow-md hover:border-primary/50 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all duration-300 group cursor-default"
                  >
                    <IconComponent 
                      size={20} 
                      className="transition-transform duration-300 group-hover:rotate-12"
                      style={{ color: tech.color }} 
                    />
                    <span className="font-mono text-xs uppercase tracking-widest text-[#dae2fd]">
                      {tech.name}
                    </span>
                  </div>
                </MarqueeItem>
              );
            })}
          </MarqueeContent>
        </Marquee>
      </div>
    </section>
  );
}