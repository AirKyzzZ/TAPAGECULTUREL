import Link from 'next/link';
import { Event } from '../types';
import { DateHelper } from '../utils/dateHelper';

interface EventCardProps {
  event: Event;
  variant?: 'default' | 'featured';
}

export default function EventCard({ event, variant = 'default' }: EventCardProps) {
  const isUpcoming = DateHelper.isUpcoming(event.date);
  const formattedDate = DateHelper.formatFrenchDate(event.date);

  return (
    <div className={`group relative overflow-hidden rounded-lg bg-tapage-tuatara transition-all duration-300 hover:scale-105 ${
      variant === 'featured' ? 'col-span-full lg:col-span-2' : ''
    }`}>
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={event.cover}
          alt={`${event.title} - ${event.venue}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tapage-cod/80 via-transparent to-transparent" />
        
        {/* Status badge */}
        {isUpcoming && (
          <div className="absolute top-4 left-4 bg-tapage-periglacial text-tapage-cod px-3 py-1 rounded-full text-sm font-medium">
            À venir
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-aura text-tapage-periglacial mb-2">
            {event.title}
          </h3>
          <p className="text-tapage-bitter text-sm mb-2">
            {formattedDate}
          </p>
          <p className="text-tapage-stack text-sm">
            {event.venue}
          </p>
        </div>

        {/* Lineup */}
        {event.lineup.length > 0 && (
          <div className="mb-4">
            <p className="text-tapage-xanadu text-sm mb-2">Lineup :</p>
            <div className="flex flex-wrap gap-2">
              {event.lineup.map((artist, index) => (
                <span
                  key={index}
                  className="bg-tapage-mineshaft text-tapage-periglacial px-2 py-1 rounded text-xs"
                >
                  {artist}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          {isUpcoming ? (
            <a
              href={event.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tapage-periglacial text-tapage-cod px-4 py-2 rounded text-center font-medium hover:bg-white transition-colors flex-1"
            >
              BILLETTERIE
            </a>
          ) : (
            <button
              disabled
              className="bg-tapage-mineshaft text-tapage-stack px-4 py-2 rounded text-center font-medium cursor-not-allowed flex-1 opacity-60"
            >
              BILLETTERIE FERMÉE
            </button>
          )}
          <a
            href={event.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-tapage-periglacial text-tapage-periglacial px-4 py-2 rounded text-center font-medium hover:bg-tapage-periglacial hover:text-tapage-cod transition-colors flex-1 min-w-0 flex items-center justify-center"
          >
            REVIVRE
          </a>
        </div>

        {/* Link to event page */}
        <Link
          href={`/events/${event.id}`}
          className="absolute inset-0 z-10"
          aria-label={`Voir les détails de ${event.title}`}
        />
      </div>
    </div>
  );
}
