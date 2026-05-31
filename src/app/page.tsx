import Hero from '../components/Hero';
import TechMarquee from '../components/TechMarquee';
import FeaturedProjects from '../components/FeaturedProjects';
import AboutMe from '../components/AboutMe';

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <FeaturedProjects />
      <AboutMe />
    </>
  );
}
