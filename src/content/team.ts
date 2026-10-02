import asmita from '../assets/leo_club_images/club_members/asmita_koirala_secretary.jpg';
import anish from '../assets/leo_club_images/club_members/anish_thapa_joint_secretary.jpg';
import mamata from '../assets/leo_club_images/club_members/mamata_sapkota_joint_treasurer.jpg';
import madan from '../assets/leo_club_images/club_members/madan_dahal_membership_chairperson.jpg';
import lakpa from '../assets/leo_club_images/club_members/lakpa_sherpa_tale_twistere.jpg';
import sumitra from '../assets/leo_club_images/club_members/sumitra_katuwal_teamer.jpg';
import nandani from '../assets/leo_club_images/club_members/nandani_sharma_leo_branding.jpg';
import sushmita from '../assets/leo_club_images/club_members/susmita_bhandari_mdt_coordinator.jpg';
import sudip from '../assets/leo_club_images/club_members/sudip_dahal_cultural_heritage_coordinator.jpg';
import kasmita from '../assets/leo_club_images/club_members/kasmita_mainali_arts_and_literature_coordinator.jpg';
import sunil from '../assets/leo_club_images/club_members/sunil_giri_sports_coordinator.jpg';
import ajay from '../assets/leo_club_images/club_members/ajay_khadka_educational_coordinator.jpg';
import sushila from '../assets/leo_club_images/club_members/sushila_nepal_child_and_youth_coordinator.jpg';
import sushant from '../assets/leo_club_images/club_members/sushant_bhandari_general_member.jpg';
import sbina from '../assets/leo_club_images/club_members/sbina_banjara.jpg';
import aviyan from '../assets/leo_club_images/club_members/aviyan_dahal_2nd_vice_president.jpg';
import deepak from '../assets/leo_club_images/club_members/deepak_kumar_shrestha_president.jpg';
import milan from '../assets/leo_club_images/club_members/milan_parajuli_1st_vice_president.jpg';
import monika from '../assets/leo_club_images/club_members/monika_paudel_international_brand_ambassador.jpg';
import sanjay from '../assets/leo_club_images/club_members/sanjay_khatri_international_brand_ambassador.jpg';
import shristi from '../assets/leo_club_images/club_members/shristi_neupane_pro.jpg';
import surendra from '../assets/leo_club_images/club_members/surendra_sunwar_international_brand_ambassador.jpg';


export interface TeamMember {
  role: string;
  name: string;
  term?: string;
  isDistrict?: boolean;
  image?: string;
}

export const team: TeamMember[] = [
  {
    role: 'District President',
    name: 'Leo Dikshyanta Pratap Khand',
    term: 'L.Y. 2026/27',
    isDistrict: true
  },
  {
    role: 'President',
    name: 'Deepak Kumar Shrestha',
    image: deepak
  },
  {
    role: '1st VP',
    name: 'Milan Parajuli',
    image: milan
  },
  {
    role: '2nd VP',
    name: 'Aviyan Dahal',
    image: aviyan
  },
  {
    role: 'Secretary',
    name: 'Asmita Koirala',
    image: asmita
  },
  {
    role: 'Treasurer',
    name: 'Raj Shrestha'
  },
  {
    role: 'Joint Secretary',
    name: 'Anish Thapa',
    image: anish
  },
  {
    role: 'Joint Treasurer',
    name: 'Mamata Sapkota',
    image: mamata
  },
  {
    role: 'Membership Chairperson',
    name: 'Madan Dahal',
    image: madan
  },
  {
    role: 'PRO',
    name: 'Shristi Neupane',
    image: shristi
  },
  {
    role: 'Tale Twister',
    name: 'Lakpa Sherpa',
    image: lakpa
  },
  {
    role: 'Teamer',
    name: 'Sumitra Katuwal',
    image: sumitra
  },
  {
    role: 'Leo Branding',
    name: 'Nandani Sharma',
    image: nandani
  },
  {
    role: 'MDT Coordinator',
    name: 'Sushmita Bhandari',
    image: sushmita
  },
  {
    role: 'Cultural Heritage Coordinator',
    name: 'Sudip Dahal',
    image: sudip
  },
  {
    role: 'Arts and Literature Coordinator',
    name: 'Kasmita Mainali',
    image: kasmita
  },
  {
    role: 'Sports Coordinator',
    name: 'Sunil Giri',
    image: sunil
  },
  {
    role: 'Educational Coordinator',
    name: 'Ajay Khadka',
    image: ajay
  },
  {
    role: 'Child and Youth Coordinator',
    name: 'Sushila Nepal',
    image: sushila
  },
  {
    role: 'Hunger Relief Coordinator',
    name: 'Dipin Parajuli'
  },
  {
    role: 'International Brand Ambassador',
    name: 'Sanjay Khatri',
    image: sanjay
  },
  {
    role: 'International Brand Ambassador',
    name: 'Surendra Sunwar',
    image: surendra
  },
  {
    role: 'International Brand Ambassador',
    name: 'Rohit Chapagai'
  },
  {
    role: 'International Brand Ambassador',
    name: 'Monika Paudel',
    image: monika
  },
  {
    role: 'General Member',
    name: 'Sushant Bhandari',
    image: sushant
  },
  {
    role: 'General Member',
    name: 'Sbina Banjara',
    image: sbina
  }
];
