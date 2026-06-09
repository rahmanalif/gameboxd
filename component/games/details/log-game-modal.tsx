"use client";

import { useState, useEffect } from "react";

interface LogGameModalProps {
  isOpen: boolean;
  onClose: () => void;
  gameTitle?: string;
  gamePoster?: string;
}

function StarRating({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const [hover, setHover] = useState(0);
  const display = hover || value;

  return (
    <div className="flex items-center gap-0.5" onMouseLeave={() => setHover(0)}>
      {[1, 2, 3, 4, 5].map((star) => {
        const isFull = display >= star;
        const isHalf = !isFull && display >= star - 0.5;
        return (
          <div key={star} className="relative w-9 h-9 flex items-center justify-center cursor-pointer">
            <span
              className="material-symbols-outlined text-[32px] text-primary select-none"
              style={{ fontVariationSettings: isFull || isHalf ? "'FILL' 1" : "'FILL' 0" }}
            >
              {isHalf ? "star_half" : "star"}
            </span>
            <div className="absolute inset-0 flex">
              <div
                className="w-1/2 h-full"
                onMouseEnter={() => setHover(star - 0.5)}
                onClick={() => onChange(value === star - 0.5 ? 0 : star - 0.5)}
              />
              <div
                className="w-1/2 h-full"
                onMouseEnter={() => setHover(star)}
                onClick={() => onChange(value === star ? 0 : star)}
              />
            </div>
          </div>
        );
      })}
      {display > 0 && (
        <span className="ml-2 font-headline text-headline-sm font-bold text-primary tabular-nums">
          {display % 1 === 0 ? `${display}.0` : display}
        </span>
      )}
    </div>
  );
}

export default function LogGameModal({
  isOpen,
  onClose,
  gameTitle = "Elden Ring",
  gamePoster = "/elder.jpg",
}: LogGameModalProps) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [datePlayed, setDatePlayed] = useState(new Date().toISOString().split("T")[0]);
  const [platform, setPlatform] = useState("");
  const [finished, setFinished] = useState(true);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-[520px] bg-surface-container border border-surface-variant rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 text-on-surface-variant hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Header */}
        <div className="flex items-center gap-5 p-6 pb-5 border-b border-surface-variant bg-surface-container-low">
          <div className="w-12 h-[72px] shrink-0 rounded overflow-hidden border border-surface-variant shadow-md">
            <img alt={gameTitle} src={gamePoster} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-label-md font-bold tracking-widest uppercase text-on-surface-variant mb-1">
              Log Game
            </p>
            <h2 className="font-display text-headline-sm text-white font-bold tracking-tight">
              {gameTitle}
            </h2>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-6">
          {/* Rating */}
          <div className="flex flex-col gap-3">
            <label className="text-label-md font-bold tracking-widest uppercase text-on-surface-variant">
              Rating
            </label>
            <StarRating value={rating} onChange={setRating} />
          </div>

          {/* Finished toggle */}
          <div className="flex items-center justify-between py-1">
            <span className="text-label-md font-bold tracking-widest uppercase text-on-surface-variant">
              Finished
            </span>
            <button
              type="button"
              onClick={() => setFinished(!finished)}
              className={`w-12 h-6 rounded-full relative transition-colors duration-200 ${
                finished ? "bg-primary" : "bg-surface-variant"
              }`}
            >
              <div
                className={`absolute top-1 w-4 h-4 rounded-full transition-all duration-200 ${
                  finished ? "right-1 bg-[#00210b]" : "left-1 bg-on-surface-variant"
                }`}
              />
            </button>
          </div>

          {/* Date Played */}
          <div className="flex flex-col gap-2">
            <label className="text-label-md font-bold tracking-widest uppercase text-on-surface-variant">
              Date Played
            </label>
            <input
              type="date"
              value={datePlayed}
              onChange={(e) => setDatePlayed(e.target.value)}
              className="bg-surface-container-high border border-surface-variant rounded-lg p-3 text-body-md focus:outline-none focus:border-primary transition-colors text-on-surface [color-scheme:dark] cursor-pointer"
            />
          </div>

          {/* Platform */}
          <div className="flex flex-col gap-2">
            <label className="text-label-md font-bold tracking-widest uppercase text-on-surface-variant">
              Platform
            </label>
            <div className="relative">
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="w-full bg-surface-container-high border border-surface-variant rounded-lg p-3 text-body-md focus:outline-none focus:border-primary transition-colors text-on-surface appearance-none cursor-pointer pr-10"
              >
                <option value="">Select platform...</option>
                <option value="ps5">PlayStation 5</option>
                <option value="ps4">PlayStation 4</option>
                <option value="ps2">PlayStation 2</option>
                <option value="xbox">Xbox Series X/S</option>
                <option value="pc">PC (Steam)</option>
                <option value="switch">Nintendo Switch</option>
                <option value="mobile">Mobile</option>
              </select>
              <span
                className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none"
                style={{ fontSize: "18px" }}
              >
                expand_more
              </span>
            </div>
          </div>

          {/* Review */}
          <div className="flex flex-col gap-2">
            <div className="flex items-baseline gap-2">
              <label className="text-label-md font-bold tracking-widest uppercase text-on-surface-variant">
                Review
              </label>
              <span className="text-label-sm text-on-surface-variant/60">(optional)</span>
            </div>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              rows={3}
              placeholder="Share your thoughts..."
              className="bg-surface-container-high border border-surface-variant rounded-lg p-3 text-body-md focus:outline-none focus:border-primary transition-colors text-on-surface resize-none placeholder:text-on-surface-variant/40"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-4 pt-2 border-t border-surface-variant">
            <button
              type="button"
              onClick={onClose}
              className="text-label-md font-bold tracking-widest text-on-surface-variant hover:text-white transition-colors uppercase"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-primary text-[#00210b] px-8 py-3 rounded-lg font-bold tracking-[0.15em] hover:bg-primary-container transition-all shadow-lg active:scale-95 uppercase text-label-md flex items-center gap-2"
            >
              <span
                className="material-symbols-outlined text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                edit_square
              </span>
              SAVE LOG
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
