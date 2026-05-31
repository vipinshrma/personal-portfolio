'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Work', href: '/work' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <nav className="glass-card rounded-full px-6 py-3 flex justify-between items-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl border border-glass-border relative">
        {/* Logo / Title */}
        <Link 
          href="/" 
          onClick={() => setIsOpen(false)}
          className="text-md md:text-lg font-bold tracking-tighter hover:text-primary transition-colors flex items-center gap-1.5"
        >
          <span className="text-primary-fixed-dim font-mono">&lt;/&gt;</span>
          <span>VIPAN SHARMA</span>
        </Link>
        
        {/* Navigation Elements Container (Desktop Links + Mobile Hamburger) */}
        <div className="flex items-center gap-2">
          {/* Desktop Links (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.href}
                  href={link.href} 
                  prefetch={true}
                  className={`relative px-3.5 py-1.5 text-xs md:text-sm font-semibold tracking-wide uppercase transition-colors rounded-full duration-300 ${
                    isActive ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-pill"
                      className="absolute inset-0 bg-primary rounded-full -z-10 shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Animated Hamburger (Mobile Only) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground focus:outline-none hover:text-primary transition-colors active:scale-95"
            aria-label="Toggle Menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20">
              <motion.path
                fill="transparent"
                strokeWidth="2.5"
                stroke="currentColor"
                strokeLinecap="round"
                variants={{
                  closed: { d: "M 3 4.5 L 17 4.5" },
                  open: { d: "M 3 16.5 L 17 3.5" }
                }}
                animate={isOpen ? "open" : "closed"}
                transition={{ duration: 0.25 }}
              />
              <motion.path
                fill="transparent"
                strokeWidth="2.5"
                stroke="currentColor"
                strokeLinecap="round"
                variants={{
                  closed: { d: "M 3 10 L 17 10", opacity: 1 },
                  open: { d: "M 3 10 L 17 10", opacity: 0 }
                }}
                animate={isOpen ? "open" : "closed"}
                transition={{ duration: 0.25 }}
              />
              <motion.path
                fill="transparent"
                strokeWidth="2.5"
                stroke="currentColor"
                strokeLinecap="round"
                variants={{
                  closed: { d: "M 3 15.5 L 17 15.5" },
                  open: { d: "M 3 3.5 L 17 16.5" }
                }}
                animate={isOpen ? "open" : "closed"}
                transition={{ duration: 0.25 }}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute top-full left-0 right-0 mt-3 bg-background/95 backdrop-blur-xl rounded-[2rem] p-4 border border-border/80 overflow-hidden md:hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col gap-2"
            >
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link 
                      key={link.href}
                      href={link.href}
                      prefetch={true}
                      onClick={() => setIsOpen(false)}
                      className={`relative px-5 py-3.5 text-xs font-semibold tracking-wide uppercase transition-colors rounded-2xl duration-300 ${
                        isActive ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-[#1E293B]/40'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}