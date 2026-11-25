import { ArrowUpRight, Film, Play, SplitSquareHorizontal } from 'lucide-react';
import { useState } from 'react';
import {
  buildDriveThumbUrl,
  buildDriveVideoUrl,
  buildDriveViewUrl,
  type MagiTestItem,
} from '../data/magiTests';
import { formatCurrencyUsd } from '../utils/filterTests';
import { getModeBadgeClass, getNicheBadgeClass } from '../utils/badgeStyles';

interface VideoCardProps {
  item: MagiTestItem;
  onInspect: (item: MagiTestItem) => void;
}

export function VideoCard({ item, onInspect }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const posterUrl = buildDriveThumbUrl(item.outputVideoId, 900);
  const streamUrl = buildDriveVideoUrl(item.outputVideoId);

  return (
    <article
      data-testid={`video-card-${item.code}`}
      className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-colors duration-150 hover:border-zinc-300"
    >
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-zinc-950">
        {isPlaying && !videoError ? (
          <video
            key={item.outputVideoId}
            src={streamUrl}
            poster={posterUrl}
            controls
            autoPlay
            playsInline
            onError={() => setVideoError(true)}
            aria-label={`Test ${item.code} ${item.title} video player`}
            className="h-full w-full object-cover"
          />
        ) : videoError ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-zinc-900 p-6 text-center text-zinc-200">
            <Film className="h-8 w-8 text-zinc-400" aria-hidden="true" />
            <p className="text-sm font-medium">Stream preview unavailable</p>
            <a
              href={buildDriveViewUrl(item.outputVideoId)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-2 text-xs font-medium text-zinc-950 transition-colors hover:bg-zinc-100"
            >
              <span>Open in Google Drive</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        ) : (
          <>
            {!imgError ? (
              <img
                src={posterUrl}
                alt={`Preview frame for Test ${item.code}: ${item.title} starring ${item.influencer}`}
                referrerPolicy="no-referrer"
                loading="lazy"
                onError={() => setImgError(true)}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-b from-zinc-800 to-zinc-950 p-6 text-center text-zinc-300">
                <Film className="h-8 w-8 text-zinc-400" aria-hidden="true" />
                <span className="text-sm font-medium">{item.title}</span>
              </div>
            )}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"
            />

            <button
              type="button"
              onClick={() => {
                setVideoError(false);
                setIsPlaying(true);
              }}
              aria-label={`Play Test ${item.code}: ${item.title}`}
              className="group absolute inset-0 flex flex-col items-center justify-center cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-blue-500"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-zinc-950 shadow-sm transition-transform duration-150 group-hover:scale-105">
                <Play className="ml-0.5 h-6 w-6 fill-current" aria-hidden="true" />
              </span>
            </button>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4 text-xs text-white">
              <span className="font-mono tabular-nums tracking-tight text-white/95">
                {item.durationSec}s · {item.resolution}
              </span>
              <span className="font-mono tabular-nums text-white/95">
                {formatCurrencyUsd(item.costUsd)}
              </span>
            </div>
          </>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-medium">
            <span
              className={`inline-flex items-center rounded-md border px-2 py-0.5 leading-tight ${getNicheBadgeClass(item.niche)}`}
            >
              {item.niche}
            </span>
            <span
              className={`inline-flex items-center rounded-md border px-2 py-0.5 leading-tight ${getModeBadgeClass(item.mode)}`}
            >
              {item.modeDetail}
            </span>
          </div>

          <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-zinc-950">
            {item.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-zinc-700">
            {item.influencer}{' '}
            <span className="font-mono text-xs font-normal text-zinc-500">
              {item.influencerId}
            </span>
          </p>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-zinc-600">
            {item.sceneSummary}
          </p>
        </div>

        <div className="mt-4 border-t border-zinc-100 pt-4">
          <div className="flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => onInspect(item)}
              className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold text-zinc-900 whitespace-nowrap transition-colors duration-150 hover:border-zinc-300 hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer"
            >
              <SplitSquareHorizontal className="h-3.5 w-3.5" aria-hidden="true" />
              <span>View Full Comparison</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
