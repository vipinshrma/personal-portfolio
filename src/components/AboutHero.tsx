import Image from 'next/image';
import SocialLinks from './SocialLinks';

export default function AboutHero() {
  return (
    <section className="px-6 md:px-8 pt-32 pb-20 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Content column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Section Marker */}
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            01 / INTRODUCTION
          </span>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-8 leading-[1.05] text-foreground">
            ABOUT ME
          </h1>

          {/* Subheading */}
          <h2 className="text-xl md:text-2xl font-extrabold mb-6 text-[#dae2fd] leading-snug">
            I am a front-end developer based in India with a BSC IT background.
          </h2>

          {/* Detailed Paragraphs */}
          <div className="space-y-4 mb-10 text-muted-foreground text-sm md:text-md leading-relaxed">
            <p>
              I am a front-end developer based in India looking for exciting opportunities. 
              I have a BSC IT background and like to focus on accessibility when 
              developing. I am passionate and curious about solving complex design problems.
            </p>
            <p>
              When I'm not programming, I enjoy hitting the gym and playing Call of Duty. 
              I am always learning and seeking to refine my technical capabilities to build 
              sustainable, high-performance web applications.
            </p>
          </div>
          
          {/* Action Buttons & Socials */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 w-full sm:w-auto">
            <a 
              href="/resume_vipan_sharma.pdf" 
              download="Vipan_Sharma_Resume.pdf"
              className="border border-[#1E293B] bg-glass-bg text-[#dae2fd] font-semibold px-8 py-4 rounded-xl font-mono text-xs uppercase tracking-widest text-center hover:bg-[#334155] active:translate-y-0.5 transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.02)]"
            >
              DOWNLOAD RESUME
            </a>
            <div className="flex justify-center sm:justify-start">
              <SocialLinks />
            </div>
          </div>
        </div>
        
        {/* Right Image column */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-full max-w-sm aspect-[4/5] bg-muted border border-[#1E293B] rounded-3xl overflow-hidden relative shadow-[0_20px_50px_rgba(0,240,255,0.05)]">
            <Image
              src="/profile_image.jpeg"
              alt="Vipan Sharma - Professional Photo"
              fill
              className="object-cover filter brightness-[0.9] hover:brightness-100 transition-all duration-700 hover:scale-[1.02]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}