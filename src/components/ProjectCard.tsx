interface ProjectCardProps {
  category?: string;
  title: string;
  description: string;
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
  buttons 
}: ProjectCardProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="bg-gray-900 rounded-lg p-4">
        <div className={`${mockupContent.background} rounded-lg h-64 flex items-center justify-center`}>
          <div className={`text-center ${mockupContent.textColor || 'text-white'}`}>
            <h4 className="text-2xl font-bold mb-2">{mockupContent.title}</h4>
            {mockupContent.subtitle && (
              <p className="text-sm">{mockupContent.subtitle}</p>
            )}
          </div>
        </div>
      </div>
      <div>
        {category && (
          <p className="text-gray-500 text-sm mb-2">{category}</p>
        )}
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        
        <div className="space-y-4 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-500">PROJECT INFO</span>
          </div>
          {projectInfo.client && (
            <div className="flex justify-between">
              <span className="text-gray-400">Client</span>
              <span>{projectInfo.client}</span>
            </div>
          )}
          {projectInfo.year && (
            <div className="flex justify-between">
              <span className="text-gray-400">Year</span>
              <span>{projectInfo.year}</span>
            </div>
          )}
          {projectInfo.role && (
            <div className="flex justify-between">
              <span className="text-gray-400">Role</span>
              <span>{projectInfo.role}</span>
            </div>
          )}
        </div>

        <div className="flex gap-4">
          {buttons.primary && (
            <a 
              href={buttons.primary.href}
              className="text-[#CCFF00] font-medium flex items-center gap-2 hover:text-white transition-colors"
            >
              {buttons.primary.text} <span>→</span>
            </a>
          )}
          {buttons.secondary && (
            <a 
              href={buttons.secondary.href}
              className="text-[#CCFF00] font-medium flex items-center gap-2 hover:text-white transition-colors"
            >
              {buttons.secondary.text} <span>↗</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}