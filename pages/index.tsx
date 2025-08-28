import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import EventCard from '../components/EventCard';
import ArtistCard from '../components/ArtistCard';
import Footer from '../components/Footer';
import { loadSiteData, loadEvents, loadArtists, loadGallery } from '../utils/dataLoader';
import { SiteData, Event, Artist, GalleryItem } from '../types';
import { DateHelper } from '../utils/dateHelper';

interface HomeProps {
  siteData: SiteData;
  events: Event[];
  artists: Artist[];
  gallery: GalleryItem[];
}

export default function Home({ siteData, events, artists, gallery }: HomeProps) {
  const upcomingEvents = events.filter(event => DateHelper.isUpcoming(event.date));
  const featuredArtists = artists.slice(0, 4);

  return (
    <>
      <Head>
        <title>{siteData.title}</title>
        <meta name="description" content={siteData.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar events={events} />
      
      <main>
        {/* Hero Section */}
        <Hero 
          headline={siteData.hero.headline}
          sub={siteData.hero.sub}
        />

        {/* À propos Section */}
        <section className="py-20 bg-tapage-cod">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-aura text-tapage-periglacial text-center mb-12">
              À propos de Tapage
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-tapage-stack leading-relaxed mb-6">
                Tapage était un lieu culturel situé dans le Quartier B de Bordeaux, un espace dédié à la création artistique, 
                aux ateliers, à la cuisine et à la musique. Ce lieu accueillait des artistes locaux et internationaux, 
                créant un hub culturel dynamique au cœur de la ville.
              </p>
              <p className="text-tapage-stack leading-relaxed mb-6">
                Après la fermeture du lieu physique, Tapage a évolué vers un collectif organisateur d'événements, 
                collaborant avec des lieux emblématiques bordelais comme le Burdigala, Lorganiq et l'I.BOAT. 
                Le collectif continue de promouvoir la musique électronique et les événements hip-hop sous le nom Quartier B.
              </p>
              <p className="text-tapage-stack leading-relaxed">
                Aujourd'hui, Tapage Culturel perpétue cette vision en organisant des soirées électroniques, 
                éclectiques et visuelles, en mettant en valeur la scène musicale bordelaise et en créant 
                des expériences uniques pour le public.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        {upcomingEvents.length > 0 && (
          <section className="py-20 bg-tapage-tuatara">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-aura text-tapage-periglacial text-center mb-12">
                Prochains événements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.slice(0, 3).map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
              <div className="text-center mt-12">
                <Link
                  href="/events"
                  className="inline-block bg-tapage-periglacial text-tapage-cod px-8 py-3 rounded-md text-lg font-medium hover:bg-white transition-colors"
                >
                  Voir tous les événements
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* DJs Section */}
        <section className="py-20 bg-tapage-cod">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-aura text-tapage-periglacial text-center mb-12">
              Nos DJs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredArtists.map((artist) => (
                <ArtistCard key={artist.id} artist={artist} variant="mini" />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/artists"
                className="inline-block bg-tapage-periglacial text-tapage-cod px-8 py-3 rounded-md text-lg font-medium hover:bg-white transition-colors"
              >
                Découvrir tous nos DJs
              </Link>
            </div>
          </div>
        </section>

        {/* Mini Gallery Section */}
        <section className="py-20 bg-tapage-tuatara">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-aura text-tapage-periglacial text-center mb-12">
              Galerie
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.slice(0, 6).map((item) => (
                <div key={item.id} className="group relative overflow-hidden rounded-lg aspect-square">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tapage-cod/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-tapage-periglacial opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">{item.caption}</p>
                    <p className="text-xs text-tapage-bitter">{item.credit}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/gallery"
                className="inline-block bg-tapage-periglacial text-tapage-cod px-8 py-3 rounded-md text-lg font-medium hover:bg-white transition-colors"
              >
                Voir toute la galerie
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer siteData={siteData} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const [siteData, events, artists, gallery] = await Promise.all([
    loadSiteData(),
    loadEvents(),
    loadArtists(),
    loadGallery(),
  ]);

  return {
    props: {
      siteData,
      events,
      artists,
      gallery,
    },
  };
};
