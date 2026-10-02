import React from 'react';
import { siteData } from '../content/site';
import SakuraEditorialPoster from '../components/ui/sakura-editorial-poster';

export const Footer: React.FC = () => {
  const bodyText = `${siteData.footer.address}\n${siteData.footer.email}\n${siteData.footer.phone}\n\n${siteData.footer.meetingNote}`;

  return (
    <footer className="w-full bg-ink relative z-10">
      <SakuraEditorialPoster 
        title={siteData.footer.wordmark}
        keywords={[
          { label: siteData.footer.sponsorWordmark },
          { label: "District 325 M" }
        ]}
        headline={siteData.join.line}
        body={bodyText}
        subheadline={siteData.footer.sponsorCredit}
        footerLeft={siteData.footer.links[0].label}
        footerCenter={siteData.footer.links[1].label}
        footerRight={siteData.footer.links[3].label}
        socialHandle="@LCKTMDeurali"
        sceneSrc="https://images.unsplash.com/photo-1685372463281-a8d8460979d3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        sceneAlt="National Flower Rhododendron"
        foregroundSrc={null}
        height="120vh"
        className="w-full"
      />
    </footer>
  );
};
