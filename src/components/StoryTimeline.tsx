import { config } from '@/lib/config';
import type { T } from '@/lib/translations';

interface Props {
  t: T;
}

export default function StoryTimeline({ t }: Props) {
  return (
    <section className="py-20 px-4 bg-[#FFFBF2]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-maroon/60 mb-3">
            {t.story.tagline}
          </p>
          <h2 className="font-serif text-5xl text-maroon font-light">{t.story.title}</h2>
          <div className="gold-divider mt-6 max-w-xs mx-auto" />
        </div>

        <div className="relative pl-10">
          {/* Vertical line */}
          <div className="absolute left-3 top-2 bottom-6 w-px bg-gradient-to-b from-gold/10 via-gold/40 to-gold/10" />

          <div className="space-y-10">
            {config.story.map((milestone, i) => (
              <div key={i} className="relative">
                {/* Gold node */}
                <div className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-[#FFFBF2] border-2 border-gold flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                </div>

                <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold font-semibold mb-1">
                  {milestone.date}
                </p>
                <h3 className="font-serif text-2xl text-gray-900 mb-1">{milestone.title}</h3>
                <p className="font-sans text-sm text-gray-500 leading-relaxed">{milestone.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
