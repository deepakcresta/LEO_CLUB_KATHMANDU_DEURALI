import React from 'react';
import { siteData } from '../content/site';
import { ArrowRight } from 'lucide-react';
import { m } from 'motion/react';
// @ts-ignore
import StickerPeel from '../components/StickerPeel';

export const Join: React.FC = () => {
  return (
    <section id="join" className="bg-ink px-4 py-24 md:py-32 min-h-[100dvh] flex flex-col justify-center">
      <div className="w-full max-w-[1200px] mx-auto bg-accent rounded-[var(--panel-radius)] p-12 md:py-32 flex flex-col items-center justify-center text-center relative overflow-hidden">
        
        {/* Interactive Sticker Bounds */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="w-full h-full relative" style={{ pointerEvents: 'auto' }}>
            <StickerPeel
              imageSrc={siteData.join.sticker}
              width={140}
              rotate={15}
              peelBackHoverPct={25}
              peelBackActivePct={45}
              shadowIntensity={0.5}
              initialPosition={{ x: 30, y: 30 }}
            />
          </div>
        </div>

        <h2 className="font-display text-4xl md:text-6xl text-on-accent mb-12 max-w-2xl relative z-20">
          {siteData.join.line}
        </h2>

        <div className="flex flex-col sm:flex-row items-center gap-6 mb-12 relative z-20">
          {siteData.join.actions.map((action, idx) => (
            <m.a
              key={idx}
              href={action.href}
              className="group flex items-center gap-2"
              whileHover="hover"
            >
              <span className="bg-on-accent text-accent px-6 py-3 rounded-full font-medium text-sm transition-opacity duration-300 group-hover:opacity-90 shadow-xl shadow-black/10">
                {action.label}
              </span>
              <span className="bg-on-accent text-accent w-[44px] h-[44px] rounded-full flex items-center justify-center transition-opacity duration-300 group-hover:opacity-90 shadow-xl shadow-black/10">
                <m.span
                  variants={{
                    hover: { x: 4 }
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ArrowRight size={18} strokeWidth={2.5} />
                </m.span>
              </span>
            </m.a>
          ))}
        </div>

        <p className="font-mono text-[11px] tracking-[0.06em] uppercase text-on-accent/70 relative z-20">
          {siteData.join.nextMeeting}
        </p>

      </div>
    </section>
  );
};
