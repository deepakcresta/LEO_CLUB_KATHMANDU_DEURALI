import React from 'react';
import { siteData } from '../content/site';
// @ts-ignore
import ScrollExpand from '../components/ScrollExpand';

export const Field: React.FC = () => {
  return (
    <section id="field" className="w-full bg-ink relative">
      <ScrollExpand
        src={siteData.field.image}
        alt="Leo Club in action"
        title="003/ Field"
        scrollHint="Scroll to expand"
        useWindowScroll={true}
        startWidth={35}
        startHeight={50}
        startRadius={12}
        endRadius={0}
        mediaZoom={1.3}
        scrollDistance={1.2}
        holdDistance={0.5}
        overlayScrim={0.5}
      >
        <div className="flex flex-col items-center max-w-[800px] mx-auto text-paper px-4">
          <h2 className="font-display text-4xl md:text-6xl mb-6">Service Beyond Borders</h2>
          <p className="font-body text-lg md:text-xl text-paper/80 max-w-2xl text-center">
            When we step into the field, we leave behind titles and egos. 
            We are just hands ready to work and hearts ready to serve.
          </p>
        </div>
      </ScrollExpand>
    </section>
  );
};
