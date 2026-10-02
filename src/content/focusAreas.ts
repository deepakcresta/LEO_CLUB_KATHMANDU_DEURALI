import serviceSticker from '../assets/leo_club_images/blood_donation/780501266_2540942323076106_1343890367257467171_n.jpg';
import leadershipSticker from '../assets/leo_club_images/meetings/806453343_1502551875250731_442538012732861855_n.jpg';
import communitySticker from '../assets/leo_club_images/hunger_relief/769051378_1603874191270426_4538422010163114396_n.jpg';

export const focusAreas = [
  {
    category: "Service Initiatives",
    sticker: serviceSticker,
    items: [
      { name: "Inauguration & Food Distribution", date: "1-Jul" },
      { name: "Hunger Relief Program", date: "August" },
      { name: "Mega Tree Plantation", date: "August" },
      { name: "Mega Blood Donation", date: "August" },
      { name: "ISCON Volunteering", date: "August" },
      { name: "Peace Walk", date: "September" }
    ]
  },
  {
    category: "Leadership & Meetings",
    sticker: leadershipSticker,
    items: [
      { name: "Board Declaration", date: "28-Jun" },
      { name: "Board Declaration & Schooling", date: "3-Jul" },
      { name: "First General Meeting", date: "23-Jul" },
      { name: "Regional Meeting Program", date: "August" },
      { name: "Second General Meeting", date: "August" }
    ]
  },
  {
    category: "Fellowship & Culture",
    sticker: communitySticker,
    items: [
      { name: "Leos Sports Festive", date: "8-10 Jul" },
      { name: "Batch & Pin Distribution", date: "23-Jul" },
      { name: "Kherr Kuwaunay Program", date: "23-Jul" },
      { name: "Live FIFA Final Streaming", date: "August" },
      { name: "Candle Lighting", date: "September" },
      { name: "Teej Celebration", date: "September" }
    ]
  }
];
