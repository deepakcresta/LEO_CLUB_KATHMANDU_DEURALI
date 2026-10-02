import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteData } from '../content/site';
// @ts-ignore
import Masonry from '../components/Masonry';

import img1 from '../assets/leo_club_images/blood_donation/780393661_1065498129205968_8944803186098507456_n.jpg';
import img2 from '../assets/leo_club_images/dentist/598582135_1270786135093974_4898303596820574781_n.jpg';
import img3 from '../assets/leo_club_images/hiking/763098592_1466149545557631_2147170844655033755_n.jpg';
import img4 from '../assets/leo_club_images/hiking/759965002_1466149262224326_9188568154172839685_n.jpg';
import img5 from '../assets/leo_club_images/hunger_relief/760654681_2135865077338048_4407887526877710913_n.jpg';
import img6 from '../assets/leo_club_images/food_and_enjoyment/759786844_1465315982307654_8055892372552973675_n.jpg';
import img7 from '../assets/leo_club_images/meetings/762916799_1466181995554386_6713952279331822631_n.jpg';
import img8 from '../assets/leo_club_images/meetings/806453323_1502551961917389_2600958914579236825_n.jpg';

gsap.registerPlugin(ScrollTrigger);

const masonryItems = [
  { id: 1, img: img1, height: 400 },
  { id: 2, img: img3, height: 350 },
  { id: 3, img: img5, height: 480 },
  { id: 4, img: img7, height: 400 },
  { id: 5, img: img2, height: 350 },
  { id: 6, img: img4, height: 420 },
  { id: 7, img: img6, height: 300 },
  { id: 8, img: img8, height: 400 },
];

export const Statement: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray('.stagger-up');
      gsap.from(elements, {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 70%',
        }
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="bg-paper text-ink on-paper py-24 md:py-32 relative overflow-hidden" ref={container}>
      <div className="w-full max-w-[1400px] mx-auto px-5 md:px-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
        {/* Left Side: Masonry Gallery & Quote */}
        <div className="w-full lg:w-1/2 flex flex-col gap-16 order-2 lg:order-1">
          <div className="w-full h-[550px] md:h-[750px] relative overflow-hidden rounded-md">
            {/* A slight fade out at the bottom of the masonry grid so it blends into the paper */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-paper to-transparent z-10 pointer-events-none" />
            
            <Masonry 
              items={masonryItems} 
              ease="power3.out"
              duration={0.8}
              stagger={0.08}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.97}
              blurToFocus={true}
            />
          </div>
          
          {/* Quote placed below masonry to balance height */}
          <h3 className="stagger-up font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-[-0.02em] text-accent italic md:pr-12">
            {siteData.statement.part3}
          </h3>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col order-1 lg:order-2 pt-0 lg:pt-12">
          <span className="stagger-up font-mono text-[11px] tracking-[0.06em] uppercase text-muted-on-paper mb-12">
            {siteData.statement.label}
          </span>
          
          <p className="stagger-up font-display text-3xl md:text-4xl lg:text-[44px] leading-[1.25] text-ink mb-12">
            {siteData.statement.part1}
          </p>
          
          <p className="stagger-up font-body text-base md:text-lg leading-[1.6] text-ink/70 max-w-lg">
            {siteData.statement.part2}
          </p>
        </div>

      </div>
    </section>
  );
};
