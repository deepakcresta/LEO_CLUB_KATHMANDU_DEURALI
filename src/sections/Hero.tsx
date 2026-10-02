import React from 'react';
import { siteData } from '../content/site';
import { Button } from '../components/Button';
import { m } from 'motion/react';
import { CloudShader } from '../components/ui/cloud-shader';
// @ts-ignore
import ClickSpark from '../components/ClickSpark';
// @ts-ignore
import StickerPeel from '../components/StickerPeel';
import member1 from '../assets/leo_club_images/club_members/asmita_koirala_secretary.jpg';
import member2 from '../assets/leo_club_images/club_members/anish_thapa_joint_secretary.jpg';
import member3 from '../assets/leo_club_images/club_members/susmita_bhandari_mdt_coordinator.jpg';

export const Hero: React.FC = () => {
  return (
    <ClickSpark sparkColor="#d3a758" sparkSize={10} sparkRadius={30} sparkCount={6} duration={600}>
      <section 
        id="top" 
        className="relative w-full min-h-[100dvh] flex flex-col justify-center overflow-hidden cursor-crosshair"
      >
        {/* Cloud Shader Background */}
        <div className="absolute inset-0 z-0">
          <CloudShader 
            className="w-full h-full"
            speed={0.4}
            count={5}
            skyTopColor="#08142e"
            skyBottomColor="#0B1B3F"
            cloudColor="#12285A"
          />
          {/* Subtle overlay to ensure text contrast if clouds get bright */}
          <div className="absolute inset-0 bg-ink/30 z-10 pointer-events-none" />
          {/* Gradient fade to seamlessly blend into the next section */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent z-10 pointer-events-none" />
        </div>

        {/* Floating Decorative Stickers (Desktop) */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
          <StickerPeel
            imageSrc={siteData.signature.stickers[0].image}
            width={120}
            rotate={-15}
            peelBackHoverPct={30}
            peelBackActivePct={45}
            shadowIntensity={0.4}
            initialPosition={{ x: '12%', y: '25%' }}
            className="pointer-events-auto opacity-70 hover:opacity-100 transition-opacity drop-shadow-2xl"
          />
          <StickerPeel
            imageSrc={siteData.quote.stickers[0].image}
            width={100}
            rotate={20}
            peelBackHoverPct={30}
            peelBackActivePct={45}
            shadowIntensity={0.4}
            initialPosition={{ x: '82%', y: '18%' }}
            className="pointer-events-auto opacity-70 hover:opacity-100 transition-opacity drop-shadow-2xl"
          />
          <StickerPeel
            imageSrc={siteData.join.sticker}
            width={140}
            rotate={-5}
            peelBackHoverPct={30}
            peelBackActivePct={45}
            shadowIntensity={0.4}
            initialPosition={{ x: '75%', y: '70%' }}
            className="pointer-events-auto opacity-70 hover:opacity-100 transition-opacity drop-shadow-2xl"
          />
        </div>

        {/* Floating Glassmorphism Badge */}
        <m.div
          initial={{ opacity: 0, scale: 0.9, x: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="absolute bottom-24 left-8 lg:left-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center gap-4 shadow-2xl z-20 pointer-events-none hidden md:flex"
        >
          <div className="flex -space-x-3">
            <img src={member1} alt="Member" className="w-10 h-10 rounded-full border-2 border-ink object-cover grayscale" />
            <img src={member2} alt="Member" className="w-10 h-10 rounded-full border-2 border-ink object-cover grayscale" />
            <img src={member3} alt="Member" className="w-10 h-10 rounded-full border-2 border-ink object-cover grayscale" />
            <div className="w-10 h-10 rounded-full border-2 border-ink bg-surface flex items-center justify-center font-mono text-[10px] text-paper">+40</div>
          </div>
          <div className="text-left">
            <p className="font-display text-paper text-base leading-none mb-1">A Growing Community</p>
            <p className="font-body text-xs text-muted m-0">Serving since 2017</p>
          </div>
        </m.div>

        <div className="relative z-20 w-full max-w-[1200px] mx-auto px-5 md:px-10 flex flex-col items-center text-center mt-10 md:mt-20">
          
          {/* Label */}
          <m.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="block font-mono text-[11px] tracking-[0.06em] uppercase text-muted mb-8"
          >
            {siteData.wordmark.meta}
          </m.span>

          {/* Headline */}
          <m.h1 
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[1000px] font-display text-[clamp(44px,7vw,110px)] leading-[1.05] tracking-[-0.02em] text-paper mb-8 drop-shadow-lg"
            dangerouslySetInnerHTML={{ __html: siteData.hero.headline.replace('*youth*', '<i class="text-accent italic font-normal">youth</i>') }}
          />

          {/* Description & CTA */}
          <m.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-center gap-8"
          >
            <p className="font-body text-base md:text-lg text-muted max-w-[480px] leading-[1.6]">
              {siteData.hero.sentence}
            </p>
            <Button href="#join">{siteData.hero.cta}</Button>
          </m.div>

        </div>
      </section>
    </ClickSpark>
  );
};
