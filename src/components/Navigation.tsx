'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center px-4 md:px-8 py-6 max-w-7xl mx-auto">
      <Link href="/" className="text-lg md:text-xl font-bold hover:text-[#CCFF00] transition-colors">
        VIPAN SHARMA
      </Link>
      <div className="flex gap-4 md:gap-8">
        <Link 
          href="/work" 
          className={`hover:text-[#CCFF00] transition-colors ${pathname === '/work' ? 'text-[#CCFF00]' : ''}`}
        >
          Work
        </Link>
        <Link 
          href="/about" 
          className={`hover:text-[#CCFF00] transition-colors ${pathname === '/about' ? 'text-[#CCFF00]' : ''}`}
        >
          About
        </Link>
        <Link 
          href="/contact" 
          className={`hover:text-[#CCFF00] transition-colors ${pathname === '/contact' ? 'text-[#CCFF00]' : ''}`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}