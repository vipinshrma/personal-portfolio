'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function CTASection() {
  const pathname = usePathname();

  // Hide the CTA section on the contact page as it is redundant
  if (pathname === '/contact') {
    return null;
  }

  return (
    <section className="px-6 md:px-8 py-20 max-w-6xl mx-auto relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Main Glassmorphic Container */}
      <div className="glass-card rounded-[2.5rem] px-8 py-16 md:py-20 text-center relative border border-glass-border overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
        {/* Subtle inner card radial glow */}
        <div className="absolute -inset-x-20 bottom-0 top-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

        <div className="max-w-2xl mx-auto space-y-6 relative z-10">
          {/* Subheading */}
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary bg-primary/5 border border-primary/20 rounded-md px-3 py-1 w-fit mx-auto">
            Let's work together
          </span>

          {/* Main Title */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-foreground leading-[1.1] pt-2">
            LET'S ARCHITECT <br className="hidden sm:inline" /> SOMETHING GREAT
          </h2>

          {/* Subtitle Description */}
          <p className="text-muted-foreground text-sm md:text-md max-w-lg mx-auto leading-relaxed">
            I am currently open to exciting new frontend roles, freelance projects, or collaborative engineering opportunities. Let's make something amazing.
          </p>

          {/* CTA Button */}
          <div className="pt-6">
            <Link 
              href="/contact" 
              className="bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl font-mono text-xs uppercase tracking-widest inline-flex items-center gap-2 shadow-[0_0_30px_rgba(0,240,255,0.2)] hover:shadow-[0_0_40px_rgba(0,240,255,0.45)] hover:scale-[1.02] active:translate-y-0.5 transition-all duration-300"
            >
              GET IN TOUCH <span className="text-sm">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
