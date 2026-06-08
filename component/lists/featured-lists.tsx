import Link from "next/link";

const FEATURED_LISTS = [
  {
    id: 1,
    title: "Gameboxd's Top 500 Games",
    author: "Official Lists",
    isOfficial: true,
    gamesCount: "500 games",
    likes: "387K",
    comments: "33K",
    images: [
      "/games/124909-spider-man-3-windows-front-cover.png",
      "/games/grandtheftautovicecity_pc.jpg",
      "/games/igic.jpg",
      "/games/need for speed most wanted.jpg"
    ]
  },
  {
    id: 2,
    title: "Most Fans on Gameboxd",
    author: "Official Lists",
    isOfficial: true,
    gamesCount: "250 games",
    images: [
      "/games/124909-spider-man-3-windows-front-cover.png",
      "/games/grandtheftautovicecity_pc.jpg",
      "/games/igic.jpg",
      "/games/need for speed most wanted.jpg"
    ]
  },
  {
    id: 3,
    title: "One Million Played Club",
    author: "Alexander",
    avatar: "/users/pewdiepie.jpg",
    gamesCount: "135 games",
    images: [
      "/games/124909-spider-man-3-windows-front-cover.png",
      "/games/grandtheftautovicecity_pc.jpg",
      "/games/igic.jpg",
      "/games/need for speed most wanted.jpg"
    ]
  },
  {
    id: 4,
    title: "Top RPGs of the Decade",
    author: "Official Lists",
    isOfficial: true,
    gamesCount: "100 games",
    images: [
      "/games/124909-spider-man-3-windows-front-cover.png",
      "/games/grandtheftautovicecity_pc.jpg",
      "/games/igic.jpg",
      "/games/need for speed most wanted.jpg"
    ]
  }
];

export default function FeaturedLists() {
  return (
    <section>
      <div className="flex items-center justify-between mb-4 border-b border-surface-variant pb-2">
        <h2 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest font-bold">Featured Lists</h2>
        <Link href="#" className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 font-bold tracking-widest uppercase">
          ALL • OFFICIAL
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {FEATURED_LISTS.map((list) => (
          <Link key={list.id} href={`/lists/${list.title.toLowerCase().replace(/ /g, '-')}`} className="group cursor-pointer flex flex-col">
            <div className="flex h-32 mb-3 rounded-lg overflow-hidden border border-surface-variant group-hover:border-primary transition-colors shadow-sm">
              {list.images.map((img, i) => (
                <img 
                  key={i} 
                  alt={`Game ${i + 1}`} 
                  className={`w-1/4 h-full object-cover ${i < 3 ? 'border-r border-surface-variant' : ''}`} 
                  src={img} 
                />
              ))}
            </div>
            <h3 className="font-headline text-[18px] leading-tight text-on-surface group-hover:text-primary transition-colors font-bold mb-1 truncate">{list.title}</h3>
            <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-[11px]">
              <div className="flex items-center gap-1.5 shrink-0">
                {list.isOfficial ? (
                  <span className="w-4 h-4 rounded bg-primary text-on-primary flex items-center justify-center text-[9px] font-black">GB</span>
                ) : (
                  <div className="w-4 h-4 rounded-full overflow-hidden bg-surface-variant">
                    <img alt="Avatar" className="w-full h-full object-cover" src={list.avatar} />
                  </div>
                )}
                <span className="font-bold truncate max-w-[80px]">{list.author}</span>
              </div>
              <span className="text-on-surface-variant opacity-60 shrink-0">{list.gamesCount}</span>
              {list.likes && (
                <div className="flex items-center gap-2 ml-auto shrink-0">
                  <span className="flex items-center gap-0.5 text-on-surface-variant opacity-60">
                    <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span> {list.likes}
                  </span>
                  {list.comments && (
                    <span className="flex items-center gap-0.5 text-on-surface-variant opacity-60">
                      <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>chat_bubble</span> {list.comments}
                    </span>
                  )}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
