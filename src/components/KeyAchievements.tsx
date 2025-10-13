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
    <section className="px-8 py-20 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">KEY ACHIEVEMENTS</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <ul className="space-y-6">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground leading-relaxed text-lg">{achievement}</p>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-md">
            <Image
              src="/winner.jpeg"
              alt="Netathon Hackathon Winner - Net Solutions"
              width={400}
              height={300}
              className="w-full h-auto rounded-lg shadow-lg"
              priority
            />
            <p className="text-muted-foreground text-sm mt-3 text-center">
              Netathon Hackathon Winner - Net Solutions (₹1,00,000)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}