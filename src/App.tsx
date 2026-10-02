import React, { useEffect, Suspense } from 'react';
import Lenis from 'lenis';
import { LazyMotion, domAnimation } from 'motion/react';

import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';

// Code split below the fold sections
const Statement = React.lazy(() => import('./sections/Statement').then(m => ({ default: m.Statement })));
const Values = React.lazy(() => import('./sections/Values').then(m => ({ default: m.Values })));
const Signature = React.lazy(() => import('./sections/Signature').then(m => ({ default: m.Signature })));
const Field = React.lazy(() => import('./sections/Field').then(m => ({ default: m.Field })));
const FocusAreas = React.lazy(() => import('./sections/FocusAreas').then(m => ({ default: m.FocusAreas })));
const Events = React.lazy(() => import('./sections/Events').then(m => ({ default: m.Events })));
const Quote = React.lazy(() => import('./sections/Quote').then(m => ({ default: m.Quote })));
const Team = React.lazy(() => import('./sections/Team').then(m => ({ default: m.Team })));
const Join = React.lazy(() => import('./sections/Join').then(m => ({ default: m.Join })));
const Footer = React.lazy(() => import('./sections/Footer').then(m => ({ default: m.Footer })));

// @ts-ignore
import ClickSpark from './components/ClickSpark';

const LazySection = ({ children, id }: { children: React.ReactNode, id: string }) => {
  const [hasRendered, setHasRendered] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (hasRendered) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasRendered(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200% 0px 200% 0px' } // Load when 2 viewports away
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasRendered]);

  return (
    <div ref={ref} id={`wrapper-${id}`} className={hasRendered ? "" : "min-h-[100vh]"}>
      {hasRendered ? children : null}
    </div>
  );
};

function App() {
  useEffect(() => {
    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      const lenis = new Lenis({
        autoRaf: true,
        lerp: 0.1,
        syncTouch: false,
      });

      // Handle anchor links via event delegation
      const handleAnchorClick = (e: MouseEvent) => {
        const target = (e.target as HTMLElement).closest('a[href^="#"]');
        if (target) {
          const href = target.getAttribute('href');
          if (href && href !== '#') {
            let targetElement = document.querySelector(href);
            
            // If the section hasn't lazy-loaded yet, scroll to its wrapper
            if (!targetElement) {
              const baseId = href.replace('#', '');
              targetElement = document.querySelector(`#wrapper-${baseId}`);
            }

            if (targetElement) {
              e.preventDefault();
              lenis.scrollTo(targetElement as HTMLElement, { offset: -60 }); // Navbar scrolled offset
            }
          }
        }
      };
      document.documentElement.addEventListener('click', handleAnchorClick);

      return () => {
        document.documentElement.removeEventListener('click', handleAnchorClick);
        lenis.destroy();
      };
    }
  }, []);

  const sections = [
    { id: 'about', Component: Statement },
    { id: 'values', Component: Values },
    { id: 'signature', Component: Signature },
    { id: 'field', Component: Field },
    { id: 'focus', Component: FocusAreas },
    { id: 'events', Component: Events },
    { id: 'quote', Component: Quote },
    { id: 'team', Component: Team },
    { id: 'join', Component: Join },
  ];

  return (
    <ClickSpark sparkColor="var(--color-accent)" sparkSize={12} sparkRadius={24} sparkCount={6} duration={500}>
      <LazyMotion features={domAnimation}>
        <Navbar />
        <main>
          <Hero />
          {sections.map(({ id, Component }) => (
            <LazySection key={id} id={id}>
              <Suspense fallback={<div className="min-h-[100vh] w-full bg-ink" />}>
                <Component />
              </Suspense>
            </LazySection>
          ))}
        </main>
        <LazySection id="footer">
          <Suspense fallback={<div className="min-h-[50vh] w-full bg-ink" />}>
            <Footer />
          </Suspense>
        </LazySection>
      </LazyMotion>
    </ClickSpark>
  );
}

export default App;
