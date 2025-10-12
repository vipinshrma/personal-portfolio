import ProjectCard from './ProjectCard';

const projects = [
  {
    category: "Website Builder Platform",
    title: "Zucora - Comprehensive Website Builder",
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
    buttons: {
      primary: {
        text: "LIVE DEMO",
        href: "https://zucora.com/"
      },
      secondary: {
        text: "SEE ON GITHUB",
        href: "https://github.com/vipinshrma"
      }
    }
  },
  {
    category: "E-commerce Platform",
    title: "Hyperwolf - Cannabis Delivery Platform",
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
    buttons: {
      primary: {
        text: "VIEW PLATFORM",
        href: "#"
      },
      secondary: {
        text: "SEE ON GITHUB",
        href: "https://github.com/vipinshrma"
      }
    }
  },
  {
    category: "Point of Sale System",
    title: "Hyperwolf POS - Comprehensive Point of Sale",
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
    buttons: {
      primary: {
        text: "VIEW PROJECT",
        href: "#"
      },
      secondary: {
        text: "SEE ON GITHUB",
        href: "https://github.com/vipinshrma"
      }
    }
  },
  {
    category: "Energy Management System",
    title: "Emerald EMS - IoT Energy Dashboard",
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
    buttons: {
      primary: {
        text: "VIEW DASHBOARD",
        href: "#"
      },
      secondary: {
        text: "SEE ON GITHUB",
        href: "https://github.com/vipinshrma"
      }
    }
  }
];

export default function FeaturedProjects() {
  return (
    <section className="px-8 py-20 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold mb-4 text-center">FEATURED PROJECTS</h2>
      <p className="text-gray-400 mb-16 max-w-2xl mx-auto text-center">
        Here are some of the selected projects that showcase my passion for 
        front-end development.
      </p>

      <div className="space-y-16">
          {projects.map((project, index) => (
          <ProjectCard
            key={index}
            category={project.category}
            title={project.title}
            description={project.description}
            projectInfo={project.projectInfo}
            mockupContent={project.mockupContent}
            buttons={project.buttons}
          />
        ))}
      </div>
    </section>
  );
}