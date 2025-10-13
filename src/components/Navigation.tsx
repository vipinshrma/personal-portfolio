'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './theme-toggle';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center px-4 md:px-8 py-6 max-w-7xl mx-auto">
      <Link href="/" className="text-lg md:text-xl font-bold hover:text-primary transition-colors">
        VIPAN SHARMA
      </Link>
      <div className="flex items-center gap-4 md:gap-8">
        <Link 
          href="/work" 
          className={`hover:text-primary transition-colors ${pathname === '/work' ? 'text-primary' : ''}`}
        >
          Work
        </Link>
        <Link 
          href="/about" 
          className={`hover:text-primary transition-colors ${pathname === '/about' ? 'text-primary' : ''}`}
        >
          About
        </Link>
        <Link 
          href="/contact" 
          className={`hover:text-primary transition-colors ${pathname === '/contact' ? 'text-primary' : ''}`}
        >
          Contact
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}