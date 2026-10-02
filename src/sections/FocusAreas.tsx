import React from 'react';
import { focusAreas } from '../content/focusAreas';
// @ts-ignore
import StickerPeel from '../components/StickerPeel';

export const FocusAreas: React.FC = () => {
  return (
    <section className="bg-ink py-24 md:py-32 min-h-[100dvh] flex flex-col justify-center relative overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto px-5 md:px-10">
        
        <div className="mb-16 relative z-20 pointer-events-none">
          <span className="font-mono text-[11px] tracking-[0.06em] uppercase text-muted">
            003/ Focus
          </span>
        </div>

        {/* Interactive Stickers */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          <StickerPeel
            imageSrc={focusAreas[0].sticker}
            width={130}
            rotate={15}
            peelBackHoverPct={30}
            peelBackActivePct={45}
            shadowIntensity={0.3}
            initialPosition={{ x: '10%', y: '15%' }}
            className="pointer-events-auto hidden md:block opacity-60 hover:opacity-100 transition-opacity"
          />
          <StickerPeel
            imageSrc={focusAreas[1].sticker}
            width={110}
            rotate={-20}
            peelBackHoverPct={30}
            peelBackActivePct={45}
            shadowIntensity={0.3}
            initialPosition={{ x: '50%', y: '70%' }}
            className="pointer-events-auto hidden md:block opacity-60 hover:opacity-100 transition-opacity"
          />
          <StickerPeel
            imageSrc={focusAreas[2].sticker}
            width={140}
            rotate={10}
            peelBackHoverPct={30}
            peelBackActivePct={45}
            shadowIntensity={0.3}
            initialPosition={{ x: '85%', y: '25%' }}
            className="pointer-events-auto hidden md:block opacity-60 hover:opacity-100 transition-opacity"
          />
          {/* Mobile version */}
          <StickerPeel
            imageSrc={focusAreas[0].sticker}
            width={90}
            rotate={15}
            peelBackHoverPct={30}
            peelBackActivePct={45}
            shadowIntensity={0.3}
            initialPosition={{ x: '5%', y: '5%' }}
            className="pointer-events-auto md:hidden opacity-40 hover:opacity-100 transition-opacity"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {focusAreas.map((area) => (
            <div key={area.category} className="flex flex-col">
              <h4 className="font-display text-2xl text-paper mb-6">{area.category}</h4>
              <ul className="flex flex-col border-t border-line">
                {area.items.map((item, idx) => (
                  <li 
                    key={idx} 
                    className="flex justify-between items-center py-4 border-b border-line group"
                  >
                    <span className="font-body text-sm text-paper opacity-90 group-hover:opacity-100 transition-opacity">
                      {item.name}
                    </span>
                    <span className="font-mono text-[11px] text-muted">
                      {item.date}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
