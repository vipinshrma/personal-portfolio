export default function AboutMe() {
  return (
    <section id="about" className="px-8 py-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-5xl font-bold mb-8">ABOUT ME</h2>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-6">
            I am a front-end developer based in India.<br />
            I have a BSC IT background.
          </h3>
          <p className="text-gray-400 mb-6">
            I am a front-end developer based in India looking for exciting opportunities. 
            I have a BSC IT background and like to focus on accessibility when 
            developing. I am passionate and curious about solving problems. When I'm not programming, I enjoy 
            hitting the gym and playing COD. Always learning more to improve my skills.
          </p>
          <a href="/about" className="text-primary font-medium hover:text-white transition-colors">
            MORE ABOUT ME
          </a>
        </div>
      </div>
    </section>
  );
}