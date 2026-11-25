import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  Pause,
  Play,
  Volume2,
  X,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import {
  buildDriveThumbUrl,
  buildDriveVideoUrl,
  buildDriveViewUrl,
  type MagiTestItem,
} from '../data/magiTests';
import { formatCurrencyUsd } from '../utils/filterTests';
import { getModeBadgeClass, getNicheBadgeClass } from '../utils/badgeStyles';

interface ReviewModalProps {
  item: MagiTestItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export function ReviewModal({
  item,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: ReviewModalProps) {
  const [isSyncedPlaying, setIsSyncedPlaying] = useState(false);
  const [promptCopied, setPromptCopied] = useState(false);
  const [showFullPrompt, setShowFullPrompt] = useState(false);

  const outputVideoRef = useRef<HTMLVideoElement | null>(null);
  const sourceVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!item) return;
    setIsSyncedPlaying(false);
    setPromptCopied(false);
    setShowFullPrompt(false);
  }, [item]);

  useEffect(() => {
    if (!item) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft' && hasPrev) {
        onPrev();
      } else if (event.key === 'ArrowRight' && hasNext) {
        onNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!item) return null;

  const handleSyncToggle = async () => {
    const outEl = outputVideoRef.current;
    const srcEl = sourceVideoRef.current;
    if (!outEl) return;

    if (isSyncedPlaying) {
      outEl.pause();
      srcEl?.pause();
      setIsSyncedPlaying(false);
      return;
    }

    try {
      outEl.currentTime = 0;
      if (srcEl) {
        srcEl.currentTime = 0;
        srcEl.muted = true;
      }
      await Promise.all([
        outEl.play(),
        srcEl ? srcEl.play() : Promise.resolve(),
      ]);
      setIsSyncedPlaying(true);
    } catch {
      setIsSyncedPlaying(false);
    }
  };

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(item.prompt);
      setPromptCopied(true);
      window.setTimeout(() => setPromptCopied(false), 2000);
    } catch {
      setPromptCopied(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-test-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/70 p-3 sm:p-6 backdrop-blur-xs"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl">
        {/* Modal Header */}
        <div className="flex shrink-0 items-center justify-between gap-4 border-b border-zinc-200 px-5 py-3.5 sm:px-6">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-500">
              <span
                className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] leading-tight ${getNicheBadgeClass(item.niche)}`}
              >
                {item.niche}
              </span>
              <span
                className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] leading-tight ${getModeBadgeClass(item.mode)}`}
              >
                {item.modeDetail}
              </span>
              <span className="font-mono tabular-nums text-zinc-700">
                {formatCurrencyUsd(item.costUsd)}
              </span>
            </div>
            <h2
              id="modal-test-title"
              className="mt-1 truncate font-display text-lg font-bold text-zinc-950"
            >
              {item.title} — {item.influencer}
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={onPrev}
              disabled={!hasPrev}
              aria-label="Previous test"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-50 disabled:opacity-35 disabled:cursor-not-allowed cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={onNext}
              disabled={!hasNext}
              aria-label="Next test"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-50 disabled:opacity-35 disabled:cursor-not-allowed cursor-pointer"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close review modal"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-100 cursor-pointer"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="grid min-h-0 flex-1 overflow-y-auto lg:grid-cols-12 lg:grid-rows-[minmax(0,1fr)] lg:overflow-hidden">
          {/* Left Stage: Sticky Video Player(s) */}
          <div
            data-testid="modal-video-stage"
            className="flex min-h-0 flex-col justify-center border-b border-zinc-200 bg-[#FAFAFA] p-5 text-zinc-950 lg:col-span-7 lg:overflow-hidden lg:border-r lg:border-b-0"
          >
            {item.sourceVideoId && (
              <div className="mb-4 flex items-center justify-end">
                <button
                  type="button"
                  onClick={handleSyncToggle}
                  className="inline-flex min-h-9 items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-1.5 text-xs font-semibold text-white whitespace-nowrap transition-colors hover:bg-blue-700 cursor-pointer"
                >
                  {isSyncedPlaying ? (
                    <>
                      <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Pause Sync</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                      <span>Play Both Synced</span>
                    </>
                  )}
                </button>
              </div>
            )}

            {item.sourceVideoId ? (
              <div className="grid flex-1 grid-cols-2 items-center gap-4">
                <div className="flex flex-col items-center">
                  <span className="mb-2 text-xs font-medium text-zinc-900">
                    MAGI-2 Output · {item.durationSec}s 1080p
                  </span>
                  <div className="aspect-[9/16] w-full max-w-[280px] overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100">
                    <video
                      ref={outputVideoRef}
                      key={item.outputVideoId}
                      src={buildDriveVideoUrl(item.outputVideoId)}
                      poster={buildDriveThumbUrl(item.outputVideoId, 900)}
                      controls
                      playsInline
                      onPlay={() => setIsSyncedPlaying(true)}
                      onPause={() => setIsSyncedPlaying(false)}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <span className="mb-2 text-xs font-medium text-zinc-500">
                    Source Reference · {item.sourceClipLabel}
                  </span>
                  <div className="aspect-[9/16] w-full max-w-[280px] overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100">
                    <video
                      ref={sourceVideoRef}
                      key={item.sourceVideoId}
                      src={buildDriveVideoUrl(item.sourceVideoId)}
                      poster={buildDriveThumbUrl(item.sourceVideoId, 900)}
                      controls
                      muted
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-1 flex-col items-center justify-center">
                <span className="mb-2 text-xs font-medium text-zinc-900">
                  MAGI-2 Output · {item.durationSec}s 1080p · {item.outputVideoLabel}
                </span>
                <div className="aspect-[9/16] w-full max-w-[320px] overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100">
                  <video
                    ref={outputVideoRef}
                    key={item.outputVideoId}
                    src={buildDriveVideoUrl(item.outputVideoId)}
                    poster={buildDriveThumbUrl(item.outputVideoId, 900)}
                    controls
                    playsInline
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Right Pane: Scrollable References, Specs & Prompt */}
          <div
            data-testid="modal-right-panel"
            className="flex min-h-0 flex-col gap-6 p-5 sm:p-6 lg:col-span-5 lg:overflow-y-auto"
          >

            {item.audioRefId && (
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-800">
                  <Volume2 className="h-4 w-4 text-blue-600" aria-hidden="true" />
                  <span>Voice Timbre Reference ({item.audioRefLabel})</span>
                </div>
                <audio
                  controls
                  src={buildDriveVideoUrl(item.audioRefId)}
                  className="mt-2.5 h-9 w-full"
                />
              </div>
            )}

            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-semibold text-zinc-900">
                  Influencer Reference Photos ({item.referencePhotos.length})
                </h3>
                <span className="text-xs text-zinc-500">
                  {item.influencer} {item.influencerId}
                </span>
              </div>
              <div className="mt-2.5 grid grid-cols-4 gap-2">
                {item.referencePhotos.map((photo) => (
                  <a
                    key={photo.id}
                    href={buildDriveViewUrl(photo.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Open ${photo.label} in Drive`}
                    className="group overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100"
                  >
                    <img
                      src={buildDriveThumbUrl(photo.id, 400)}
                      alt={`${item.influencer} ${photo.label}`}
                      referrerPolicy="no-referrer"
                      className="aspect-[3/4] w-full object-cover transition-transform duration-150 group-hover:scale-105"
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 border-y border-zinc-100 py-4 text-xs">
              <div>
                <div className="text-zinc-500">Verified Cost</div>
                <div className="mt-0.5 font-mono font-semibold text-zinc-950 tabular-nums">
                  {formatCurrencyUsd(item.costUsd)} ({item.actualDurationSec}s)
                </div>
              </div>
              <div>
                <div className="text-zinc-500">Inference Time</div>
                <div className="mt-0.5 font-mono font-semibold text-zinc-950 tabular-nums">
                  {Math.floor(item.inferenceSec / 60)}m{' '}
                  {Math.round(item.inferenceSec % 60)}s
                </div>
              </div>
              <div>
                <div className="text-zinc-500">Output Spec</div>
                <div className="mt-0.5 font-mono text-zinc-800 tabular-nums">
                  {item.resolution} · {item.fileSizeMb} MB
                </div>
              </div>
              <div>
                <div className="text-zinc-500">WaveSpeed Endpoint</div>
                <div className="mt-0.5 truncate font-mono text-zinc-800">
                  {item.endpoint}
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-xs font-semibold text-zinc-900">
                  Exact Prompt Sent
                </h3>
                <button
                  type="button"
                  onClick={handleCopyPrompt}
                  className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-100 cursor-pointer"
                >
                  {promptCopied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copy Prompt</span>
                    </>
                  )}
                </button>
              </div>
              <p
                className={`mt-2 text-xs leading-relaxed text-zinc-600 ${
                  showFullPrompt ? '' : 'line-clamp-4'
                }`}
              >
                {item.prompt}
              </p>
              <button
                type="button"
                onClick={() => setShowFullPrompt((v) => !v)}
                className="mt-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
              >
                {showFullPrompt ? 'Show less' : 'Read full prompt'}
              </button>
            </div>

            <div className="mt-auto flex items-center justify-between border-t border-zinc-100 pt-4 text-xs text-zinc-500">
              <span className="font-mono truncate">
                Billing: {item.billingUuid.slice(0, 12)}…
              </span>
              <a
                href={`https://drive.google.com/drive/folders/${item.folderId}?usp=sharing`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-zinc-900 hover:underline whitespace-nowrap"
              >
                <span>Open Test Folder</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
