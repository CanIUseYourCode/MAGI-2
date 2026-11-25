import { Check, Share2 } from 'lucide-react';
import { useState } from 'react';
import { DRIVE_ROOT_FOLDER_URL } from '../data/magiTests';

export function Header() {
  const [copied, setCopied] = useState(false);

  const handleCopyShareLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200 bg-[#FAFAFA]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        <a
          href="#overview"
          className="font-display text-lg font-bold tracking-tight text-zinc-950 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
        >
          MAGI-2 Review
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-600"
        >
          <a
            href="#overview"
            className="whitespace-nowrap shrink-0 transition-colors hover:text-zinc-950 hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
          >
            Overview
          </a>
          <a
            href="#videos"
            className="whitespace-nowrap shrink-0 transition-colors hover:text-zinc-950 hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
          >
            All Videos
          </a>
          <a
            href="#cost-breakdown"
            className="whitespace-nowrap shrink-0 transition-colors hover:text-zinc-950 hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
          >
            Cost Breakdown
          </a>
          <a
            href={DRIVE_ROOT_FOLDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap shrink-0 transition-colors hover:text-zinc-950 hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
          >
            Drive Folder
          </a>
        </nav>

        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={handleCopyShareLink}
            className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-zinc-950 px-4 py-2 text-xs font-medium text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                <span>Link Copied</span>
              </>
            ) : (
              <>
                <Share2 className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Copy Share Link</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
