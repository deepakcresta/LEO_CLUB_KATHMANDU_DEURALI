import React, { useRef, useEffect } from 'react';
import { team } from '../content/team';
import { siteData } from '../content/site';
import gsap from 'gsap';
// @ts-ignore
import StickerPeel from '../components/StickerPeel';

export const Team: React.FC = () => {
  const districtLead = team.find(t => t.isDistrict);
  const clubTeam = team.filter(t => !t.isDistrict);

  const containerRef = useRef<HTMLDivElement>(null);
  const thumbnailRef = useRef<HTMLDivElement>(null);
  const xToRef = useRef<gsap.QuickToFunc | null>(null);
  const yToRef = useRef<gsap.QuickToFunc | null>(null);

  useEffect(() => {
    const projectThumbnail = thumbnailRef.current;
    const projectsContainer = containerRef.current?.querySelector(".team-hover-projects") as HTMLElement | null;

    if (!projectThumbnail || !projectsContainer) return;

    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 768px)", () => {
      const projectElements = gsap.utils.toArray(".team-hover-project", projectsContainer) as HTMLElement[];
      const thumbnails = gsap.utils.toArray(".team-hover-thumbnail", projectThumbnail) as HTMLElement[];

      gsap.set(projectThumbnail, { scale: 0, xPercent: -50, yPercent: -50 });

      xToRef.current = gsap.quickTo(projectThumbnail, "x", {
          duration: 0.4,
          ease: "power3.out",
      });
      yToRef.current = gsap.quickTo(projectThumbnail, "y", {
          duration: 0.4,
          ease: "power3.out",
      });

      const handleMouseMove = (e: MouseEvent) => {
          xToRef.current?.(e.clientX);
          yToRef.current?.(e.clientY);
      };

      const handleMouseLeave = () => {
          gsap.to(projectThumbnail, {
              scale: 0,
              duration: 0.3,
              ease: "power2.out",
              overwrite: "auto",
          });
      };

      projectsContainer.addEventListener("mousemove", handleMouseMove);
      projectsContainer.addEventListener("mouseleave", handleMouseLeave);

      const projectListeners: Array<() => void> = [];

      projectElements.forEach((project, index) => {
          const handleMouseEnter = (e: MouseEvent) => {
              if (gsap.getProperty(projectThumbnail, "scale") === 0) {
                  gsap.set(projectThumbnail, { x: e.clientX, y: e.clientY });
                  xToRef.current?.(e.clientX);
                  yToRef.current?.(e.clientY);
              }

              gsap.to(projectThumbnail, {
                  scale: 1,
                  duration: 0.4,
                  ease: "power2.out",
                  overwrite: "auto",
              });

              gsap.to(thumbnails, {
                  yPercent: -100 * index,
                  duration: 0.4,
                  ease: "power2.out",
                  overwrite: "auto",
              });
          };

          const listener = (e: Event) => handleMouseEnter(e as MouseEvent);
          
          project.addEventListener("mouseenter", listener);
          projectListeners.push(() =>
              project.removeEventListener("mouseenter", listener)
          );
      });

      return () => {
          projectsContainer.removeEventListener("mousemove", handleMouseMove);
          projectsContainer.removeEventListener("mouseleave", handleMouseLeave);
          projectListeners.forEach((cleanup) => cleanup());
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section id="team" className="bg-ink py-24 md:py-32 min-h-[100dvh] flex flex-col justify-center relative overflow-hidden" ref={containerRef}>
      {/* Interactive Sticker */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <StickerPeel
          imageSrc={siteData.team.sticker}
          width={130}
          rotate={25}
          peelBackHoverPct={25}
          peelBackActivePct={45}
          shadowIntensity={0.5}
          initialPosition={{ x: '80%', y: '10%' }}
          className="pointer-events-auto hidden md:block opacity-60 hover:opacity-100 transition-opacity"
        />
        <StickerPeel
          imageSrc={siteData.team.sticker}
          width={90}
          rotate={25}
          peelBackHoverPct={25}
          peelBackActivePct={45}
          shadowIntensity={0.5}
          initialPosition={{ x: '75%', y: '5%' }}
          className="pointer-events-auto md:hidden opacity-60 hover:opacity-100 transition-opacity"
        />
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-5 md:px-10 relative z-10">
        
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between md:items-end gap-6 relative">
          <span className="font-mono text-[11px] tracking-[0.06em] uppercase text-muted">
            005/ Team
          </span>
          {districtLead && (
            <div className="text-left md:text-right relative">
              <div className="relative z-10 pointer-events-none">
                <span className="block font-mono text-[11px] tracking-[0.06em] uppercase text-muted mb-1">
                  District Theme
                </span>
                <span className="font-mono text-[11px] tracking-[0.06em] uppercase text-paper">
                  {districtLead.role}: {districtLead.name}
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="team-hover-projects flex flex-col">
          {clubTeam.map((member, idx) => (
            <div 
              key={idx} 
              className="team-hover-project group flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 border-b border-line first:border-t cursor-default"
            >
              <div className="w-full md:w-1/4 mb-4 md:mb-0">
                <span className="font-mono text-[11px] tracking-[0.06em] uppercase text-muted">
                  {member.role}
                </span>
              </div>
              
              <div className="w-full md:w-2/4 flex items-center gap-4 mb-4 md:mb-0">
                {/* Mobile thumbnail - hidden on desktop since desktop uses the hover effect */}
                <div className="md:hidden flex-shrink-0 w-12 h-12 rounded-full overflow-hidden bg-white/5 border border-line flex items-center justify-center">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  ) : (
                    <span className="font-mono text-sm text-muted uppercase">
                      {member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </span>
                  )}
                </div>
                <span className="font-display text-xl md:text-3xl lg:text-4xl text-paper group-hover:text-accent transition-colors duration-300">
                  {member.name}
                </span>
              </div>
              
              <div className="w-full md:w-1/4 md:text-right">
                <span className="font-mono text-[11px] tracking-[0.06em] uppercase text-muted">
                  {member.term || "L.Y. 2026/27"}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Hover Thumbnail Wrapper (Desktop Only) */}
      <div
          className="hidden md:flex hover-img-thumbnail-wrapper fixed top-0 left-0 w-[180px] h-[240px] rounded-2xl overflow-hidden pointer-events-none z-50 flex-col shadow-2xl bg-surface border border-line"
          ref={thumbnailRef}
      >
          {clubTeam.map((member, index) => (
              <div className="team-hover-thumbnail w-full h-[240px] shrink-0 flex items-center justify-center bg-white/5" key={index}>
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="font-mono text-3xl text-muted uppercase">
                      {member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </span>
                  )}
              </div>
          ))}
      </div>

    </section>
  );
};
