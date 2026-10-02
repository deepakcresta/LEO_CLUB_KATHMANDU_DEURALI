import React, { useMemo } from 'react';
import { events } from '../content/events';
// @ts-ignore
import AccordionGallery from '../components/AccordionGallery';

export const Events: React.FC = () => {
  const carouselItems = useMemo(() => {
    return events.map(event => ({
      image: event.image,
      alt: event.title,
      label: event.title,
    }));
  }, []);

  return (
    <section id="events" className="bg-surface py-24 md:py-32 h-[100dvh] flex flex-col justify-center">
      <div className="w-full mx-auto px-5 md:px-10 flex flex-col h-full">
        <div className="w-full max-w-[1200px] mx-auto mb-6 shrink-0 mt-8">
          <span className="font-mono text-[11px] tracking-[0.06em] uppercase text-muted">
            004/ Events
          </span>
        </div>

        {/* Carousel spans available height inside 100dvh */}
        <div className="w-full grow relative rounded-[var(--panel-radius)] overflow-hidden bg-ink/50 mb-8 flex flex-col items-center justify-center p-8">
          <AccordionGallery
            items={carouselItems}
            defaultIndex={2}
            expandRatio={0.52}
            trigger="hover"
            accentColor="var(--color-primary)"
            overlayColor="#0a0713"
            textColor="#ffffff"
            height={500}
            gap={16}
            grayscale={false}
          />
        </div>
      </div>
    </section>
  );
};
