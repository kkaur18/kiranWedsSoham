import { MapPin, Clock, Shirt } from 'lucide-react';
import type { WeddingEvent } from '@/lib/events';
import { cn } from '@/lib/utils';
import type { T } from '@/lib/translations';

interface Props {
  event: WeddingEvent;
  detailed?: boolean;
  t: T;
}

export default function EventCard({ event, detailed = false, t }: Props) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100',
        'hover:shadow-md transition-shadow duration-300'
      )}
    >
      <div className="h-1.5 w-full" style={{ backgroundColor: event.badgeStyle }} />

      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-serif text-xl sm:text-2xl text-gray-900 font-medium leading-tight">
            {event.name}
          </h3>
          <span
            className="flex-shrink-0 text-[10px] font-sans tracking-widest uppercase font-semibold px-2.5 py-1 rounded-full text-white"
            style={{ backgroundColor: event.badgeStyle }}
          >
            {event.day}
          </span>
        </div>

        <p className="text-sm font-sans text-gray-500 font-medium mb-3">{event.dateDisplay}</p>

        <p className="text-sm font-sans text-gray-600 leading-relaxed mb-4">
          {event.description}
        </p>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-sans text-gray-600">
            <Clock size={14} className="flex-shrink-0 text-gray-400" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-start gap-2 text-sm font-sans text-gray-600">
            <MapPin size={14} className="flex-shrink-0 text-gray-400 mt-0.5" />
            <span>
              <span className="font-medium text-gray-800">{event.venue}</span>
              {event.address && `, ${event.address}`}
            </span>
          </div>
          {detailed && (
            <div className="flex items-start gap-2 text-sm font-sans text-gray-600">
              <Shirt size={14} className="flex-shrink-0 text-gray-400 mt-0.5" />
              <span>
                <span className="font-medium text-gray-700">{t.eventCard.attireLabel}:</span>{' '}
                <span className="italic">{event.attire}</span>
              </span>
            </div>
          )}
        </div>

        {detailed && event.note && (
          <div
            className={cn(
              'mt-4 text-xs font-sans leading-relaxed px-3 py-2 rounded-lg',
              event.accentColor,
              event.accentText
            )}
          >
            {event.note}
          </div>
        )}
      </div>
    </div>
  );
}
