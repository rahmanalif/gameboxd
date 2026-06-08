export default function ListHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-surface-variant pb-4">
      <div>
        <h1 className="font-display text-display-lg md:text-[48px] text-on-surface tracking-tight leading-tight font-bold">Discover Lists</h1>
        <p className="font-body text-body-md text-on-surface-variant mt-2">Curated collections from the community. Find your next obsession.</p>
      </div>
      <div className="flex items-center gap-4 mt-6 md:mt-0 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
        <button className="font-label-md text-label-md text-primary whitespace-nowrap font-bold tracking-widest">TRENDING</button>
        <button className="font-label-md text-label-md text-on-surface-variant hover:text-white whitespace-nowrap transition-colors font-bold tracking-widest">TOP RATED</button>
        <button className="font-label-md text-label-md text-on-surface-variant hover:text-white whitespace-nowrap transition-colors font-bold tracking-widest">BY FRIENDS</button>
        <div className="w-px h-4 bg-outline-variant mx-2"></div>
        <button className="flex items-center gap-1 font-label-md text-label-md bg-[#00e676] text-[#00210b] px-4 py-2 rounded-full hover:bg-primary transition-colors whitespace-nowrap shadow-md active:scale-95 font-bold tracking-widest">
          <span className="material-symbols-outlined text-[16px] font-bold">add</span> CREATE LIST
        </button>
      </div>
    </div>
  );
}
