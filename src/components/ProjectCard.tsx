import Image from 'next/image';

interface ProjectCardProps {
  index: number;
  category?: string;
  title: string;
  description: string;
  image: string;
  projectInfo: {
    year?: string;
    role?: string;
    client?: string;
  };
  mockupContent: {
    background: string;
    title: string;
    subtitle?: string;
    textColor?: string;
  };
  buttons: {
    primary?: {
      text: string;
      href: string;
    };
    secondary?: {
      text: string;
      href: string;
    };
  };
  technologies: string[];
}

export default function ProjectCard({ 
  index,
  title, 
  description, 
  projectInfo, 
  buttons,
  image,
  technologies
}: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center group">
      {/* Project Image Showcase */}
      <div className={`lg:col-span-7 w-full order-1 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="aspect-video w-full overflow-hidden border border-[#1E293B] group-hover:border-primary/40 rounded-xl transition-all duration-500 bg-background relative shadow-2xl">
          <Image 
            src={image} 
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Project Details */}
      <div className={`lg:col-span-5 flex flex-col gap-6 order-2 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
        {/* Technology Badges */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <span 
              key={i} 
              className="font-mono text-[9px] font-bold text-primary/80 border border-primary/20 px-2.5 py-1 rounded-md tracking-wider uppercase bg-primary/5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-3xl font-extrabold text-[#dae2fd] font-sans tracking-tight group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>

        {/* Client & Role Table */}
        <div className="flex flex-wrap gap-x-8 gap-y-4 border-t border-[#1E293B] pt-4 mt-2">
          {projectInfo.client && (
            <div className="flex flex-col gap-1">
              <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-mono">Client</span>
              <span className="text-xs text-[#dae2fd] font-semibold">{projectInfo.client}</span>
            </div>
          )}
          {projectInfo.year && (
            <div className="flex flex-col gap-1">
              <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-mono">Year</span>
              <span className="text-xs text-[#dae2fd] font-semibold">{projectInfo.year}</span>
            </div>
          )}
          {projectInfo.role && (
            <div className="flex flex-col gap-1">
              <span className="text-[9px] uppercase tracking-widest text-primary/80 font-mono">Role</span>
              <span className="text-xs text-[#dae2fd] font-semibold">{projectInfo.role}</span>
            </div>
          )}
        </div>

        {/* Action Link */}
        {buttons.primary && (
          <a 
            href={buttons.primary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest text-primary border-b border-primary w-fit pb-1 hover:text-foreground hover:border-foreground transition-colors mt-2"
          >
            {buttons.primary.text} &rarr;
          </a>
        )}
      </div>
    </div>
  );
}