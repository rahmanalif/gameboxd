'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import AuthModal from './auth-modal';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  
  // Mock authentication state for demonstration
  // In a real app, this would come from a context or auth hook
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    username: 'PEWDIEPIE',
    avatar: '/users/pewdiepie.jpg'
  });

  const openLogin = () => {
    setAuthMode('login');
    setIsAuthModalOpen(true);
  };

  const openSignup = () => {
    setAuthMode('signup');
    setIsAuthModalOpen(true);
  };

  const toggleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'GAMES', href: '/games' },
    { name: 'LISTS', href: '/lists' },
    { name: 'PEOPLE', href: '/people' },
  ];

  return (
    <>
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
            
            {!isLoggedIn ? (
              <>
                <button 
                  onClick={openLogin}
                  className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant hover:text-white transition-colors"
                >
                  SIGN IN
                </button>
                <button 
                  onClick={openSignup}
                  className="bg-[#00e676] text-[#00210b] font-label-md text-label-md uppercase tracking-widest px-5 py-2 rounded-lg flex items-center gap-1.5 hover:bg-primary transition-all shadow-md active:scale-95"
                >
                  + LOG
                </button>
              </>
            ) : (
              <div className="flex items-center gap-4 pl-4 border-l border-surface-variant h-8">
                <div className="flex flex-col items-end hidden sm:flex">
                  <span className="text-[11px] font-bold tracking-[0.2em] text-on-surface-variant uppercase leading-none mb-1">PRO</span>
                  <span className="text-label-md font-bold text-white tracking-widest uppercase leading-none">{user.username}</span>
                </div>
                <div className="relative group cursor-pointer">
                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-surface-variant group-hover:border-primary transition-colors">
                    <Image 
                      src={user.avatar} 
                      alt={user.username} 
                      width={32} 
                      height={32} 
                      className="object-cover"
                    />
                  </div>
                  {/* Simple Dropdown Menu on hover */}
                  <div className="absolute right-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="bg-surface-container border border-surface-variant rounded-lg shadow-xl w-48 py-2 overflow-hidden">
                      <Link href="#" className="block px-4 py-2 text-label-md text-on-surface-variant hover:text-white hover:bg-surface-container-high transition-colors tracking-widest uppercase font-bold">Profile</Link>
                      <Link href="#" className="block px-4 py-2 text-label-md text-on-surface-variant hover:text-white hover:bg-surface-container-high transition-colors tracking-widest uppercase font-bold">Diary</Link>
                      <Link href="#" className="block px-4 py-2 text-label-md text-on-surface-variant hover:text-white hover:bg-surface-container-high transition-colors tracking-widest uppercase font-bold">Reviews</Link>
                      <Link href="#" className="block px-4 py-2 text-label-md text-on-surface-variant hover:text-white hover:bg-surface-container-high transition-colors tracking-widest uppercase font-bold">Watchlist</Link>
                      <Link href="#" className="block px-4 py-2 text-label-md text-on-surface-variant hover:text-white hover:bg-surface-container-high transition-colors tracking-widest uppercase font-bold">Lists</Link>
                      <Link href="#" className="block px-4 py-2 text-label-md text-on-surface-variant hover:text-white hover:bg-surface-container-high transition-colors tracking-widest uppercase font-bold">Games</Link>
                      <div className="h-px bg-surface-variant my-2" />
                      <button 
                        onClick={toggleAuth}
                        className="w-full text-left block px-4 py-2 text-label-md text-primary hover:text-white hover:bg-surface-container-high transition-colors tracking-widest uppercase font-bold"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        onSuccess={() => setIsLoggedIn(true)}
        initialMode={authMode}
      />
    </>
  );
}
