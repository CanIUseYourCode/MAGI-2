import { ArrowUpRight } from 'lucide-react';
import type { MagiTestItem } from '../data/magiTests';
import { computeSummaryStats, formatCurrencyUsd } from '../utils/filterTests';
import { getModeBadgeClass, getNicheBadgeClass } from '../utils/badgeStyles';

interface CostTableProps {
  tests: MagiTestItem[];
  onSelectTest: (item: MagiTestItem) => void;
}

export function CostTable({ tests, onSelectTest }: CostTableProps) {
  const summary = computeSummaryStats(tests);

  return (
    <section
      id="cost-breakdown"
      aria-labelledby="cost-breakdown-heading"
      className="mx-auto max-w-6xl scroll-mt-16 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2
            id="cost-breakdown-heading"
            className="font-display text-2xl font-bold tracking-tight text-zinc-950"
          >
            Cost & Technical Breakdown
          </h2>
          <p className="mt-1 text-sm text-zinc-600">
            Fixed native 1080p pricing at $0.08 per output second — generated speech, Foley audio, and reference inputs included at $0 extra.
          </p>
        </div>
        <div className="font-mono text-sm font-medium text-zinc-700 tabular-nums">
          Total: {summary.totalDurationSec}s · {formatCurrencyUsd(summary.totalCostUsd)}
        </div>
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-zinc-200 bg-white">
        <table className="w-full min-w-[780px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50/70 text-xs font-semibold text-zinc-600">
              <th className="px-4 py-3.5">Test</th>
              <th className="px-4 py-3.5">Niche & Mode</th>
              <th className="px-4 py-3.5">Influencer</th>
              <th className="px-4 py-3.5">Source Input</th>
              <th className="px-4 py-3.5 text-right">Duration</th>
              <th className="px-4 py-3.5 text-right">Cost</th>
              <th className="px-4 py-3.5 text-right">Review</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {tests.map((item) => (
              <tr
                key={item.code}
                className="transition-colors hover:bg-zinc-50/80"
              >
                <td className="px-4 py-3.5 font-mono text-xs font-semibold text-zinc-900 tabular-nums">
                  #{item.code}
                </td>
                <td className="px-4 py-3.5">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span
                      className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-medium leading-tight ${getNicheBadgeClass(item.niche)}`}
                    >
                      {item.niche}
                    </span>
                    <span
                      className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-medium leading-tight ${getModeBadgeClass(item.mode)}`}
                    >
                      {item.modeDetail}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3.5 text-zinc-700">
                  {item.influencer}{' '}
                  <span className="font-mono text-xs text-zinc-400">
                    {item.influencerId}
                  </span>
                </td>
                <td className="px-4 py-3.5 text-xs text-zinc-600">
                  {item.sourceClipLabel
                    ? item.sourceClipLabel
                    : item.mode === '4-Photo Promo'
                      ? 'Prompt + 4 photos'
                      : '1st frame + prompt'}
                </td>
                <td className="px-4 py-3.5 text-right font-mono text-xs text-zinc-700 tabular-nums">
                  {item.durationSec}s
                </td>
                <td className="px-4 py-3.5 text-right font-mono text-xs font-semibold text-zinc-950 tabular-nums">
                  {formatCurrencyUsd(item.costUsd)}
                </td>
                <td className="px-4 py-3.5 text-right">
                  <button
                    type="button"
                    onClick={() => onSelectTest(item)}
                    aria-label={`Inspect Test ${item.code}: ${item.title}`}
                    className="inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-xs font-semibold text-blue-600 transition-colors hover:bg-blue-50 hover:text-blue-700 cursor-pointer"
                  >
                    <span>Open</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t border-zinc-200 bg-zinc-50/70 font-medium text-zinc-950">
              <td colSpan={4} className="px-4 py-3.5 text-xs text-zinc-600">
                {summary.totalCount} verified WaveSpeed MAGI-2 runs (Batch 1: $4.00 · Batch 2: $4.16 · Batch 3: $3.76)
              </td>
              <td className="px-4 py-3.5 text-right font-mono text-xs font-semibold tabular-nums">
                {summary.totalDurationSec}s
              </td>
              <td className="px-4 py-3.5 text-right font-mono text-xs font-semibold tabular-nums">
                {formatCurrencyUsd(summary.totalCostUsd)}
              </td>
              <td className="px-4 py-3.5" />
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}
