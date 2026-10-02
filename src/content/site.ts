import sigSticker1 from '../assets/leo_club_images/blood_donation/780393661_1065498129205968_8944803186098507456_n.jpg';
import sigSticker2 from '../assets/leo_club_images/hunger_relief/761215871_1547608773666065_2879461122498994174_n.jpg';
import sigSticker3 from '../assets/leo_club_images/meetings/806318409_1502551968584055_8196308767073847089_n.jpg';
import fieldImg from '../assets/leo_club_images/hunger_relief/762903736_1777620517024072_2720667587331343307_n.jpg';
import quoteSticker from '../assets/leo_club_images/dentist/597874731_1270785791760675_1776381784674965786_n.jpg';
import joinSticker from '../assets/leo_club_images/hiking/759965002_1466149262224326_9188568154172839685_n.jpg';
import teamSticker from '../assets/leo_club_images/meetings/806453343_1502551875250731_442538012732861855_n.jpg';

export const siteData = {
  wordmark: {
    full: "LEO CLUB OF KATHMANDU DEURALI",
    short: "LCKD",
    meta: "LEO DISTRICT COUNCIL 325 M. NEPAL. L.Y. 2026/27",
  },
  nav: {
    links: [
      { label: "About", href: "#about" },
      { label: "Values", href: "#values" },
      { label: "Events", href: "#events" },
      { label: "Team", href: "#team" },
    ],
    button: "Join the club"
  },
  hero: {
    headline: "Unity for humanity, *youth* in service.",
    sentence: "One of the largest Leo clubs in District 325 M, volunteering across Kathmandu since 2017.",
    cta: "Join the club",
    image: fieldImg,
  },
  statement: {
    label: "001/ The club",
    part1: "The Leo Club of Kathmandu Deurali is one of the leading volunteering clubs under Leo District Council 325 M, Nepal. Founded in 2017 and sponsored by the Lions Club of Kathmandu Deurali, we have grown into one of the largest clubs in the district.",
    part2: "For the Leo year 2026 to 27 we are looking for energetic, enthusiastic members to work with the theme set by our District President, Leo Dikshyanta Pratap Khand.",
    part3: "Come to serve, stay to lead.",
    images: [
      "/src/assets/leo_club_images/meetings/806453323_1502551961917389_2600958914579236825_n.jpg", // Photo 1
      "/src/assets/leo_club_images/hunger_relief/760654681_2135865077338048_4407887526877710913_n.jpg" // Photo 2
    ]
  },
  signature: {
    titleLine1: "Kathmandu",
    titleLine2: "Deurali.",
    caption: "Serving humanity since 2017.",
    stickers: [
      { image: sigSticker1 },
      { image: sigSticker2 },
      { image: sigSticker3 }
    ]
  },
  field: {
    image: fieldImg,
    caption: "Shivapuri Tree Plantation Campaign, 2025."
  },
  quote: {
    text: "Our greatest strength lies not in the resources we have, but in the community we build together.",
    signature: "Leo Dikshyanta Pratap Khand, District President",
    stickers: [
      { image: quoteSticker },
      { image: sigSticker1 },
      { image: sigSticker3 },
      { image: joinSticker }
    ]
  },
  join: {
    line: "Bring your time and your energy.",
    actions: [
      { label: "Join the club", href: "#join" },
      { label: "Message us on Facebook", href: "https://www.facebook.com/LCKTMDeurali" }
    ],
    nextMeeting: "Next general meeting: 25 September 2026, Chamunda Cafe.",
    sticker: joinSticker
  },
  team: {
    sticker: teamSticker
  },
  footer: {
    wordmark: "LCK DEURALI",
    sponsorWordmark: "Lions Club of Kathmandu Deurali",
    address: "Kapan, Kathmandu, Bagmati Province",
    email: "crestadeepu@gmail.com",
    phone: "+977 9823301556",
    meetingNote: "Meets every 2nd & 4th Saturday at Chamunda Cafe, 8:00 AM.",
    links: [
      { label: "Facebook", href: "https://www.facebook.com/LCKTMDeurali" },
      { label: "Instagram", href: "https://www.facebook.com/LCKTMDeurali" },
      { label: "Contact", href: "9823301556" },
      { label: "Back to top", href: "#top" }
    ],
    sponsorCredit: ""
  }
};
