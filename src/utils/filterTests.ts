import type { MagiTestItem, TestMode, TestNiche } from '../data/magiTests';

export type NicheFilter = 'All' | TestNiche;
export type ModeFilter = 'All' | TestMode;

export interface FilterCriteria {
  niche: NicheFilter;
  mode: ModeFilter;
  query?: string;
}

export interface SummaryStats {
  totalCount: number;
  totalDurationSec: number;
  totalCostUsd: number;
  avgCostPerSecUsd: number;
  nicheCounts: Record<TestNiche, number>;
  modeCounts: Record<TestMode, number>;
}

export function filterTests(
  tests: MagiTestItem[],
  criteria: FilterCriteria
): MagiTestItem[] {
  const normalizedQuery = (criteria.query ?? '').trim().toLowerCase();

  return tests.filter((item) => {
    if (criteria.niche !== 'All' && item.niche !== criteria.niche) {
      return false;
    }
    if (criteria.mode !== 'All' && item.mode !== criteria.mode) {
      return false;
    }
    if (normalizedQuery.length > 0) {
      const haystack = [
        item.code,
        item.title,
        item.influencer,
        item.niche,
        item.mode,
        item.sceneSummary,
      ]
        .join(' ')
        .toLowerCase();
      if (!haystack.includes(normalizedQuery)) {
        return false;
      }
    }
    return true;
  });
}

export function computeSummaryStats(tests: MagiTestItem[]): SummaryStats {
  const nicheCounts: Record<TestNiche, number> = {
    Fitness: 0,
    Plumbers: 0,
    Entrepreneurs: 0,
    'Agency Owners': 0,
    'Landscape Design': 0,
  };

  const modeCounts: Record<TestMode, number> = {
    'Ref-to-Video': 0,
    'Raw Text Retention': 0,
    '4-Photo Promo': 0,
    '1-Photo Img-to-Video': 0,
  };

  let totalDurationSec = 0;
  let totalCostCents = 0;

  for (const item of tests) {
    totalDurationSec += item.durationSec;
    totalCostCents += Math.round(item.costUsd * 100);
    nicheCounts[item.niche] += 1;
    modeCounts[item.mode] += 1;
  }

  const totalCostUsd = totalCostCents / 100;
  const avgCostPerSecUsd =
    totalDurationSec > 0 ? totalCostUsd / totalDurationSec : 0;

  return {
    totalCount: tests.length,
    totalDurationSec,
    totalCostUsd,
    avgCostPerSecUsd,
    nicheCounts,
    modeCounts,
  };
}

export function formatCurrencyUsd(amount: number): string {
  return `$${amount.toFixed(2)}`;
}
