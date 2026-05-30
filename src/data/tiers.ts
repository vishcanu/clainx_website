// =========================================================
// DATA: Imprint Tiers
// =========================================================

export interface ImprintTier {
  id: string;
  name: string;
  color: string;
  glowColor: string;
  height: number;
  description: string;
  requirements: string;
  perks: string[];
  icon: string;
}

export const tiers: ImprintTier[] = [
  {
    id: 'lowkey',
    name: 'LOWKEY',
    color: '#94A3B8',
    glowColor: 'rgba(148, 163, 184, 0.4)',
    height: 1,
    description: 'Starting your journey. Every empire begins here.',
    requirements: 'Claim your first territory',
    perks: ['Basic territory claiming', 'Step tracking', 'Map visibility'],
    icon: 'navigation',
  },
  {
    id: 'cooking',
    name: 'COOKING',
    color: '#22D3EE',
    glowColor: 'rgba(34, 211, 238, 0.5)',
    height: 2,
    description: 'You\'re warming up. The map is starting to fear you.',
    requirements: '50+ territories claimed',
    perks: ['Extended radar range', 'Calorie tracking', 'Basic siege unlocked', 'Weekly challenges'],
    icon: 'flame',
  },
  {
    id: 'slaps',
    name: 'SLAPS',
    color: '#8B5CF6',
    glowColor: 'rgba(139, 92, 246, 0.6)',
    height: 3,
    description: 'Your presence on the map is undeniable. Rivals are watching.',
    requirements: '200+ territories, 500km total',
    perks: ['Alliance system', 'Advanced siege powers', 'Ghost mode access', 'Custom territory colors'],
    icon: 'zap',
  },
  {
    id: 'goated',
    name: 'GOATED',
    color: '#F59E0B',
    glowColor: 'rgba(245, 158, 11, 0.6)',
    height: 4,
    description: 'Legendary status. Your city knows your name.',
    requirements: '1000+ territories, Top 5% region',
    perks: ['Crown territory display', 'Priority siege timing', 'Exclusive map skins', 'Arena entry'],
    icon: 'crown',
  },
  {
    id: 'certified',
    name: 'CERTIFIED',
    color: '#FF6B00',
    glowColor: 'rgba(255, 107, 0, 0.7)',
    height: 5,
    description: 'You ARE the city. The highest tier. Untouchable.',
    requirements: 'Top 1% globally, 5000+ territories',
    perks: ['City domination badge', 'Exclusive siege: Rift', 'Legend profile frame', 'Beta feature access', 'ClaimX partner status'],
    icon: 'trophy',
  },
];
