import React from 'react';
import { siteData } from '../content/site';
import { m } from 'motion/react';
// @ts-ignore
import StickerPeel from '../components/StickerPeel';

export const Signature: React.FC = () => {
  return (
    <section className="bg-ink px-4 py-24 md:py-32 min-h-[100dvh] flex flex-col justify-center">
      <div className="w-full max-w-[1200px] mx-auto bg-surface rounded-[var(--panel-radius)] p-10 md:p-24 flex flex-col md:flex-row items-center justify-between relative overflow-hidden group gap-12 md:gap-0">
        
        {/* Background Stickers */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-80 md:opacity-100 z-0 overflow-hidden">
          <StickerPeel
            imageSrc={siteData.signature.stickers[0].image}
            width={160}
            rotate={-12}
            peelBackHoverPct={25}
            peelBackActivePct={45}
            shadowIntensity={0.3}
            initialPosition={{ x: '10%', y: '10%' }}
            className="hidden md:block pointer-events-auto"
          />
          <StickerPeel
            imageSrc={siteData.signature.stickers[1].image}
            width={120}
            rotate={25}
            peelBackHoverPct={25}
            peelBackActivePct={45}
            shadowIntensity={0.5}
            initialPosition={{ x: '80%', y: '15%' }}
            className="pointer-events-auto hidden md:block"
          />
          <StickerPeel
            imageSrc={siteData.signature.stickers[2].image}
            width={140}
            rotate={-5}
            peelBackHoverPct={25}
            peelBackActivePct={45}
            shadowIntensity={0.3}
            initialPosition={{ x: '45%', y: '75%' }}
            className="pointer-events-auto hidden md:block"
          />
          {/* Mobile versions */}
          <StickerPeel
            imageSrc={siteData.signature.stickers[1].image}
            width={90}
            rotate={25}
            peelBackHoverPct={25}
            peelBackActivePct={45}
            shadowIntensity={0.5}
            initialPosition={{ x: '80%', y: '15%' }}
            className="pointer-events-auto md:hidden"
          />
          <StickerPeel
            imageSrc={siteData.signature.stickers[2].image}
            width={110}
            rotate={-5}
            peelBackHoverPct={25}
            peelBackActivePct={45}
            shadowIntensity={0.3}
            initialPosition={{ x: '5%', y: '75%' }}
            className="pointer-events-auto md:hidden"
          />
        </div>

        {/* The SVG Skyline (Left) */}
        <div className="w-full md:w-[55%] relative z-10 flex items-center justify-center md:justify-start">
          <svg 
            viewBox="0 0 800 200" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto text-accent opacity-90 group-hover:opacity-100 transition-opacity duration-700 max-w-[600px]"
          >
            <m.path
              d="M 50 150 Q 100 120 150 70 T 250 80 Q 280 140 350 140 L 400 140 Q 420 100 450 120 L 460 140 L 500 140 Q 520 80 540 140 L 580 140 L 600 120 L 620 140 L 750 140"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
              className="motion-reduce:!opacity-100 motion-reduce:![stroke-dashoffset:0]"
            />
            {/* Ornament */}
            <m.g
              initial={{ opacity: 0 }}
              whileInView={{ opacity: [0, 1, 0.6, 1] }}
              viewport={{ once: true }}
              transition={{ 
                duration: 8, 
                ease: "linear", 
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1.6
              }}
              className="motion-reduce:!opacity-100"
            >
              <line x1="390" y1="170" x2="410" y2="170" stroke="currentColor" strokeWidth="2.5" />
              <rect x="397.5" y="167.5" width="5" height="5" transform="rotate(45 400 170)" stroke="currentColor" strokeWidth="2.5" />
            </m.g>
          </svg>
        </div>

        {/* Typography (Right) */}
        <div className="w-full md:w-[45%] relative z-10 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary leading-[1.05] tracking-tight">
            {siteData.signature.titleLine1}
            <br />
            <span className="text-accent italic">{siteData.signature.titleLine2}</span>
          </h2>
          
          <div className="h-[1px] w-12 bg-muted/30 my-2"></div>
          
          <p className="font-mono text-[11px] md:text-xs tracking-[0.08em] uppercase text-muted">
            {siteData.signature.caption}
          </p>
        </div>

      </div>
    </section>
  );
};
