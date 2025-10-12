import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

interface ProjectCard3DProps {
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

export default function ProjectCard3D({
  category,
  title,
  description,
  projectInfo,
  mockupContent,
  buttons,
}: ProjectCard3DProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        {category && (
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {category}
          </CardItem>
        )}
        
        <CardItem
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {title}
        </CardItem>
        
        <CardItem translateZ="100" className="w-full mt-4">
          {/* Device mockup frame */}
          <div className="relative">
            {/* Device frame */}
            <div className="bg-gray-800 rounded-2xl p-3 shadow-xl">
              {/* Screen area */}
              <div className={`${mockupContent.background} rounded-xl h-48 w-full relative overflow-hidden`}>
                <div className={`text-center ${mockupContent.textColor || 'text-white'} absolute inset-0 flex flex-col items-center justify-center z-10`}>
                  <h4 className="text-xl font-bold mb-1">{mockupContent.title}</h4>
                  {mockupContent.subtitle && (
                    <p className="text-xs uppercase tracking-wider">{mockupContent.subtitle}</p>
                  )}
                </div>
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-black/10 rounded-xl"></div>
              </div>
              {/* Device bottom area */}
              <div className="h-2 bg-gray-200 rounded-b-xl mt-1"></div>
            </div>
          </div>
        </CardItem>
        
        <CardItem
          translateZ="50"
          className="text-neutral-700 dark:text-neutral-300 text-sm mt-4"
        >
          {description}
        </CardItem>

        <div className="mt-6 space-y-3">
          <CardItem translateZ="40" className="text-xs text-gray-500 uppercase tracking-wider">
            PROJECT INFO
          </CardItem>
          
          {projectInfo.client && (
            <CardItem translateZ="30" className="flex justify-between text-sm">
              <span className="text-gray-400">Client</span>
              <span className="text-white">{projectInfo.client}</span>
            </CardItem>
          )}
          
          {projectInfo.year && (
            <CardItem translateZ="30" className="flex justify-between text-sm">
              <span className="text-gray-400">Year</span>
              <span className="text-white">{projectInfo.year}</span>
            </CardItem>
          )}
          
          {projectInfo.role && (
            <CardItem translateZ="30" className="flex justify-between text-sm">
              <span className="text-gray-400">Role</span>
              <span className="text-white">{projectInfo.role}</span>
            </CardItem>
          )}
        </div>

        <div className="flex justify-between items-center mt-8">
          {buttons.primary && (
            <CardItem
              translateZ={20}
              as="a"
              href={buttons.primary.href}
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              <span className="text-[#CCFF00] font-medium flex items-center gap-2 hover:text-white transition-colors">
                {buttons.primary.text} <span>→</span>
              </span>
            </CardItem>
          )}
          
          {buttons.secondary && (
            <CardItem
              translateZ={20}
              as="a"
              href={buttons.secondary.href}
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              <span className="text-[#CCFF00] font-medium flex items-center gap-2 hover:text-white transition-colors">
                {buttons.secondary.text} <span>↗</span>
              </span>
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
}