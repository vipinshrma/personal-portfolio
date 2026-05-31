'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';

export default function Hero() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    setRotateX((yc - y) / 10);
    setRotateY((x - xc) / 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  // Split heading for word-reveal animation
  const headingWords = "ENGINEERING ACCESSIBLE AND USER FRIENDLY WEBSITES.".split(" ");

  return (
    <section className="relative px-6 md:px-8 pt-32 pb-24 max-w-6xl mx-auto min-h-[85vh] flex flex-col justify-center overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-8 flex flex-col items-start text-left">
          {/* Status Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 bg-glass-bg border border-glass-border px-4 py-1.5 rounded-full"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse shadow-[0_0_10px_#00f0ff]" />
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#dae2fd]">
              HI, I AM VIPAN SHARMA.
            </span>
          </motion.div>

          {/* Heading with Italicized Custom Element */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-8 leading-[1.05] text-foreground max-w-4xl">
            ENGINEERING <span className="text-primary italic font-light font-sans tracking-tight block sm:inline">ACCESSIBLE</span> AND USER FRIENDLY WEBSITES.
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-muted-foreground text-md md:text-lg mb-12 max-w-2xl leading-relaxed"
          >
            An India based front-end developer passionate about building 
            accessible and user friendly websites.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 w-full sm:w-auto"
          >
            <a 
              href="/resume_vipan_sharma.pdf" 
              download="Vipan_Sharma_Resume.pdf"
              className="border border-[#1E293B] bg-glass-bg text-[#dae2fd] font-semibold px-8 py-4 rounded-xl font-mono text-xs uppercase tracking-widest text-center hover:bg-[#334155] active:translate-y-0.5 transition-all duration-300"
            >
              DOWNLOAD CV
            </a>
            <div className="flex justify-center sm:justify-start">
              <SocialLinks />
            </div>
          </motion.div>
        </div>

        {/* 3D Tilt Card on Avatar */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, rotateX, rotateY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            transition={{
              opacity: { delay: 0.2, duration: 0.6 },
              scale: { delay: 0.2, duration: 0.6 },
              rotateX: { type: 'spring', stiffness: 200, damping: 20 },
              rotateY: { type: 'spring', stiffness: 200, damping: 20 }
            }}
            style={{ transformStyle: 'preserve-3d' }}
            className="glass-card w-72 md:w-80 h-[380px] md:h-[410px] rounded-3xl overflow-hidden flex flex-col items-center justify-center relative shadow-[0_20px_50px_rgba(0,240,255,0.1)] border border-glass-border p-6 cursor-grab active:cursor-grabbing"
          >
            {/* Card internal elements with 3D translation */}
            <div 
              style={{ transform: 'translateZ(40px)' }} 
              className="relative w-48 h-48 md:w-52 md:h-52 mb-6 transition-transform duration-200"
            >
              <Image
                src="https://cdn3d.iconscout.com/3d/premium/thumb/male-programmer-3d-icon-png-download-6547032.png"
                alt="Vipan Sharma - 3D Avatar"
                fill
                className="object-contain filter drop-shadow-[0_10px_15px_rgba(0,240,255,0.15)]"
                priority
              />
            </div>
            
            <div 
              style={{ transform: 'translateZ(25px)' }}
              className="text-center px-4"
            >
              <h3 className="text-xl font-extrabold text-foreground mb-1 font-sans">Vipan Sharma</h3>
              <p className="text-xs text-primary font-mono uppercase tracking-wider font-semibold">
                Frontend Developer
              </p>
              <div className="w-10 h-0.5 bg-primary/40 mx-auto mt-3 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}