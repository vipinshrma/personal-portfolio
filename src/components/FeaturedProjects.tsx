import ProjectCard from './ProjectCard';

const projects = [
  {
    category: "Website Builder Platform",
    title: "Zucora Ecosystem",
    image: '/projects/zucora.png',
    description: "Currently developing a comprehensive website builder platform enabling users to create professional websites with drag-and-drop functionality. Built a unified component package system with centralized library architecture, implementing tree-shaking and efficient bundling strategies for optimal performance.",
    projectInfo: {
      year: "2024",
      role: "Frontend Developer",
      client: "techindustan"
    },
    mockupContent: {
      background: "bg-gradient-to-br from-blue-600 to-purple-600",
      title: "ZUCORA",
      subtitle: "WEBSITE BUILDER"
    },
    technologies: ["NEXT.JS", "REACT JS", "BAMBORA", "FIVE9", "REDUX", "REDUX TOOLKIT", "ZUSTAND"],
    buttons: {
      primary: {
        text: "EXPLORE CASE STUDY",
        href: "/work/zucora"
      }
    }
  },
  {
    category: "E-commerce Platform",
    title: "Hyperwolf - Cannabis Delivery Platform",
    image: '/projects/hyperwolf.png',
    description: "Developed and maintained complete frontend for cannabis delivery platform serving 400,000+ users across Southern California. Integrated multiple third-party services and optimized order processing workflow, achieving sub-60 minute delivery guarantee with high user satisfaction rates.",
    projectInfo: {
      year: "2022-Present",
      role: "Frontend Developer",
      client: "techindustan"
    },
    mockupContent: {
      background: "bg-gradient-to-br from-green-600 to-emerald-700",
      title: "HYPERWOLF",
      subtitle: "DELIVERY PLATFORM"
    },
    technologies: ["REACT JS", "TYPESCRIPT", "NODE.JS", "REDUX", "REDUX TOOLKIT", "ZUSTAND"],
    buttons: {
      primary: {
        text: "EXPLORE CASE STUDY",
        href: "/work/hyperwolf"
      }
    }
  },
  {
    category: "Point of Sale System",
    title: "Hyperwolf POS - Comprehensive Point of Sale",
    image: '/projects/hyperwolf-pos.png',
    description: "Built comprehensive Point of Sale system with role-based authentication (admin, retailer, cashier). Implemented barcode and ID scanning functionality for rapid product entry and checkout. Designed multi-retailer management system supporting centralized inventory across multiple stores, reducing checkout time by 60%.",
    projectInfo: {
      year: "2023",
      role: "Frontend Developer",
      client: "techindustan"
    },
    mockupContent: {
      background: "bg-gradient-to-br from-orange-600 to-red-600",
      title: "HYPERWOLF POS",
      subtitle: "POINT OF SALE"
    },
    technologies: ["NEXT.JS", "REACT JS", "TYPESCRIPT", "SEO", "WEB PERFORMANCE", "BLAZEPAY", "FHL", "PERSONA", "GOOGLE MAPS API", "BLAZE", "REDUX", "REDUX TOOLKIT", "ZUSTAND"],
    buttons: {
      primary: {
        text: "EXPLORE CASE STUDY",
        href: "/work/hyperwolf-pos"
      }
    }
  },
  {
    category: "Energy Management System",
    title: "Emerald EMS - IoT Energy Dashboard",
    image: '/projects/emrald-planet.png',
    description: "Created energy management dashboard handling data for 400,000+ users. Implemented over-the-air (OTA) update system for IoT device management. Developed personalized partner dashboard with team management capabilities and built modular architecture supporting multiple utility management functions.",
    projectInfo: {
      year: "2023",
      role: "Frontend Developer",
      client: "techindustan"
    },
    mockupContent: {
      background: "bg-gradient-to-br from-teal-600 to-cyan-600",
      title: "EMERALD EMS",
      subtitle: "ENERGY MANAGEMENT"
    },
    technologies: ["REACT JS", "MATERIAL UI", "REDUX", "REDUX TOOLKIT", "ZUSTAND"],
    buttons: {
      primary: {
        text: "EXPLORE CASE STUDY",
        href: "/work/emerald-ems"
      }
    }
  }
];

interface FeaturedProjectsProps {
  isHeaderH1?: boolean;
}

export default function FeaturedProjects({ isHeaderH1 = false }: FeaturedProjectsProps) {
  return (
    <section id="work" className="px-6 md:px-8 py-24 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
        <div>
          <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-primary mb-2">
            SELECTED WORKS
          </h2>
          {isHeaderH1 ? (
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground">
              Digital Experiences & Performance Architecture
            </h1>
          ) : (
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground">
              Digital Experiences & Performance Architecture
            </h3>
          )}
        </div>
      </div>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            category={project.category}
            title={project.title}
            description={project.description}
            projectInfo={project.projectInfo}
            mockupContent={project.mockupContent}
            buttons={project.buttons}
            image={project.image}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
}