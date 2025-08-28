import Link from 'next/link';
import { SiteData } from '../types';

interface FooterProps {
  siteData: SiteData;
}

export default function Footer({ siteData }: FooterProps) {
  return (
    <footer className="bg-tapage-tuatara-dark text-tapage-periglacial">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
                         <div className="flex items-center mb-4">
               <img
                 src="/assets/logo.jpg"
                 alt="Tapage Culturel"
                 className="h-8 w-auto mr-3"
               />
               <h3 className="text-2xl font-aura text-tapage-periglacial">
                 TAPAGE
               </h3>
             </div>
            <p className="text-tapage-stack mb-6 max-w-md">
              Collectif musical bordelais — soirées électroniques, éclectiques & visuelles.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href={siteData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-tapage-bitter hover:text-tapage-periglacial transition-colors"
                aria-label="Instagram Tapage"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-alga text-tapage-periglacial mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/events" className="text-tapage-stack hover:text-tapage-periglacial transition-colors">
                  Événements
                </Link>
              </li>
              <li>
                <Link href="/artists" className="text-tapage-stack hover:text-tapage-periglacial transition-colors">
                  DJs
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-tapage-stack hover:text-tapage-periglacial transition-colors">
                  Galerie
                </Link>
              </li>
              <li>
                <Link href="/rider" className="text-tapage-stack hover:text-tapage-periglacial transition-colors">
                  Rider
                </Link>
              </li>
              <li>
                
              </li>
            </ul>
          </div>
        </div>

        {/* Contact et copyright */}
        <div className="border-t border-tapage-mineshaft mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-tapage-bitter">
                Contact :{' '}
                <a
                  href={`mailto:${siteData.contactEmail}`}
                  className="text-tapage-periglacial hover:text-white transition-colors"
                >
                  {siteData.contactEmail}
                </a>
              </p>
            </div>
            <div className="text-tapage-bitter text-sm">
              © {new Date().getFullYear()} Tapage Culturel. Tous droits réservés.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
