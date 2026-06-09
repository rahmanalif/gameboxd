"use client";
import { useState } from "react";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Link from "next/link";

export default function CreateListPage() {
  const [privacy, setPrivacy] = useState("Anyone");
  const [games, setGames] = useState<{id: number, title: string}[]>([]);

  const privacyOptions = [
    { label: "Anyone", description: "Publicly visible on your profile and in search results." },
    { label: "Anyone with the link", description: "Only visible to people who have the URL." },
    { label: "Friends", description: "Only your mutual followers can see this list." },
    { label: "People you follow", description: "Visible to anyone you follow." },
    { label: "Private (only you)", description: "Completely hidden from everyone else." },
  ];

  return (
    <div className="bg-background min-h-screen text-on-surface font-body selection:bg-primary selection:text-on-primary">
      <Navbar />
      
      <main className="w-full max-w-[900px] mx-auto px-gutter py-12">
        <header className="mb-10 border-b border-surface-variant pb-6">
          <div className="flex items-center gap-2 text-label-md text-on-surface-variant mb-2 uppercase tracking-widest font-bold">
            <Link href="/lists" className="hover:text-primary transition-colors">Lists</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-on-surface">New List</span>
          </div>
          <h1 className="font-display text-display-lg md:text-[48px] text-on-surface tracking-tight leading-tight font-bold">New List</h1>
        </header>

        <form className="flex flex-col gap-10">
          {/* List Details Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-label-md font-bold tracking-widest uppercase text-on-surface-variant">Name of the list</label>
                <input 
                  type="text" 
                  placeholder="e.g. My Favorite RPGs of All Time"
                  className="bg-surface-container border border-surface-variant rounded-lg p-4 text-body-lg focus:outline-none focus:border-primary transition-colors text-on-surface"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-label-md font-bold tracking-widest uppercase text-on-surface-variant">Description</label>
                <textarea 
                  rows={4}
                  placeholder="Add a description..."
                  className="bg-surface-container border border-surface-variant rounded-lg p-4 text-body-md focus:outline-none focus:border-primary transition-colors text-on-surface resize-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-label-md font-bold tracking-widest uppercase text-on-surface-variant">Tags</label>
                <input 
                  type="text" 
                  placeholder="rpg, retro, ps2 (comma separated)"
                  className="bg-surface-container border border-surface-variant rounded-lg p-4 text-body-md focus:outline-none focus:border-primary transition-colors text-on-surface"
                />
              </div>
            </div>

            <aside className="flex flex-col gap-6 bg-surface-container-low p-6 rounded-xl border border-surface-variant h-fit">
              <label className="text-label-md font-bold tracking-widest uppercase text-on-surface-variant">Privacy Settings</label>
              <div className="flex flex-col gap-4">
                {privacyOptions.map((option) => (
                  <label key={option.label} className="flex flex-col gap-1 cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${privacy === option.label ? "border-primary bg-primary" : "border-outline group-hover:border-on-surface-variant"}`}>
                        {privacy === option.label && <div className="w-2 h-2 rounded-full bg-[#00210b]" />}
                      </div>
                      <input 
                        type="radio" 
                        name="privacy" 
                        className="hidden" 
                        value={option.label} 
                        checked={privacy === option.label}
                        onChange={(e) => setPrivacy(e.target.value)}
                      />
                      <span className={`text-label-md font-bold tracking-wide transition-colors ${privacy === option.label ? "text-primary" : "text-on-surface-variant group-hover:text-on-surface"}`}>
                        {option.label.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-label-sm text-on-secondary-container ml-8">{option.description}</p>
                  </label>
                ))}
              </div>
            </aside>
          </section>

          {/* Games Section */}
          <section className="flex flex-col gap-4 border-t border-surface-variant pt-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="font-display text-headline-sm text-on-surface">Add Games</h2>
                <p className="text-body-md text-on-surface-variant">Search for games to add to your list.</p>
              </div>
              <div className="relative flex-1 max-w-md">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
                <input 
                  type="text" 
                  placeholder="Enter game title..."
                  className="w-full bg-surface-container-high border border-surface-variant rounded-full py-3 pl-12 pr-4 text-body-md focus:outline-none focus:border-primary transition-colors text-on-surface"
                />
              </div>
            </div>

            <div className="mt-4 min-h-[200px] border-2 border-dashed border-surface-variant rounded-xl flex flex-col items-center justify-center text-on-surface-variant gap-2 bg-surface-container-lowest/50">
              <span className="material-symbols-outlined text-[48px] opacity-20">sports_esports</span>
              <p className="font-medium">No games added yet</p>
              <p className="text-label-md">Start typing above to build your collection</p>
            </div>
          </section>

          {/* Form Actions */}
          <div className="flex items-center justify-end gap-6 border-t border-surface-variant pt-10 mt-6">
            <Link href="/lists" className="text-label-md font-bold tracking-widest text-on-surface-variant hover:text-white transition-colors uppercase">
              Cancel
            </Link>
            <button 
              type="submit"
              className="bg-primary text-[#00210b] px-10 py-4 rounded-full font-bold tracking-[0.15em] hover:bg-primary-container transition-all shadow-lg active:scale-95 uppercase text-label-md"
            >
              Save List
            </button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}
