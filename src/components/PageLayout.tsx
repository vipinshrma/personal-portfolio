import Navigation from './Navigation';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}