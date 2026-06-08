'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'GAMES', href: '/games' },
    { name: 'LISTS', href: '/lists' },
    { name: 'PEOPLE', href: '/people' },
  ];

  return (
    <header className="bg-surface border-b border-surface-variant sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-gutter max-w-[1100px] mx-auto h-16">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-display text-headline-md tracking-tighter text-white flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="flex -space-x-1">
              <div className="w-4 h-4 rounded-full bg-[#f97316] shadow-sm"></div>
              <div className="w-4 h-4 rounded-full bg-[#22c55e] shadow-sm"></div>
              <div className="w-4 h-4 rounded-full bg-[#3b82f6] shadow-sm"></div>
            </div>
            GAMEBOXD
          </Link>
        </div>
        <nav className="hidden md:flex gap-4 items-center h-full">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name}
                href={link.href} 
                className={`
                  font-label-md text-label-md uppercase tracking-widest px-3 py-2 rounded-md transition-all duration-300 relative h-10 flex items-center
                  ${isActive 
                    ? 'text-white font-bold' 
                    : 'text-on-surface-variant hover:text-white hover:bg-surface-container-high'
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-5">
          <div className="relative hidden sm:block">
            <input 
              className="bg-surface-container-high border-none rounded-full py-1.5 px-5 text-sm text-on-surface focus:ring-1 focus:ring-primary w-52 transition-all placeholder:text-on-surface-variant/50" 
              placeholder="Search..." 
              type="text"
            />
            <span className="material-symbols-outlined absolute right-4 top-2 text-on-surface-variant text-sm" style={{ fontSize: '18px' }}>search</span>
          </div>
          <Link href="#" className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant hover:text-white transition-colors">SIGN IN</Link>
          <button className="bg-[#00e676] text-[#00210b] font-label-md text-label-md uppercase tracking-widest px-5 py-2 rounded-lg flex items-center gap-1.5 hover:bg-primary transition-all shadow-md active:scale-95">
            + LOG
          </button>
        </div>
      </div>
    </header>
  );
}
