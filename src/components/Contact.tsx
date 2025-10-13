'use client'
import { useState } from 'react';
import toast from 'react-hot-toast';
import SocialLinks from './SocialLinks';

export default function Contact() {
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
    <section id="contact" className="px-8 py-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">LET'S CONNECT</h2>
          <p className="text-muted-foreground mb-4">
            Say hello at{" "}
            <a href="mailto:vipansharma.dev@gmail.com" className="text-primary hover:text-primary/80 transition-colors">
              vipansharma.dev@gmail.com
            </a>
          </p>
          <p className="text-muted-foreground mb-8">
            For more info, here's my{" "}
            <a 
              href="/resume_vipan_sharma.pdf" 
              download="Vipan_Sharma_Resume.pdf"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              resume
            </a>
          </p>
          
          <SocialLinks />
        </div>
        
        <div>
          {isSubmitted ? (
            <div className="bg-green-900/20 border border-green-500 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-green-400 mb-2">Message Sent!</h3>
              <p className="text-green-300">Thank you for your message. I'll get back to you soon!</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-4 text-primary hover:text-primary/80 transition-colors underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="w-full bg-background border border-input rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-background border border-input rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm text-muted-foreground mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full bg-background border border-input rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full bg-background border border-input rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full md:w-auto px-6 md:px-8 py-3 rounded-full font-medium transition-colors ${
                isSubmitting 
                  ? 'bg-muted text-muted-foreground cursor-not-allowed' 
                  : 'bg-primary text-primary-foreground hover:bg-primary/90'
              }`}
            >
              {isSubmitting ? 'SENDING...' : 'SUBMIT'}
            </button>
          </form>
          )}
        </div>
      </div>
    </section>
  );
}