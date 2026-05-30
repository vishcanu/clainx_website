// =========================================================
// DATA: Siege System
// =========================================================

export interface SiegeType {
  id: string;
  name: string;
  color: string;
  glowColor: string;
  icon: string;
  description: string;
  effect: string;
  duration: string;
  cooldown: string;
  tier: string;
  power: number;
}

export const sieges: SiegeType[] = [
  {
    id: 'blaze',
    name: 'BLAZE',
    color: '#FF4500',
    glowColor: 'rgba(255, 69, 0, 0.6)',
    icon: 'Flame',
    description: 'A rapid fire assault that burns through enemy territory defenses.',
    effect: 'Weakens 3 adjacent territories by 40%',
    duration: '4 hours',
    cooldown: '12 hours',
    tier: 'COOKING+',
    power: 60,
  },
  {
    id: 'cyclone',
    name: 'CYCLONE',
    color: '#00BFFF',
    glowColor: 'rgba(0, 191, 255, 0.6)',
    icon: 'Wind',
    description: 'A spinning storm vortex that disrupts rival activity tracking.',
    effect: 'Nullifies enemy XP gain in zone for 6h',
    duration: '6 hours',
    cooldown: '18 hours',
    tier: 'SLAPS+',
    power: 75,
  },
  {
    id: 'tremor',
    name: 'TREMOR',
    color: '#8B4513',
    glowColor: 'rgba(139, 69, 19, 0.6)',
    icon: 'Zap',
    description: 'Seismic shockwave that crumbles enemy building height progress.',
    effect: 'Reduces enemy building height by 50%',
    duration: '8 hours',
    cooldown: '24 hours',
    tier: 'GOATED+',
    power: 85,
  },
  {
    id: 'deluge',
    name: 'DELUGE',
    color: '#1E90FF',
    glowColor: 'rgba(30, 144, 255, 0.6)',
    icon: 'Droplets',
    description: 'A massive flood wave that overwhelms multiple territory zones at once.',
    effect: 'Claims 5 enemy territories simultaneously',
    duration: '2 hours',
    cooldown: '48 hours',
    tier: 'GOATED+',
    power: 90,
  },
  {
    id: 'rift',
    name: 'RIFT',
    color: '#9400D3',
    glowColor: 'rgba(148, 0, 211, 0.7)',
    icon: 'Orbit',
    description: 'The ultimate siege weapon. Opens a dimensional rift that erases territory.',
    effect: 'Destroys entire district. Rivals rebuild from zero.',
    duration: '12 hours',
    cooldown: '7 days',
    tier: 'CERTIFIED only',
    power: 100,
  },
];
