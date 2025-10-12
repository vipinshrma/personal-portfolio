import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs,
  SiGraphql, SiMui, SiTailwindcss, SiDocker,
  SiMongodb, SiExpress, SiPrisma, SiSupabase, SiGithub, SiGit,
  SiTypescript
} from 'react-icons/si';
import { FaCode, FaLock, FaServer } from 'react-icons/fa';
import { Marquee, MarqueeContent, MarqueeItem } from './ui/marquee';

export default function TechCategories() {
  const techCategories = [
    {
      title: 'Frontend Development',
      technologies: [
        { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'React.js', icon: SiReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      ]
    },
    {
      title: 'UI Frameworks & Design',
      technologies: [
        { name: 'Material UI', icon: SiMui, color: '#007FFF' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'shadcn/ui', icon: FaCode, color: '#000000' },
      ]
    },
    {
      title: 'Backend & Database',
      technologies: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Express.js', icon: SiExpress, color: '#000000' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
        { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
        { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
        { name: 'Appwrite', icon: FaServer, color: '#FD366E' },
        { name: 'Neon DB', icon: FaServer, color: '#00E599' },
      ]
    },
    {
      title: 'DevOps & Authentication',
      technologies: [
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'GitHub', icon: SiGithub, color: '#181717' },
        { name: 'Clerk', icon: FaLock, color: '#6C47FF' },
        { name: 'JWT', icon: FaLock, color: '#000000' },
        { name: 'Persona', icon: FaLock, color: '#4285F4' },
      ]
    }
  ];

  return (
    <section className="px-4 md:px-8 py-20 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">TECHNOLOGIES & SKILLS</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A comprehensive overview of the modern technologies and tools I work with to create scalable applications
        </p>
      </div>

      <div className="space-y-16">
        {techCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="relative">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#CCFF00] mb-2">{category.title}</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-[#CCFF00] to-transparent rounded-full"></div>
            </div>
            
            {/* Shadcn Marquee */}
            <Marquee>
              <MarqueeContent speed={40} pauseOnHover>
                {category.technologies.map((tech, techIndex) => {
                  const IconComponent = tech.icon;
                  return (
                    <MarqueeItem 
                      key={`${categoryIndex}-${techIndex}`}
                      className="flex flex-col items-center space-y-3 mx-3 md:mx-6 group"
                    >
                      <div 
                        className="w-16 md:w-20 h-16 md:h-20 flex items-center justify-center rounded-2xl bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 group-hover:scale-110 border border-gray-700 hover:border-gray-500"
                        style={{ 
                          boxShadow: `0 0 20px ${tech.color}20`
                        }}
                      >
                        <IconComponent 
                          size={28} 
                          style={{ color: tech.color }} 
                          className="transition-transform duration-300 group-hover:scale-110 md:text-4xl"
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-300 whitespace-nowrap group-hover:text-white transition-colors">
                        {tech.name}
                      </span>
                    </MarqueeItem>
                  );
                })}
              </MarqueeContent>
            </Marquee>
          </div>
        ))}
      </div>
    </section>
  );
}