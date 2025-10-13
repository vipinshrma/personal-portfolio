import SocialLinks from './SocialLinks';

export default function AboutHero() {
  return (
    <section className="px-4 md:px-8 py-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            ABOUT ME
          </h1>
          <h2 className="text-2xl font-bold mb-6">
            I am a front-end developer based in India.<br />
            I have a BSC IT background.
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            I am a front-end developer based in India looking for exciting opportunities. 
            I have a BSC IT background and like to focus on accessibility when 
            developing. I am passionate and curious about solving problems. When I'm not programming, I enjoy 
            hitting the gym and playing COD. Always learning more to improve my skills.
          </p>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
            <a 
              href="/resume_vipan_sharma.pdf" 
              download="Vipan_Sharma_Resume.pdf"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors inline-block text-center"
            >
              DOWNLOAD RESUME
            </a>
            <div className="flex justify-center sm:justify-start">
              <SocialLinks />
            </div>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-sm md:w-96 h-[500px] bg-muted rounded-2xl overflow-hidden">
            <div className="w-full h-full bg-gradient-to-b from-muted/80 to-muted flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <div className="w-32 h-32 bg-muted-foreground/20 rounded-full mx-auto mb-6"></div>
                <p className="text-xl font-medium">Profile Photo</p>
                <p className="text-sm">Professional headshot</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}