import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useState, useMemo } from 'react';
import Navbar from '../../components/Navbar';
import EventCard from '../../components/EventCard';
import Footer from '../../components/Footer';
import { loadSiteData, loadEvents } from '../../utils/dataLoader';
import { SiteData, Event } from '../../types';
import { DateHelper } from '../../utils/dateHelper';

interface EventsProps {
  siteData: SiteData;
  events: Event[];
}

export default function Events({ siteData, events }: EventsProps) {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');
  const [sortBy, setSortBy] = useState<'date-asc' | 'date-desc'>('date-asc');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAndSortedEvents = useMemo(() => {
    let filtered = events;

    // Filter by status
    if (filter === 'upcoming') {
      filtered = filtered.filter(event => DateHelper.isUpcoming(event.date));
    } else if (filter === 'past') {
      filtered = filtered.filter(event => DateHelper.isPast(event.date));
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(event => 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.lineup.some(artist => artist.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sort
    filtered.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortBy === 'date-asc' ? dateA - dateB : dateB - dateA;
    });

    return filtered;
  }, [events, filter, sortBy, searchTerm]);

  return (
    <>
      <Head>
        <title>Événements — Tapage Culturel</title>
        <meta name="description" content="Découvrez tous nos événements électroniques et éclectiques à Bordeaux. Soirées, festivals et performances live." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar events={events} />
      
      <main className="pt-16">
        {/* Header */}
        <section className="py-20 bg-tapage-cod">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-aura text-tapage-periglacial text-center mb-6">
              Événements
            </h1>
            <p className="text-xl text-tapage-stack text-center max-w-2xl mx-auto">
              Découvrez nos soirées électroniques, éclectiques et visuelles à Bordeaux
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-tapage-tuatara">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Rechercher un événement, lieu ou artiste..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 bg-tapage-mineshaft border border-tapage-fuscous rounded-md text-tapage-periglacial placeholder-tapage-bitter focus:outline-none focus:ring-2 focus:ring-tapage-periglacial"
                />
              </div>

              {/* Filter buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    filter === 'all'
                      ? 'bg-tapage-periglacial text-tapage-cod'
                      : 'bg-tapage-mineshaft text-tapage-periglacial hover:bg-tapage-fuscous'
                  }`}
                >
                  Tous
                </button>
                <button
                  onClick={() => setFilter('upcoming')}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    filter === 'upcoming'
                      ? 'bg-tapage-periglacial text-tapage-cod'
                      : 'bg-tapage-mineshaft text-tapage-periglacial hover:bg-tapage-fuscous'
                  }`}
                >
                  À venir
                </button>
                <button
                  onClick={() => setFilter('past')}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    filter === 'past'
                      ? 'bg-tapage-periglacial text-tapage-cod'
                      : 'bg-tapage-mineshaft text-tapage-periglacial hover:bg-tapage-fuscous'
                  }`}
                >
                  Passés
                </button>
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'date-asc' | 'date-desc')}
                className="px-4 py-2 bg-tapage-mineshaft border border-tapage-fuscous rounded-md text-tapage-periglacial focus:outline-none focus:ring-2 focus:ring-tapage-periglacial"
              >
                <option value="date-asc">Date ↑</option>
                <option value="date-desc">Date ↓</option>
              </select>
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-20 bg-tapage-tuatara">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredAndSortedEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredAndSortedEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-tapage-stack text-lg">
                  Aucun événement trouvé avec ces critères.
                </p>
                <button
                  onClick={() => {
                    setFilter('all');
                    setSearchTerm('');
                  }}
                  className="mt-4 text-tapage-periglacial hover:text-white transition-colors"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer siteData={siteData} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const [siteData, events] = await Promise.all([
    loadSiteData(),
    loadEvents(),
  ]);

  return {
    props: {
      siteData,
      events,
    },
  };
};
