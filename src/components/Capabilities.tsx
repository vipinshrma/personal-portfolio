import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiVuedotjs, SiNextdotjs, SiNodedotjs,
  SiGraphql, SiMui, SiTailwindcss, SiDocker, SiKubernetes,
  SiMongodb, SiExpress, SiPrisma, SiSupabase, SiGithub, SiGit,
  SiFigma, SiTypescript
} from 'react-icons/si';
import { FaCode, FaLock, FaTasks, FaServer } from 'react-icons/fa';

export default function Capabilities() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML', icon: SiHtml5 },
        { name: 'CSS', icon: SiCss3 },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'React.js', icon: SiReact },
        { name: 'Vue.js', icon: SiVuedotjs },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'HTML5', icon: SiHtml5 },
        { name: 'Node.js', icon: SiNodedotjs }
      ]
    },
    {
      title: 'API Development', 
      skills: [
        { name: 'GraphQL', icon: SiGraphql },
        { name: 'Rest API', icon: FaServer }
      ]
    },
    {
      title: 'UI Frameworks',
      skills: [
        { name: 'Material UI', icon: SiMui },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'shadcn', icon: FaCode },
        { name: 'Next UI', icon: SiNextdotjs },
        { name: 'Aceternity UI', icon: FaCode }
      ]
    },
    {
      title: 'Containerization',
      skills: [
        { name: 'Docker', icon: SiDocker },
        { name: 'Kubernetes', icon: SiKubernetes }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'Node JS', icon: SiNodedotjs },
        { name: 'Express', icon: SiExpress },
        { name: 'Middleware', icon: FaServer },
        { name: 'JWT', icon: FaLock },
        { name: 'Prisma', icon: SiPrisma },
        { name: 'appwrite', icon: FaServer },
        { name: 'Neon DB', icon: FaServer },
        { name: 'Supabase', icon: SiSupabase }
      ]
    },
    {
      title: 'Version Control',
      skills: [
        { name: 'Github', icon: SiGithub },
        { name: 'Git', icon: SiGit }
      ]
    },
    {
      title: 'Project Management',
      skills: [
        { name: 'Agile', icon: FaTasks },
        { name: 'Scrum', icon: FaTasks }
      ]
    },
    {
      title: 'Authentication',
      skills: [
        { name: 'Clerk', icon: FaLock },
        { name: 'Convex', icon: FaLock },
        { name: 'appwrite', icon: FaLock },
        { name: 'Persona', icon: FaLock },
        { name: 'Age Checker', icon: FaLock }
      ]
    }
  ];

  return (
    <section className="px-8 py-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-5xl font-bold mb-8">MY CAPABILITIES</h2>
        </div>
        <div>
          <p className="text-gray-400 mb-8 leading-relaxed">
            I am always looking to add more skills and expand my expertise across modern 
            web technologies. From frontend frameworks to backend services, I work with a 
            comprehensive tech stack to build scalable and efficient applications.
          </p>
          
          <div className="space-y-6">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-sm font-semibold text-[#CCFF00] mb-3 uppercase tracking-wider">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    return (
                      <span
                        key={skillIndex}
                        className="bg-gray-800 text-white px-3 py-1.5 rounded-full border border-gray-600 hover:border-[#CCFF00] transition-colors text-xs font-medium flex items-center gap-1.5"
                      >
                        <IconComponent className="w-3 h-3" />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}