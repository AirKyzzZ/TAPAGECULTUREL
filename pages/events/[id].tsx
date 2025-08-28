import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import OGMeta from '../../components/OGMeta';
import Footer from '../../components/Footer';
import { loadSiteData, loadEvents, loadEventById } from '../../utils/dataLoader';
import { SiteData, Event, MetaData } from '../../types';
import { DateHelper } from '../../utils/dateHelper';

interface EventPageProps {
  siteData: SiteData;
  event: Event;
  events: Event[];
}

export default function EventPage({ siteData, event, events }: EventPageProps) {
  const isUpcoming = DateHelper.isUpcoming(event.date);
  const formattedDate = DateHelper.formatFrenchDate(event.date);

  const meta: MetaData = {
    title: `${event.title} — Tapage Culturel`,
    description: event.description,
    image: event.cover,
    url: `/events/${event.id}`,
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
            src={event.cover}
            alt={`${event.title} - ${event.venue}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-tapage-cod/80 via-transparent to-transparent" />
          
          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-aura text-tapage-periglacial mb-4">
                {event.title}
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center text-tapage-periglacial">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-lg">{formattedDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-lg">{event.venue}</span>
                </div>
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
                  À propos de l'événement
                </h2>
                <p className="text-tapage-stack leading-relaxed mb-8">
                  {event.description}
                </p>

                {/* Lineup */}
                {event.lineup.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-alga text-tapage-periglacial mb-4">
                      Lineup
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {event.lineup.map((artist, index) => (
                        <div
                          key={index}
                          className="bg-tapage-tuatara p-4 rounded-lg border border-tapage-mineshaft"
                        >
                          <span className="text-tapage-periglacial font-medium">
                            {artist}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={event.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-tapage-periglacial text-tapage-cod px-8 py-4 rounded-md text-lg font-medium hover:bg-white transition-colors text-center"
                  >
                    BILLETTERIE
                  </a>
                  <a
                    href={event.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-tapage-periglacial text-tapage-periglacial px-8 py-4 rounded-md text-lg font-medium hover:bg-tapage-periglacial hover:text-tapage-cod transition-colors text-center"
                  >
                    REVIVRE
                  </a>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-tapage-tuatara p-6 rounded-lg sticky top-24">
                  <h3 className="text-lg font-alga text-tapage-periglacial mb-4">
                    Informations
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-tapage-bitter text-sm">Date</p>
                      <p className="text-tapage-periglacial font-medium">{formattedDate}</p>
                    </div>
                    
                    <div>
                      <p className="text-tapage-bitter text-sm">Lieu</p>
                      <p className="text-tapage-periglacial font-medium">{event.venue}</p>
                    </div>

                    {isUpcoming && (
                      <div className="pt-4 border-t border-tapage-mineshaft">
                        <p className="text-tapage-bitter text-sm mb-2">Statut</p>
                        <span className="inline-block bg-tapage-periglacial text-tapage-cod px-3 py-1 rounded-full text-sm font-medium">
                          À venir
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer siteData={siteData} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const events = await loadEvents();
  
  const paths = events.map((event) => ({
    params: { id: event.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const eventId = params?.id as string;
  
  const [siteData, events, event] = await Promise.all([
    loadSiteData(),
    loadEvents(),
    loadEventById(eventId),
  ]);

  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      siteData,
      event,
      events,
    },
  };
};
