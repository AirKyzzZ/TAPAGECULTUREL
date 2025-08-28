import Link from 'next/link';
import { Artist } from '../types';

interface ArtistCardProps {
  artist: Artist;
  variant?: 'default' | 'mini';
}

export default function ArtistCard({ artist, variant = 'default' }: ArtistCardProps) {
  if (variant === 'mini') {
    return (
      <Link
        href={`/artists/${artist.id}`}
        className="group block bg-tapage-tuatara rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
      >
        <div className="aspect-square overflow-hidden">
          <img
            src={artist.photo}
            alt={`${artist.name} - DJ`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-alga text-tapage-periglacial mb-2">
            {artist.name}
          </h3>
          <div className="flex flex-wrap gap-1">
            {artist.genres.slice(0, 2).map((genre, index) => (
              <span
                key={index}
                className="bg-tapage-mineshaft text-tapage-periglacial px-2 py-1 rounded text-xs"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="group bg-tapage-tuatara rounded-lg overflow-hidden transition-all duration-300 hover:scale-105">
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={artist.photo}
          alt={`${artist.name} - DJ`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-alga text-tapage-periglacial mb-3">
          {artist.name}
        </h3>
        
        {/* Genres */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {artist.genres.map((genre, index) => (
              <span
                key={index}
                className="bg-tapage-mineshaft text-tapage-periglacial px-3 py-1 rounded-full text-sm"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>

        {/* Bio preview */}
        <p className="text-tapage-stack text-sm mb-4 line-clamp-3">
          {artist.bio.substring(0, 120)}...
        </p>

        {/* Social links */}
        {artist.social.instagram && (
          <div className="flex items-center gap-2 mb-4">
            <a
              href={artist.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-tapage-bitter hover:text-tapage-periglacial transition-colors"
              aria-label={`Instagram de ${artist.name}`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        )}

        {/* CTA */}
        <Link
          href={`/artists/${artist.id}`}
          className="inline-block bg-tapage-periglacial text-tapage-cod px-6 py-2 rounded font-medium hover:bg-white transition-colors"
        >
          Découvrir
        </Link>
      </div>
    </div>
  );
}
