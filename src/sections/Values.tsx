import React, { useRef, useEffect } from 'react';
import { pillars } from '../content/pillars';
import gsap from 'gsap';

export const Values: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const thumbnailRef = useRef<HTMLDivElement>(null);
  const xToRef = useRef<gsap.QuickToFunc | null>(null);
  const yToRef = useRef<gsap.QuickToFunc | null>(null);

  useEffect(() => {
    const projectThumbnail = thumbnailRef.current;
    const projectsContainer = containerRef.current?.querySelector(".hover-img-projects") as HTMLElement | null;

    if (!projectThumbnail || !projectsContainer) return;

    // We use matchMedia to only run GSAP cursor effects on desktop (md up)
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 768px)", () => {
      const projectElements = gsap.utils.toArray(".hover-img-project", projectsContainer) as HTMLElement[];
      const thumbnails = gsap.utils.toArray(".hover-img-thumbnail", projectThumbnail) as HTMLElement[];

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
              // Fix for glitch: if it's currently invisible, snap it instantly to the cursor
              // before it scales up to avoid the "fly-in from 0,0" effect on first load/scroll.
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

          // We need to listen to mouseenter to get the event object
          // but addEventListener requires a compatible signature. 
          // TypeScript will accept e as Event, so we cast it to MouseEvent
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
    <section id="values" className="bg-ink py-24 md:py-32 min-h-[100dvh] flex flex-col justify-center" ref={containerRef}>
      <div className="w-full max-w-[1200px] mx-auto px-5 md:px-10 flex flex-col">
        
        <div className="w-full mb-12 md:mb-16">
          <span className="font-mono text-[11px] tracking-[0.06em] uppercase text-muted">
            002/ Values
          </span>
        </div>
        
        <div className="hover-img-projects w-full flex flex-col">
          {pillars.map((pillar) => (
            <div 
              key={pillar.title}
              className="hover-img-project group relative border-b border-line py-8 md:py-16 flex flex-col md:flex-row md:items-center justify-between cursor-default first:border-t"
            >
              <div className="flex items-center gap-6">
                {/* Mobile thumbnail */}
                <div className="w-16 h-16 md:hidden rounded overflow-hidden shrink-0">
                  <img src={pillar.image} alt={pillar.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                
                <h3 className="font-display text-4xl md:text-[8vw] lg:text-[100px] leading-[0.98] tracking-[-0.02em] text-paper group-hover:text-accent transition-colors duration-500">
                  {pillar.title}
                </h3>
              </div>

              <div className="mt-4 md:mt-0 md:max-w-[300px] text-left md:text-right">
                <p className="font-body text-base text-muted group-hover:text-paper transition-colors duration-500">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hover Thumbnail Wrapper (Desktop Only) */}
      <div
          className="hidden md:flex hover-img-thumbnail-wrapper fixed top-0 left-0 w-[320px] h-[220px] lg:w-[400px] lg:h-[280px] rounded-xl overflow-hidden pointer-events-none z-50 flex-col shadow-2xl"
          ref={thumbnailRef}
      >
          {pillars.map((pillar, index) => (
              <div className="hover-img-thumbnail w-full h-[220px] lg:h-[280px] shrink-0" key={index}>
                  <img src={pillar.image} alt={pillar.title} className="w-full h-full object-cover" />
              </div>
          ))}
      </div>
    </section>
  );
};
