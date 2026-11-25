import { ArrowUpRight } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { CostTable } from './components/CostTable';
import { Header } from './components/Header';
import { ModeDropdown } from './components/ModeDropdown';
import { ReviewModal } from './components/ReviewModal';
import { VideoCard } from './components/VideoCard';
import {
  DRIVE_ROOT_FOLDER_URL,
  MAGI_TESTS,
  type MagiTestItem,
} from './data/magiTests';
import {
  computeSummaryStats,
  filterTests,
  formatCurrencyUsd,
  type ModeFilter,
  type NicheFilter,
} from './utils/filterTests';

const NICHE_OPTIONS: NicheFilter[] = [
  'All',
  'Fitness',
  'Plumbers',
  'Entrepreneurs',
  'Agency Owners',
  'Landscape Design',
];

export default function App() {
  const [niche, setNiche] = useState<NicheFilter>('All');
  const [mode, setMode] = useState<ModeFilter>('All');
  const [selectedCode, setSelectedCode] = useState<string | null>(() => {
    if (typeof window === 'undefined') return null;
    const param = new URLSearchParams(window.location.search).get('test');
    return param && MAGI_TESTS.some((t) => t.code === param) ? param : null;
  });

  const overallStats = useMemo(() => computeSummaryStats(MAGI_TESTS), []);

  const filteredTests = useMemo(
    () => filterTests(MAGI_TESTS, { niche, mode, query: '' }),
    [niche, mode]
  );

  const selectedItem = useMemo(
    () => MAGI_TESTS.find((t) => t.code === selectedCode) ?? null,
    [selectedCode]
  );

  const selectedIndex = useMemo(
    () =>
      selectedItem
        ? filteredTests.findIndex((t) => t.code === selectedItem.code)
        : -1,
    [filteredTests, selectedItem]
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    if (selectedCode) {
      url.searchParams.set('test', selectedCode);
    } else {
      url.searchParams.delete('test');
    }
    window.history.replaceState({}, '', url.toString());
  }, [selectedCode]);

  const handleOpenInspect = (item: MagiTestItem) => {
    setSelectedCode(item.code);
  };

  const handleResetFilters = () => {
    setNiche('All');
    setMode('All');
  };

  const hasActiveFilters = niche !== 'All' || mode !== 'All';

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-950">
      <Header />

      <main>
        {/* Executive Overview */}
        <section
          id="overview"
          aria-labelledby="hero-heading"
          className="mx-auto max-w-6xl px-4 pt-12 pb-10 sm:px-6 lg:px-8 lg:pt-16"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-blue-600">
                WaveSpeed Sand AI · MAGI-2 Model Evaluation
              </p>
              <h1
                id="hero-heading"
                className="mt-2 font-display text-3xl font-bold tracking-tight text-zinc-950 [text-wrap:balance] sm:text-5xl"
              >
                18 Native 1080p Reels Ready for Review
              </h1>
              <p className="mt-4 text-base leading-relaxed text-zinc-600">
                Side-by-side test outputs across five niches — comparing Reference-to-Video identity swaps, Raw Text Retention clips, 4-Photo Promo scenes, and First-Frame Image-to-Video generations.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#videos"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap transition-colors duration-150 hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Watch All 18 Tests
              </a>
              <a
                href={DRIVE_ROOT_FOLDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-800 whitespace-nowrap transition-colors duration-150 hover:border-zinc-300 hover:bg-zinc-50"
              >
                <span>Source Drive</span>
                <ArrowUpRight className="h-4 w-4 text-zinc-500" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Full-Width 4-Column Summary Strip */}
          <div className="mt-10 grid grid-cols-2 divide-y divide-zinc-200 overflow-hidden rounded-2xl border border-zinc-200 bg-white sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            <div className="p-5 sm:p-6">
              <div className="text-xs font-medium text-zinc-500">Total Samples</div>
              <div className="mt-1.5 font-mono text-2xl font-semibold text-zinc-950 tabular-nums">
                {overallStats.totalCount}
              </div>
              <div className="mt-1 text-xs text-zinc-500">
                9 Viral · 6 Raw Text · 2 Promo · 1 Regular
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <div className="text-xs font-medium text-zinc-500">Total Output</div>
              <div className="mt-1.5 font-mono text-2xl font-semibold text-zinc-950 tabular-nums">
                {overallStats.totalDurationSec}s
              </div>
              <div className="mt-1 text-xs text-zinc-500">
                1080×1920 · 30 fps H.264
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <div className="text-xs font-medium text-zinc-500">Verified Spend</div>
              <div className="mt-1.5 font-mono text-2xl font-semibold text-zinc-950 tabular-nums">
                {formatCurrencyUsd(overallStats.totalCostUsd)}
              </div>
              <div className="mt-1 text-xs text-zinc-500">
                $0.08 / sec flat rate
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <div className="text-xs font-medium text-zinc-500">Niches Tested</div>
              <div className="mt-1.5 font-mono text-2xl font-semibold text-zinc-950 tabular-nums">
                5
              </div>
              <div className="mt-1 text-xs text-zinc-500">
                Batch 1–3 ($4.00 · $4.16 · $3.76)
              </div>
            </div>
          </div>
        </section>

        {/* Filter Toolbar & Screening Grid */}
        <section
          id="videos"
          aria-labelledby="videos-heading"
          className="mx-auto max-w-6xl scroll-mt-20 px-4 py-8 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col gap-4 border-b border-zinc-200 pb-6">
            <div>
              <h2
                id="videos-heading"
                className="font-display text-2xl font-bold tracking-tight text-zinc-950"
              >
                Screening Room
              </h2>
              <p
                data-testid="results-count"
                className="mt-0.5 text-sm text-zinc-600 tabular-nums"
              >
                Showing {filteredTests.length} of {MAGI_TESTS.length} videos
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <ModeDropdown value={mode} onChange={setMode} />

              <div
                role="group"
                aria-label="Filter by niche"
                className="flex flex-wrap sm:flex-nowrap items-center gap-1 overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-100/80 p-1"
              >
                {NICHE_OPTIONS.map((option) => {
                  const active = niche === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setNiche(option)}
                      aria-pressed={active}
                      className={`min-h-9 rounded-lg px-3.5 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer ${
                        active
                          ? 'bg-white text-zinc-950 shadow-xs'
                          : 'text-zinc-600 hover:text-zinc-950'
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {filteredTests.length > 0 ? (
            <div
              data-testid="video-grid"
              className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredTests.map((item) => (
                <VideoCard
                  key={item.code}
                  item={item}
                  onInspect={handleOpenInspect}
                />
              ))}
            </div>
          ) : (
            <div
              data-testid="empty-state"
              className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white px-6 py-16 text-center"
            >
              <p className="font-display text-lg font-semibold text-zinc-950">
                No matching test videos
              </p>
              <p className="mt-1 max-w-md text-sm text-zinc-600">
                No MAGI-2 outputs matched your current niche, mode, or search filter.
              </p>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="mt-5 inline-flex min-h-10 items-center justify-center rounded-lg bg-zinc-950 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-zinc-800 cursor-pointer"
                >
                  Reset Filters
                </button>
              )}
            </div>
          )}
        </section>

        <CostTable tests={MAGI_TESTS} onSelectTest={handleOpenInspect} />
      </main>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span>
            MAGI-2 Model Evaluation · 18 Native 1080p Reels · $11.92 Verified Spend
          </span>
          <a
            href={DRIVE_ROOT_FOLDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-zinc-700 hover:text-zinc-950 hover:underline"
          >
            <span>View Original Google Drive Folder</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </footer>

      <ReviewModal
        item={selectedItem}
        onClose={() => setSelectedCode(null)}
        onPrev={() => {
          if (selectedIndex > 0) {
            setSelectedCode(filteredTests[selectedIndex - 1].code);
          }
        }}
        onNext={() => {
          if (selectedIndex >= 0 && selectedIndex < filteredTests.length - 1) {
            setSelectedCode(filteredTests[selectedIndex + 1].code);
          }
        }}
        hasPrev={selectedIndex > 0}
        hasNext={selectedIndex >= 0 && selectedIndex < filteredTests.length - 1}
      />
    </div>
  );
}
