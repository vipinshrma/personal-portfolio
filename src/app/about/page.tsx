import type { Metadata } from 'next';
import AboutHero from '../../components/AboutHero';
import KeyAchievements from '../../components/KeyAchievements';
import TechCategories from '../../components/TechCategories';
import Experience from '../../components/Experience';

export const metadata: Metadata = {
  title: "About Me | Vipan Sharma - Front-end Architect",
  description: "Learn more about Vipan Sharma's journey as a frontend developer, key milestones, hackathon wins, and professional work experience at techindustan.",
};

export default function About() {
  return (
    <>
      <AboutHero />
      <KeyAchievements />
      <Experience />
      <TechCategories />
    </>
  );
}