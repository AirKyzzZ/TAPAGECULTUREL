import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import OGMeta from '../../components/OGMeta';
import Footer from '../../components/Footer';
import { loadSiteData, loadArtists, loadArtistById, loadEvents } from '../../utils/dataLoader';
import { SiteData, Artist, Event, MetaData } from '../../types';

interface ArtistPageProps {
  siteData: SiteData;
  artist: Artist;
  events: Event[];
}

export default function ArtistPage({ siteData, artist, events }: ArtistPageProps) {
  // Find events featuring this artist
  const artistEvents = events.filter(event => 
    event.lineup.some(name => name.toLowerCase().includes(artist.name.toLowerCase()))
  );

  const meta: MetaData = {
    title: `${artist.name} — Tapage Culturel`,
    description: artist.bio.substring(0, 160) + '...',
    image: artist.photo,
    url: `/artists/${artist.id}`,
  };

  return (
    <>
      <OGMeta meta={meta} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar events={events} />
      
      <main className="pt-16">
        {/* Hero */}
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          <img
            src={artist.photo}
            alt={`${artist.name} - DJ`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-tapage-cod/80 via-transparent to-transparent" />
          
          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-alga text-tapage-periglacial mb-4">
                {artist.name}
              </h1>
              
              {/* Genres */}
              <div className="flex flex-wrap gap-2 mb-4">
                {artist.genres.map((genre, index) => (
                  <span
                    key={index}
                    className="bg-tapage-periglacial text-tapage-cod px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-tapage-cod">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main content */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-aura text-tapage-periglacial mb-6">
                  Biographie
                </h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-tapage-stack leading-relaxed mb-8">
                    {artist.bio}
                  </p>
                </div>

                {/* Social links */}
                {artist.social.instagram && (
                  <div className="mb-8">
                    <h3 className="text-xl font-alga text-tapage-periglacial mb-4">
                      Suivre {artist.name}
                    </h3>
                    <div className="flex gap-4">
                      <a
                        href={artist.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-tapage-periglacial text-tapage-cod px-4 py-2 rounded-md hover:bg-white transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        Instagram
                      </a>
                    </div>
                  </div>
                )}

                {/* Mix embed */}
                {artist.mixUrl && (
                  <div className="mb-8">
                    <h3 className="text-xl font-alga text-tapage-periglacial mb-4">
                      Dernier mix
                    </h3>
                    <div className="aspect-video bg-tapage-tuatara rounded-lg flex items-center justify-center">
                      <a
                        href={artist.mixUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-tapage-periglacial hover:text-white transition-colors"
                      >
                        Écouter le mix →
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-tapage-tuatara p-6 rounded-lg sticky top-24">
                  <h3 className="text-lg font-alga text-tapage-periglacial mb-4">
                    Informations
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-tapage-bitter text-sm">Genres</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {artist.genres.map((genre, index) => (
                          <span
                            key={index}
                            className="bg-tapage-mineshaft text-tapage-periglacial px-2 py-1 rounded text-xs"
                          >
                            {genre}
                          </span>
                        ))}
                      </div>
                    </div>

                    {artistEvents.length > 0 && (
                      <div>
                        <p className="text-tapage-bitter text-sm mb-2">Événements</p>
                        <p className="text-tapage-periglacial text-sm">
                          {artistEvents.length} événement{artistEvents.length > 1 ? 's' : ''}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events featuring this artist */}
        {artistEvents.length > 0 && (
          <section className="py-20 bg-tapage-tuatara">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-aura text-tapage-periglacial text-center mb-12">
                Événements avec {artist.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {artistEvents.map((event) => (
                  <div key={event.id} className="bg-tapage-cod rounded-lg overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={event.cover}
                        alt={`${event.title} - ${event.venue}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-aura text-tapage-periglacial mb-2">
                        {event.title}
                      </h3>
                      <p className="text-tapage-stack text-sm mb-4">
                        {event.venue}
                      </p>
                      <Link
                        href={`/events/${event.id}`}
                        className="inline-block bg-tapage-periglacial text-tapage-cod px-4 py-2 rounded font-medium hover:bg-white transition-colors"
                      >
                        Voir l'événement
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer siteData={siteData} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const artists = await loadArtists();
  
  const paths = artists.map((artist) => ({
    params: { id: artist.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const artistId = params?.id as string;
  
  const [siteData, artists, events, artist] = await Promise.all([
    loadSiteData(),
    loadArtists(),
    loadEvents(),
    loadArtistById(artistId),
  ]);

  if (!artist) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      siteData,
      artist,
      events,
    },
  };
};
