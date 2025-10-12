import SocialLinks from './SocialLinks';

export default function AboutHero() {
  return (
    <section className="px-8 py-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            ABOUT ME
          </h1>
          <h2 className="text-2xl font-bold mb-6">
            I am a front-end developer based in India.<br />
            I have a BSC IT background.
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            I am a front-end developer based in India looking for exciting opportunities. 
            I have a BSC IT background and like to focus on accessibility when 
            developing. I am passionate and curious about solving problems. When I'm not programming, I enjoy 
            hitting the gym and playing COD. Always learning more to improve my skills.
          </p>
          
          <div className="flex items-center gap-6 mb-8">
            <a 
              href="/resume_vipan_sharma.pdf" 
              download="Vipan_Sharma_Resume.pdf"
              className="bg-[#CCFF00] text-black px-6 py-3 rounded-full font-medium hover:bg-[#b8e600] transition-colors inline-block"
            >
              DOWNLOAD RESUME
            </a>
            <SocialLinks />
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end">
          <div className="w-96 h-[500px] bg-gray-300 rounded-2xl overflow-hidden">
            <div className="w-full h-full bg-gradient-to-b from-gray-200 to-gray-400 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <div className="w-32 h-32 bg-gray-500 rounded-full mx-auto mb-6"></div>
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