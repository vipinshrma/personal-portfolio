import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface ProjectData {
  title: string;
  subtitle: string;
  category: string;
  role: string;
  client: string;
  year: string;
  image: string;
  liveUrl: string;
  techStack: string[];
  overview: string;
  features: string[];
  challenges: {
    title: string;
    description: string;
  }[];
}

const caseStudiesData: Record<string, ProjectData> = {
  'zucora': {
    title: "Zucora Ecosystem",
    subtitle: "Comprehensive Drag-and-Drop Website Builder Platform",
    category: "Website Builder Platform",
    role: "Lead Frontend Developer",
    client: "techindustan",
    year: "2024",
    image: "/projects/zucora.png",
    liveUrl: "https://zucora.com/",
    techStack: ["Next.js", "React.js", "Redux", "Redux Toolkit", "Zustand", "Tailwind CSS", "Bambora API", "Five9 SDK"],
    overview: "Developing Zucora, a comprehensive website builder platform enabling users to create professional websites with drag-and-drop functionality. Focused on optimizing bundle size, implementing a unified component package system with centralized library architecture, and maximizing performance.",
    features: [
      "Drag-and-Drop Editor: Interactive canvas allowing absolute and grid-based layouts.",
      "Centralized Component Library: Dynamic component loading with tree-shaking support.",
      "Third-party Integrations: Native integrations with Bambora payment gateway and Five9 cloud contact center."
    ],
    challenges: [
      {
        title: "Bundle Size Optimization",
        description: "High volume of dependencies caused initial load performance lag. Solved by implementing strict tree-shaking, code-splitting, dynamic imports in Next.js, and consolidating redundant utility libraries."
      },
      {
        title: "State Management Complexity",
        description: "Managing drag-and-drop builder canvas state cleanly. Solved by implementing a hybrid state model using Zustand for real-time canvas dragging and Redux Toolkit for persistent website configurations."
      }
    ]
  },
  'hyperwolf': {
    title: "Hyperwolf Delivery",
    subtitle: "Cannabis Delivery Platform serving 400,000+ users",
    category: "E-commerce & Logistics",
    role: "Frontend Developer",
    client: "techindustan",
    year: "2022 - Present",
    image: "/projects/hyperwolf.png",
    liveUrl: "https://hyperwolf.com/",
    techStack: ["React.js", "TypeScript", "Node.js", "Redux", "Redux Toolkit", "Zustand", "Tailwind CSS", "Google Maps API"],
    overview: "Developed and maintained complete frontend for a cannabis delivery platform serving 400,000+ users across Southern California. Integrated multiple third-party services and optimized order processing workflow, achieving sub-60 minute delivery guarantee with high user satisfaction rates.",
    features: [
      "Progressive Checkout: Simplified, high-conversion purchase funnel.",
      "Live Order Tracking: Real-time visual updates on driver location and ETA using Google Maps API."
    ],
    challenges: [
      {
        title: "Order Workflow Optimization",
        description: "High drop-offs during checkout. Solved by redesigning the checkout to be a progressive single-page form with instant address autocomplete and automated delivery slot reservation."
      },
      {
        title: "Real-time Map Tracking",
        description: "Real-time driver mapping was laggy. Optimized by throttle-based state updates and lightweight SVG rendering on Google Maps API overlays."
      }
    ]
  },
  'hyperwolf-pos': {
    title: "Hyperwolf POS",
    subtitle: "Comprehensive Point of Sale (POS) System for Retailers",
    category: "Point of Sale System",
    role: "Lead Frontend Developer",
    client: "techindustan",
    year: "2023",
    image: "/projects/hyperwolf-pos.png",
    liveUrl: "https://hyperwolf.com/",
    techStack: ["Next.js", "React.js", "TypeScript", "Redux", "Zustand", "Tailwind CSS", "Blaze API", "Persona KYC", "Google Maps API"],
    overview: "Built a comprehensive Point of Sale (POS) system with role-based authentication (admin, retailer, cashier). Implemented barcode scanning and KYC ID validation for rapid checkout, reducing store checkout time by 60%.",
    features: [
      "Role-Based Dashboards: Dedicated dashboards for admins, managers, and cashiers.",
      "KYC Validation: Integrated Persona KYC for automatic age checker and ID scanning.",
      "Barcode Scanning: Rapid product entry via hardware or camera scans."
    ],
    challenges: [
      {
        title: "Barcode Scanning Latency",
        description: "Barcode scans would occasionally miss keystrokes. Implemented buffer-based keyboard listener to queue input strings and match products within milliseconds."
      },
      {
        title: "Centralized Multi-Store Inventory",
        description: "Keeping multi-store inventory in sync in real time. Solved by implementing optimistic UI updates and socket-based sync channels."
      }
    ]
  },
  'emerald-ems': {
    title: "Emerald EMS",
    subtitle: "IoT-Enabled Energy Management System Dashboard",
    category: "Energy & IoT Dashboard",
    role: "Frontend Developer",
    client: "techindustan",
    year: "2023",
    image: "/projects/emrald-planet.png",
    liveUrl: "https://www.emerald.com.au/",
    techStack: ["React.js", "Material UI", "Redux", "Redux Toolkit", "Zustand", "IoT Protocols", "Firebase"],
    overview: "Created an energy management dashboard handling data for 400,000+ users. Implemented over-the-air (OTA) update systems for IoT devices and built partner dashboards with granular team management capabilities.",
    features: [
      "IoT Device Management: Central portal for device provisioning and OTA updates.",
      "Real-time Energy Analytics: Highly interactive charts showing historical and current energy load."
    ],
    challenges: [
      {
        title: "OTA Update Reliability",
        description: "Tracking firmware updates on IoT devices. Built a real-time progress bar with automatic retry mechanisms on packet loss."
      },
      {
        title: "Massive Data Visualization",
        description: "Rendering thousands of energy consumption data points. Optimized charts using canvas-based rendering (Chart.js/Recharts) with windowed data rendering."
      }
    ]
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [
    { slug: 'zucora' },
    { slug: 'hyperwolf' },
    { slug: 'hyperwolf-pos' },
    { slug: 'emerald-ems' }
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudiesData[slug];

  if (!project) {
    return {
      title: "Project Not Found | Vipan Sharma",
    };
  }

  return {
    title: `${project.title} - Case Study | Vipan Sharma`,
    description: project.subtitle,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = caseStudiesData[slug];

  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-[#020617] text-[#dae2fd] pt-32 pb-24 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link 
          href="/work" 
          className="font-mono text-xs uppercase tracking-widest text-primary flex items-center gap-1.5 hover:gap-3 transition-all duration-300 w-fit mb-12"
        >
          &larr; Back to Selected Works
        </Link>

        {/* Header Metadata */}
        <header className="mb-12">
          <span className="font-mono text-xs font-bold text-primary border border-primary/30 px-3 py-1 rounded-full w-fit uppercase tracking-widest bg-primary/5">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground mt-6 mb-4">
            {project.title}
          </h1>
          <p className="text-muted-foreground text-md md:text-xl font-medium max-w-2xl leading-relaxed">
            {project.subtitle}
          </p>
        </header>

        {/* Project Meta Info Panel */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-[#1E293B] py-8 mb-12">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono block mb-1">Role</span>
            <span className="text-sm text-foreground font-semibold">{project.role}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono block mb-1">Client</span>
            <span className="text-sm text-foreground font-semibold">{project.client}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono block mb-1">Year</span>
            <span className="text-sm text-foreground font-semibold">{project.year}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono block mb-1">Live URL</span>
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-primary hover:underline font-semibold"
            >
              Visit Platform &nearr;
            </a>
          </div>
        </div>

        {/* Project Image Showcase */}
        <div className="aspect-video w-full overflow-hidden border border-[#1E293B] rounded-3xl mb-16 shadow-2xl relative bg-background">
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        {/* Case Study Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Project Overview</h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {project.overview}
              </p>
            </section>

            {/* Core Features */}
            <section className="border-t border-[#1E293B]/60 pt-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Core Features</h2>
              <ul className="space-y-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-mono text-xs text-primary font-bold mt-1 bg-primary/5 border border-primary/20 rounded px-1.5 py-0.5">
                      ✓
                    </span>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Challenges & Solutions */}
            <section className="border-t border-[#1E293B]/60 pt-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Challenges & Solutions</h2>
              <div className="space-y-8">
                {project.challenges.map((challenge, i) => (
                  <div key={i} className="bg-[#1E293B]/20 border border-[#1E293B] rounded-2xl p-6">
                    <h3 className="font-bold text-foreground text-md mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {challenge.title}
                    </h3>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Tech Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">
            <div className="bg-[#1E293B]/20 border border-[#1E293B] rounded-3xl p-6">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, i) => (
                  <span 
                    key={i} 
                    className="font-mono text-[9px] font-bold text-primary/80 border border-primary/20 px-2.5 py-1 rounded-md tracking-wider uppercase bg-primary/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full text-center bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-xl font-mono text-xs uppercase tracking-widest block shadow-[0_0_30px_rgba(0,240,255,0.1)] hover:shadow-[0_0_40px_rgba(0,240,255,0.25)] active:translate-y-0.5 hover:scale-[1.01] transition-all duration-300"
              >
                Visit Live Site &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
