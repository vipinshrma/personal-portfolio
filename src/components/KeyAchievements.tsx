import Image from 'next/image';

export default function KeyAchievements() {
  const achievements = [
    "Built and maintained applications serving 400,000+ active users",
    "Won Netathon Hackathon organized by Net Solutions (₹1,00,000 prize)",
    "Led frontend development for multiple high-impact projects across healthcare, e-commerce, and logistics",
    "Reduced application load times by implementing performance optimization techniques", 
    "Mentored junior developers and established frontend development best practices"
  ];

  return (
    <section className="px-6 md:px-8 py-20 max-w-6xl mx-auto border-t border-glass-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Achievements list */}
        <div className="lg:col-span-7">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
            02 / MILESTONES
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-8">
            KEY ACHIEVEMENTS
          </h2>
          
          <ul className="space-y-6">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-4 group">
                <span className="font-mono text-xs text-primary font-bold mt-1 bg-primary/5 border border-primary/20 rounded px-2 py-0.5 min-w-[28px] text-center">
                  0{index + 1}
                </span>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-md group-hover:text-[#dae2fd] transition-colors duration-300">
                  {achievement}
                </p>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Achievement Image */}
        <div className="lg:col-span-5 flex flex-col justify-center lg:justify-end gap-3">
          <div className="w-full aspect-[4/3] border border-[#1E293B] rounded-3xl overflow-hidden relative shadow-[0_20px_50px_rgba(0,240,255,0.05)] bg-[#0b1326]">
            <Image
              src="/winner.jpeg"
              alt="Netathon Hackathon Winner - Net Solutions"
              fill
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              priority
            />
          </div>
          <p className="text-muted-foreground text-[10px] tracking-wider uppercase font-mono text-center mt-2">
            Netathon Hackathon Winner - Net Solutions (₹1,00,000)
          </p>
        </div>
      </div>
    </section>
  );
}