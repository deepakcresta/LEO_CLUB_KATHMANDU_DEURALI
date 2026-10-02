import React from 'react';
import { siteData } from '../content/site';
// @ts-ignore
import StickerPeel from '../components/StickerPeel';

export const Quote: React.FC = () => {
  return (
    <section className="bg-paper text-ink on-paper py-32 md:py-48 flex items-center justify-center min-h-[100dvh] relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Desktop Stickers (Pushed to the far corners) */}
        <StickerPeel
          imageSrc={siteData.quote.stickers[0].image}
          width={180} rotate={-12}
          initialPosition={{ x: '5%', y: '10%' }}
          className="pointer-events-auto opacity-70 hover:opacity-100 transition-opacity hidden md:block"
        />
        <StickerPeel
          imageSrc={siteData.quote.stickers[1].image}
          width={160} rotate={15}
          initialPosition={{ x: '85%', y: '15%' }}
          className="pointer-events-auto opacity-70 hover:opacity-100 transition-opacity hidden md:block"
        />
        <StickerPeel
          imageSrc={siteData.quote.stickers[2].image}
          width={200} rotate={8}
          initialPosition={{ x: '10%', y: '75%' }}
          className="pointer-events-auto opacity-70 hover:opacity-100 transition-opacity hidden md:block"
        />
        <StickerPeel
          imageSrc={siteData.quote.stickers[3].image}
          width={150} rotate={-18}
          initialPosition={{ x: '80%', y: '80%' }}
          className="pointer-events-auto opacity-70 hover:opacity-100 transition-opacity hidden md:block"
        />

        {/* Mobile Stickers (Fewer, smaller, pushed to absolute edges) */}
        <StickerPeel
          imageSrc={siteData.quote.stickers[0].image}
          width={100} rotate={-8}
          initialPosition={{ x: '2%', y: '5%' }}
          className="pointer-events-auto opacity-70 hover:opacity-100 transition-opacity md:hidden"
        />
        <StickerPeel
          imageSrc={siteData.quote.stickers[1].image}
          width={90} rotate={12}
          initialPosition={{ x: '75%', y: '85%' }}
          className="pointer-events-auto opacity-70 hover:opacity-100 transition-opacity md:hidden"
        />
      </div>
      <div className="w-full max-w-[800px] mx-auto px-5 md:px-10 text-center relative">
        <h2 className="font-display text-3xl md:text-[40px] leading-[1.3] text-ink mb-8 relative z-10 pointer-events-none">
          "{siteData.quote.text}"
        </h2>
        <p className="font-mono text-[11px] tracking-[0.06em] uppercase text-muted-on-paper relative z-10 pointer-events-none">
          — {siteData.quote.signature}
        </p>
      </div>
    </section>
  );
};
