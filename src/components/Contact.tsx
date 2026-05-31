'use client'
import { useState } from 'react';
import toast from 'react-hot-toast';
import SocialLinks from './SocialLinks';

interface ContactProps {
  isHeaderH1?: boolean;
}

export default function Contact({ isHeaderH1 = false }: ContactProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(`https://formcarry.com/s/${process.env.NEXT_PUBLIC_FORMCARRY_ID}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        toast.success('Message sent successfully! I\'ll get back to you soon.');
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-6 md:px-8 py-24 max-w-6xl mx-auto border-t border-glass-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Side Info */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-primary mb-2">
            04 / CONTACT
          </h2>
          {isHeaderH1 ? (
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-8">
              LET'S CONNECT
            </h1>
          ) : (
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-8">
              LET'S CONNECT
            </h3>
          )}
          
          <p className="text-muted-foreground leading-relaxed text-sm md:text-md mb-6 max-w-sm">
            I'm currently looking for new opportunities. Feel free to ask a question, suggest a project, or just say hello.
          </p>

          <div className="space-y-4 mb-8">
            <div>
              <span className="block font-mono text-[9px] uppercase tracking-widest text-muted-foreground mb-1">EMAIL ME AT</span>
              <a 
                href="mailto:vipansharma.dev@gmail.com" 
                className="text-primary font-bold hover:text-primary-fixed-dim transition-colors duration-300 text-sm md:text-md"
              >
                vipansharma.dev@gmail.com
              </a>
            </div>
            <div>
              <span className="block font-mono text-[9px] uppercase tracking-widest text-muted-foreground mb-1">RESUME / PROFILE</span>
              <a 
                href="/resume_vipan_sharma.pdf" 
                download="Vipan_Sharma_Resume.pdf"
                className="text-primary font-bold hover:text-primary-fixed-dim transition-colors duration-300 text-sm md:text-md"
              >
                Download my Resume &rarr;
              </a>
            </div>
          </div>
          
          <div className="mt-auto">
            <span className="block font-mono text-[9px] uppercase tracking-widest text-muted-foreground mb-3">SOCIAL SPACES</span>
            <SocialLinks />
          </div>
        </div>
        
        {/* Right Side Form */}
        <div className="lg:col-span-7">
          {isSubmitted ? (
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center glass-card">
              <span className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 text-xl">&check;</span>
              <h3 className="text-xl font-extrabold text-[#dae2fd] mb-2">Message Sent!</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Thank you for reaching out. I'll read your message and get back to you as soon as possible.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-xs font-mono uppercase tracking-widest text-primary hover:underline underline-offset-4"
              >
                Send another message &rarr;
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 rounded-2xl border border-glass-border space-y-5">
              <div>
                <label htmlFor="name" className="block text-[10px] font-mono uppercase tracking-widest text-primary/70 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="w-full bg-[#0b1326]/60 border border-glass-border rounded-xl px-4 py-3.5 text-foreground placeholder-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300 shadow-sm text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[10px] font-mono uppercase tracking-widest text-primary/70 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="johndoe@example.com"
                  className="w-full bg-[#0b1326]/60 border border-glass-border rounded-xl px-4 py-3.5 text-foreground placeholder-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300 shadow-sm text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-[10px] font-mono uppercase tracking-widest text-primary/70 font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  className="w-full bg-[#0b1326]/60 border border-glass-border rounded-xl px-4 py-3.5 text-foreground placeholder-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300 shadow-sm text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[10px] font-mono uppercase tracking-widest text-primary/70 font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or ideas..."
                  className="w-full bg-[#0b1326]/60 border border-glass-border rounded-xl px-4 py-3.5 text-foreground placeholder-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300 shadow-sm resize-none text-sm"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-4 rounded-xl font-mono text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-glass-bg text-muted-foreground cursor-not-allowed border border-glass-border' 
                    : 'bg-primary text-primary-foreground hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:scale-[1.01] active:translate-y-0.5'
                }`}
              >
                {isSubmitting ? 'SENDING...' : 'SUBMIT MESSAGE'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}