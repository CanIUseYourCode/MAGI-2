import type { TestMode, TestNiche } from '../data/magiTests';

const NICHE_BADGE_CLASSES: Record<TestNiche, string> = {
  Fitness: 'border-emerald-200/80 bg-emerald-50 text-emerald-700',
  Plumbers: 'border-sky-200/80 bg-sky-50 text-sky-700',
  Entrepreneurs: 'border-violet-200/80 bg-violet-50 text-violet-700',
  'Agency Owners': 'border-amber-200/80 bg-amber-50 text-amber-800',
  'Landscape Design': 'border-teal-200/80 bg-teal-50 text-teal-700',
};

const MODE_BADGE_CLASSES: Record<TestMode, string> = {
  'Ref-to-Video': 'border-indigo-200/80 bg-indigo-50 text-indigo-700',
  'Raw Text Retention': 'border-fuchsia-200/80 bg-fuchsia-50 text-fuchsia-700',
  '4-Photo Promo': 'border-rose-200/80 bg-rose-50 text-rose-700',
  '1-Photo Img-to-Video': 'border-cyan-200/80 bg-cyan-50 text-cyan-700',
};

export function getNicheBadgeClass(niche: TestNiche): string {
  return NICHE_BADGE_CLASSES[niche];
}

export function getModeBadgeClass(mode: TestMode): string {
  return MODE_BADGE_CLASSES[mode];
}
