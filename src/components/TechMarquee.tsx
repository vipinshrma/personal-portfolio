import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiVuedotjs, SiNextdotjs,
  SiMui, SiTailwindcss, SiTypescript, SiFigma
} from 'react-icons/si';

export default function TechMarquee() {
  const frontendTechnologies = [
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'React.js', icon: SiReact, color: '#61DAFB' },
    { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'Material UI', icon: SiMui, color: '#007FFF' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  ];

  return (
    <section className="py-20 bg-gray-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 mb-16">
        <h2 className="text-5xl font-bold text-center mb-4">FRONTEND TECHNOLOGIES</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto">
          The frontend technologies I use to create modern, responsive web applications
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
        
        {/* Infinite sliding marquee */}
        <div className="flex animate-marquee space-x-16">
          {/* First set */}
          {frontendTechnologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div 
                key={`first-${index}`}
                className="flex flex-col items-center space-y-3 min-w-fit flex-shrink-0"
              >
                <div 
                  className="w-16 h-16 flex items-center justify-center rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                  style={{ color: tech.color }}
                >
                  <IconComponent size={40} />
                </div>
                <span className="text-sm font-medium text-gray-300 whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            );
          })}
          
          {/* Second set for seamless loop */}
          {frontendTechnologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div 
                key={`second-${index}`}
                className="flex flex-col items-center space-y-3 min-w-fit flex-shrink-0"
              >
                <div 
                  className="w-16 h-16 flex items-center justify-center rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                  style={{ color: tech.color }}
                >
                  <IconComponent size={40} />
                </div>
                <span className="text-sm font-medium text-gray-300 whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}