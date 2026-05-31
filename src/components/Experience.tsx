export default function Experience() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "techindustan",
      period: "Oct 2024 — Present",
      location: "India",
      description: "Leading frontend development for production-grade applications using Next.js, React.js, TypeScript, Tailwind CSS, and Material UI, serving 50,000+ monthly active users across 3 client projects.",
      technologies: ["NEXT.JS", "REACT.JS", "TYPESCRIPT", "TAILWIND CSS", "MATERIAL UI", "APOLLO GRAPHQL", "REDUX", "ZUSTAND"],
      achievements: [
        "Leading frontend development for production-grade applications using Next.js, React.js, TypeScript, Tailwind CSS, and Material UI, serving 50,000+ monthly active users across 3 client projects",
        "Architected and maintained scalable frontend systems across multiple products, reducing code duplication by ~40% through component reusability",
        "Built and published a custom reusable npm package to share UI components and business logic across applications, improving development velocity by 30% and ensuring design consistency",
        "Owned complex features end-to-end — from requirement analysis and technical design to production deployment and monitoring",
        "Collaborated closely with backend teams to integrate RESTful APIs, authentication flows, and real-time data synchronization",
        "Optimized application performance and UX for large-scale user flows, achieving 35% faster load times and improved Core Web Vital scores (LCP < 2.5s, FID < 100ms)",
        "Established frontend best practices through code reviews, mentoring junior developers, and creating internal documentation"
      ]
    },
    {
      title: "React js Developer",
      company: "techindustan",
      period: "Sep 2022 — Feb 2025",
      location: "Sahibzada Ajit Singh Nagar, Punjab, India",
      description: "Developed and maintained e-commerce platforms and internal dashboards using React.js, serving multiple client projects across the organization.",
      technologies: ["REACT.JS", "NEXT.JS", "JAVASCRIPT", "TYPESCRIPT", "REDUX", "CONTEXT API", "REST API", "SEO", "WEB PERFORMANCE"],
      achievements: [
        "Developed and maintained e-commerce platforms and internal dashboards using React.js, serving multiple client projects across the organization",
        "Led migration of legacy applications from older React versions to React 18 and Next.js 13+, improving performance by 30% and adopting modern features like Server Components and App Router",
        "Collaborated across 10+ cross-functional teams to deliver scalable frontend solutions, ensuring consistency in code quality and development practices",
        "Built reusable UI component libraries for e-commerce features (product catalogs, shopping carts, checkout flows) and dashboard interfaces (analytics, data visualization, admin panels)",
        "Integrated RESTful APIs and managed complex state using Redux and Context API for seamless data flow across applications",
        "Implemented responsive designs and ensured cross-browser compatibility, delivering pixel-perfect UIs from Figma/design mockups",
        "Participated in code reviews, sprint planning, and agile ceremonies, contributing to technical discussions and architectural decisions",
        "Optimized application performance through code splitting, lazy loading, and efficient rendering strategies"
      ]
    },
    {
      title: "React js developer",
      company: "TechAbet",
      period: "Nov 2020 — Sep 2022",
      location: "Sahibzada Ajit Singh Nagar, Punjab, India",
      description: "Sole frontend developer responsible for building and maintaining the entire frontend application using React.js.",
      technologies: ["REACT.JS", "JAVASCRIPT", "NODE.JS", "EXPRESS", "MONGODB", "REDUX", "GIT"],
      achievements: [
        "Sole frontend developer responsible for building and maintaining the entire frontend application using React.js",
        "Took full ownership of UI architecture, component design, and application performance optimization, achieving 40% improvement in page load times",
        "Converted complex business requirements into scalable, reusable frontend solutions, reducing feature development time by ~25%",
        "Collaborated directly with founders and backend developers to ship features rapidly in an agile startup environment, delivering 30+ features in the first year",
        "Handled production deployments, critical bug fixes, and feature enhancements independently with minimal supervision",
        "Mentored and guided junior frontend developers joining the team, establishing code standards and review processes",
        "Contributed to backend development for ~1 year, gaining comprehensive understanding of full-stack architecture, RESTful APIs, data flow, and system constraints",
        "Improved frontend development speed by 30% through standardized component libraries and reusable patterns"
      ]
    }
  ];

  return (
    <section className="px-6 md:px-8 py-20 max-w-6xl mx-auto border-t border-glass-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left column - Title */}
        <div className="lg:col-span-4">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
            03 / EXPERIENCE
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground">
            MY EXPERIENCE
          </h2>
        </div>

        {/* Right column - Timeline */}
        <div className="lg:col-span-8 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="pl-8 relative group">
              {/* Timeline Line */}
              <div className="absolute left-0 top-2 bottom-0 w-[1px] bg-gradient-to-b from-[#1E293B] via-[#1E293B] to-transparent group-last:bottom-auto group-last:h-20" />
              
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-2.5 w-2.5 h-2.5 rounded-full border border-primary bg-[#020617] group-hover:scale-125 group-hover:bg-primary transition-all duration-300" />
              
              {/* Content heading */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#dae2fd] group-hover:text-primary transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-semibold font-mono text-xs uppercase tracking-wider mt-1">
                    {exp.company}
                  </p>
                  {exp.location && (
                    <p className="text-xs text-muted-foreground mt-0.5">{exp.location}</p>
                  )}
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground whitespace-nowrap bg-[#1E293B]/40 px-2.5 py-1 rounded">
                  {exp.period}
                </span>
              </div>
              
              {/* Role description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{exp.description}</p>
              
              {/* Technologies chip container */}
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="font-mono text-[8px] font-bold text-primary/80 border border-primary/20 px-2 py-0.5 rounded tracking-wider uppercase bg-primary/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Achievements bullet list */}
              {exp.achievements && (
                <ul className="space-y-2 mt-4 border-t border-[#1E293B]/60 pt-4">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-muted-foreground text-xs leading-relaxed flex items-start gap-2">
                      <span className="text-primary mt-1 flex-shrink-0 font-mono">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}