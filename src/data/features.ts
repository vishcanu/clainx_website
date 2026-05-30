// =========================================================
// DATA: Features
// =========================================================

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  color: string;
  tag: string;
}

export const features: Feature[] = [
  {
    id: 'territory',
    icon: 'map',
    title: 'Real-World Territories',
    description: 'Claim hexagonal zones across your city by physically moving through them. Every step counts.',
    color: '#00D4FF',
    tag: 'Core',
  },
  {
    id: 'building',
    icon: 'building',
    title: '3D City Growth',
    description: 'Watch your claimed zones grow into towering 3D structures that rise with your activity.',
    color: '#8B5CF6',
    tag: 'Visual',
  },
  {
    id: 'siege',
    icon: 'swords',
    title: 'Siege Warfare',
    description: 'Launch siege attacks on rival territories. Defend your empire with advanced siege powers.',
    color: '#FF6B00',
    tag: 'Combat',
  },
  {
    id: 'fitness',
    icon: 'heart',
    title: 'Fitness Rewards',
    description: 'Track calories, heart rate zones, BMI, and streaks. Every health milestone earns XP.',
    color: '#AAFF00',
    tag: 'Health',
  },
  {
    id: 'neighbourhood',
    icon: 'store',
    title: 'Neighbourhood Offers',
    description: 'Unlock real deals from local businesses when you claim nearby territory. Treasure hunts at every corner.',
    color: '#00FFE7',
    tag: 'Explore',
  },
  {
    id: 'parks',
    icon: 'trees',
    title: 'Park Discovery',
    description: 'Discover hidden gems, parks, and urban landmarks. Unlock bonuses at special locations.',
    color: '#F59E0B',
    tag: 'Explore',
  },
  {
    id: 'multiplayer',
    icon: 'users',
    title: 'Multiplayer Competition',
    description: 'Form alliances, wage territorial wars, and compete in real-time with players worldwide.',
    color: '#FF0080',
    tag: 'Social',
  },
  {
    id: 'challenges',
    icon: 'trophy',
    title: 'Daily Challenges',
    description: 'New challenges every day. Timed sprints, territory goals, and siege missions.',
    color: '#F59E0B',
    tag: 'Progression',
  },
  {
    id: 'ghost',
    icon: 'Ghost',
    title: 'Ghost Player Mode',
    description: 'Replay your best runs as ghost data. Challenge your past performance in stealth mode.',
    color: '#A78BFA',
    tag: 'Mode',
  },
];
