import { Check, ChevronDown, Layers } from 'lucide-react';
import { useEffect, useId, useRef, useState } from 'react';
import type { ModeFilter } from '../utils/filterTests';

interface ModeOption {
  value: ModeFilter;
  label: string;
  dotClass: string;
}

const MODE_OPTIONS: ModeOption[] = [
  {
    value: 'All',
    label: 'All Modes',
    dotClass: 'bg-zinc-400',
  },
  {
    value: 'Ref-to-Video',
    label: 'Ref-to-Video',
    dotClass: 'bg-indigo-500',
  },
  {
    value: 'Raw Text Retention',
    label: 'Raw Text Retention',
    dotClass: 'bg-fuchsia-500',
  },
  {
    value: '4-Photo Promo',
    label: '4-Photo Promo',
    dotClass: 'bg-rose-500',
  },
  {
    value: '1-Photo Img-to-Video',
    label: '1-Photo Img-to-Video',
    dotClass: 'bg-cyan-500',
  },
];

interface ModeDropdownProps {
  value: ModeFilter;
  onChange: (value: ModeFilter) => void;
}

export function ModeDropdown({ value, onChange }: ModeDropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const listboxId = useId();

  const selected =
    MODE_OPTIONS.find((option) => option.value === value) ?? MODE_OPTIONS[0];

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative shrink-0">
      <button
        ref={triggerRef}
        type="button"
        id="mode-filter"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-label="Filter by generation mode"
        onClick={() => setOpen((prev) => !prev)}
        className={`inline-flex h-[46px] w-full sm:w-52 items-center justify-between gap-2.5 rounded-xl border bg-white px-3.5 text-xs font-medium text-zinc-900 shadow-2xs transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
          open
            ? 'border-zinc-400 ring-2 ring-zinc-950/5'
            : 'border-zinc-200 hover:border-zinc-300'
        }`}
      >
        <span className="flex min-w-0 items-center gap-2">
          {value === 'All' ? (
            <Layers className="h-3.5 w-3.5 shrink-0 text-zinc-400" aria-hidden="true" />
          ) : (
            <span
              className={`h-2 w-2 shrink-0 rounded-full ${selected.dotClass}`}
              aria-hidden="true"
            />
          )}
          <span className="truncate">{selected.label}</span>
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-150 ${
            open ? 'rotate-180 text-zinc-700' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          id={listboxId}
          role="listbox"
          aria-label="Generation modes"
          className="absolute left-0 z-30 mt-2 w-full min-w-[220px] rounded-xl border border-zinc-200 bg-white p-1.5 shadow-lg shadow-zinc-950/8"
        >
          {MODE_OPTIONS.map((option) => {
            const isSelected = option.value === value;
            return (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-left text-xs font-medium transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-zinc-100 text-zinc-950'
                    : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <span
                    className={`h-2 w-2 shrink-0 rounded-full ${option.dotClass}`}
                    aria-hidden="true"
                  />
                  <span>{option.label}</span>
                </span>
                {isSelected && (
                  <Check className="h-3.5 w-3.5 shrink-0 text-zinc-900" aria-hidden="true" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
