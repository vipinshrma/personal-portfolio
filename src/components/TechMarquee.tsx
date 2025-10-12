import { 
  SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiTypescript
} from 'react-icons/si';
import { Marquee, MarqueeContent, MarqueeItem } from './ui/marquee';

export default function TechMarquee() {
  const frontendTechnologies = [
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'React.js', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  ];

  return (
    <section className="py-20 bg-gray-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 mb-16">
        <h2 className="text-5xl font-bold text-center mb-4">FRONTEND TECHNOLOGIES</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto">
          The frontend technologies I use to create modern, responsive web applications
        </p>
      </div>

      <Marquee >
        <MarqueeContent speed={50} pauseOnHover>
          {frontendTechnologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <MarqueeItem
                key={index}
                className="flex flex-col items-center space-y-3 mx-8"
              >
                <div 
                  className="w-16 h-16 flex items-center justify-center rounded-lg  hover:bg-gray-700 "
                  style={{ color: tech.color }}
                >
                  <IconComponent size={40} />
                </div>
                <span className="text-sm font-medium text-gray-300 whitespace-nowrap">
                  {tech.name}
                </span>
              </MarqueeItem>
            );
          })}
        </MarqueeContent>
      </Marquee>
    </section>
  );
}