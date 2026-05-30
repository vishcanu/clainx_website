// =========================================================
// DATA: Testimonials
// =========================================================

export interface Testimonial {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  role: string;
  tier: string;
  tierColor: string;
  content: string;
  stats: {
    territories: number;
    km: number;
    streak: number;
  };
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Marcus Chen',
    handle: '@marcusruns',
    avatar: 'MC',
    role: 'Marathon Runner · NYC',
    tier: 'CERTIFIED',
    tierColor: '#FF6B00',
    content: "ClaimX turned my morning run into a full-blown empire. I own 40 blocks in Manhattan now. My rivals hate me. I love it.",
    stats: { territories: 847, km: 2340, streak: 183 },
  },
  {
    id: '2',
    name: 'Zara Williams',
    handle: '@zaraconquers',
    avatar: 'ZW',
    role: 'Cyclist · London',
    tier: 'GOATED',
    tierColor: '#F59E0B',
    content: "I was barely cycling 3x a week. Now I'm out every single day defending my district. Lost 12kg and own Central London. This app is not normal.",
    stats: { territories: 423, km: 1680, streak: 97 },
  },
  {
    id: '3',
    name: 'Kai Tanaka',
    handle: '@kaitheclaimer',
    avatar: 'KT',
    role: 'Daily Walker · Tokyo',
    tier: 'SLAPS',
    tierColor: '#8B5CF6',
    content: "The siege system is absolutely insane. Lost my Shibuya district to a Rift attack. Rebuilt it in 3 days. My revenge is coming.",
    stats: { territories: 156, km: 890, streak: 54 },
  },
  {
    id: '4',
    name: 'Priya Sharma',
    handle: '@priyafit',
    avatar: 'PS',
    role: 'Runner · Mumbai',
    tier: 'COOKING',
    tierColor: '#22D3EE',
    content: "The health tracking is next level. My doctor is confused why I suddenly care about my steps. Don't tell her it's because I need XP.",
    stats: { territories: 67, km: 320, streak: 31 },
  },
  {
    id: '5',
    name: 'Devon Blake',
    handle: '@devontheking',
    avatar: 'DB',
    role: 'Sprinter · Chicago',
    tier: 'GOATED',
    tierColor: '#F59E0B',
    content: "Won the Chicago Arena tournament last month. $500 prize pool. My fitness paid off literally. This is the future of fitness.",
    stats: { territories: 612, km: 1920, streak: 142 },
  },
  {
    id: '6',
    name: 'Sofia Reyes',
    handle: '@sofiaruns',
    avatar: 'SR',
    role: 'Walker · Barcelona',
    tier: 'SLAPS',
    tierColor: '#8B5CF6',
    content: "I got my whole friend group addicted. Now we have turf wars across Barcelona. We show up at the park at 6am for territory. Unhinged.",
    stats: { territories: 289, km: 1140, streak: 76 },
  },
];
