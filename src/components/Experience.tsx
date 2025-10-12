export default function Experience() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Mohali",
      period: "Sep 2022 — Present",
      location: "techindustan, India",
      description: "Lead frontend architecture decisions and establish coding standards for development team. Architect and develop responsive web applications using React.js, Next.js, and modern UI frameworks.",
      achievements: [
        "Technical Leadership: Lead frontend architecture decisions and establish coding standards for development team",
        "Application Development: Architect and develop responsive web applications using React.js, Next.js, and modern UI frameworks",
        "Performance Optimization: Implement performance enhancements resulting in improved user experience and faster load times",
        "Cross-functional Collaboration: Partner with design, backend, and product teams to deliver feature-complete applications",
        "Team Development: Conduct code reviews and mentor 3+ junior developers, improving team code quality and knowledge sharing"
      ]
    },
    {
      title: "React Js Developer",
      company: "Mohali",
      period: "Nov 2020 — Sep 2022",
      location: "TechAbet, India",
      description: "Managed complete frontend development lifecycle for company web applications. Contributed to backend development for 12 months, gaining valuable server-side experience.",
      achievements: [
        "Frontend Development: Managed complete frontend development lifecycle for company web applications",
        "Full-Stack Contribution: Contributed to backend development for 12 months, gaining valuable server-side experience",
        "Team Leadership: Guided and trained 2+ new frontend developers, providing technical mentorship and project support",
        "Project Management: Successfully delivered multiple projects independently while maintaining code quality standards"
      ]
    }
  ];

  return (
    <section className="px-8 py-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-5xl font-bold mb-8">MY EXPERIENCE</h2>
        </div>
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-gray-700 pl-8 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-[#CCFF00] rounded-full"></div>
              
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <p className="text-[#CCFF00] font-medium mb-1">{exp.company}</p>
                  {exp.location && (
                    <p className="text-sm text-gray-500">{exp.location}</p>
                  )}
                </div>
                <span className="text-sm text-gray-400 whitespace-nowrap mt-2 lg:mt-0 lg:ml-4">{exp.period}</span>
              </div>
              
              <p className="text-gray-400 leading-relaxed mb-4">{exp.description}</p>
              
              {exp.achievements && (
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-gray-400 text-sm leading-relaxed flex items-start">
                      <span className="text-[#CCFF00] mr-2 mt-1 flex-shrink-0">•</span>
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