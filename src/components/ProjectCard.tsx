interface ProjectCardProps {
  category?: string;
  title: string;
  description: string;
  image:string;
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
}

export default function ProjectCard({ 
  category, 
  title, 
  description, 
  projectInfo, 
  mockupContent, 
  buttons ,
  image
}: ProjectCardProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="bg-muted rounded-lg p-4">
        <div className="rounded-lg h-64 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div>
        {category && (
          <p className="text-muted-foreground text-sm mb-2">{category}</p>
        )}
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        
        <div className="space-y-4 mb-6">
          <div className="flex justify-between">
            <span className="text-muted-foreground font-medium">PROJECT INFO</span>
          </div>
          {projectInfo.client && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Client</span>
              <span>{projectInfo.client}</span>
            </div>
          )}
          {projectInfo.year && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Year</span>
              <span>{projectInfo.year}</span>
            </div>
          )}
          {projectInfo.role && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Role</span>
              <span>{projectInfo.role}</span>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          {buttons.primary && (
            <a 
              href={buttons.primary.href}
              className="text-primary font-medium flex items-center justify-center sm:justify-start gap-2 hover:text-primary/80 transition-colors"
            >
              {buttons.primary.text} <span>→</span>
            </a>
          )}
          {buttons.secondary && (
            <a 
              href={buttons.secondary.href}
              className="text-primary font-medium flex items-center justify-center sm:justify-start gap-2 hover:text-primary/80 transition-colors"
            >
              {buttons.secondary.text} <span>↗</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}