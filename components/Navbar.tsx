'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Event } from '../types';
import { DateHelper } from '../utils/dateHelper';

interface NavbarProps {
  events: Event[];
}

export default function Navbar({ events }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const nextEvent = DateHelper.getNextEvent(events);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-tapage-tuatara-dark/95 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
                     {/* Logo */}
           <Link href="/" className="flex items-center space-x-2">
             <span className="text-2xl font-aura text-tapage-periglacial">
               TAPAGE
             </span>
           </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/events" className="text-tapage-periglacial hover:text-white transition-colors">
              Événements
            </Link>
            <Link href="/artists" className="text-tapage-periglacial hover:text-white transition-colors">
              DJs
            </Link>
            <Link href="/gallery" className="text-tapage-periglacial hover:text-white transition-colors">
              Galerie
            </Link>
            <Link href="/rider" className="text-tapage-periglacial hover:text-white transition-colors">
              Rider
            </Link>
            
            <Link href="/contact" className="text-tapage-periglacial hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Prochaine soirée */}
          {nextEvent && (
            <div className="hidden md:block">
              <Link
                href={`/events/${nextEvent.id}`}
                className="bg-tapage-periglacial text-tapage-cod px-4 py-2 rounded-md font-medium hover:bg-white transition-colors"
              >
                Prochaine soirée
              </Link>
            </div>
          )}

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-tapage-periglacial hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-tapage-tuatara-dark/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/events"
              className="block px-3 py-2 text-tapage-periglacial hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Événements
            </Link>
            <Link
              href="/artists"
              className="block px-3 py-2 text-tapage-periglacial hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              DJs
            </Link>
            <Link
              href="/gallery"
              className="block px-3 py-2 text-tapage-periglacial hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Galerie
            </Link>
            <Link
              href="/rider"
              className="block px-3 py-2 text-tapage-periglacial hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Rider
            </Link>

            <Link
              href="/contact"
              className="block px-3 py-2 text-tapage-periglacial hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            {nextEvent && (
              <Link
                href={`/events/${nextEvent.id}`}
                className="block px-3 py-2 bg-tapage-periglacial text-tapage-cod rounded-md font-medium hover:bg-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Prochaine soirée
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
