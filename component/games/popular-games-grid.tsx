import Link from "next/link";
import GameCard from "@/component/game-card";

const POPULAR_GAMES = [
  {
    id: 1,
    title: "Spider-Man 3",
    rating: 4.2,
    views: "1.5m",
    likes: "124k",
    img: "/games/124909-spider-man-3-windows-front-cover.png"
  },
  {
    id: 2,
    title: "GTA Vice City",
    rating: 4.8,
    views: "8.5m",
    likes: "890k",
    img: "/games/grandtheftautovicecity_pc.jpg"
  },
  {
    id: 3,
    title: "IGI",
    rating: 4.3,
    views: "2.1m",
    likes: "156k",
    img: "/games/igic.jpg"
  },
  {
    id: 4,
    title: "Need for Speed Most Wanted",
    rating: 4.9,
    views: "3.2m",
    likes: "210k",
    img: "/games/need for speed most wanted.jpg"
  },
  {
    id: 5,
    title: "Prince of Persia",
    rating: 4.6,
    views: "4.5m",
    likes: "340k",
    img: "/games/prince of persia.jpg"
  },
  {
    id: 6,
    title: "House of the Dead",
    rating: 4.1,
    views: "650k",
    likes: "65k",
    img: "/games/house of the dead.jpg"
  }
];

export default function PopularGamesGrid() {
  return (
    <section className="flex flex-col gap-stack-sm">
      <div className="flex justify-between items-end border-b border-surface-variant pb-2">
        <h2 className="font-display text-headline-md text-on-surface">Popular Games This Week</h2>
        <Link href="#" className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
          MORE <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {POPULAR_GAMES.map((game) => (
          <Link key={game.id} href={`/games/${game.title.toLowerCase().replace(/ /g, '-')}`} className={`flex flex-col gap-2 group cursor-pointer ${game.id > 3 ? 'hidden md:flex' : ''} ${game.id > 4 ? 'lg:flex' : ''}`}>
            <div className={`relative w-full aspect-[2/3] border border-surface-variant rounded overflow-hidden group-hover:border-primary transition-colors ${game.isPlaceholder ? 'bg-surface-container-high' : ''}`}>
              {game.img ? (
                <img alt={game.title} className="w-full h-full object-cover" src={game.img} />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-headline-sm text-on-surface-variant text-center px-2">{game.title}</span>
                </div>
              )}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                <div className="bg-primary text-on-primary font-label-md px-3 py-1.5 rounded flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span> VIEW
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 px-1 mt-1 overflow-hidden">
              <div className="flex items-center justify-between w-full gap-2">
                {game.isAnticipated ? (
                  <div className="flex items-center text-on-surface-variant gap-0.5 font-label-sm uppercase tracking-wider text-[10px] whitespace-nowrap">
                    Anticipated
                  </div>
                ) : (
                  <div className="flex items-center text-primary gap-0 shrink-0">
                    {[...Array(5)].map((_, i) => {
                      const fill = i + 0.5 < (game.rating || 0) ? 1 : 0;
                      const icon = i + 0.5 === (game.rating || 0) ? 'star_half' : 'star';
                      return (
                        <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: `'FILL' ${fill}`, fontSize: '13px' }}>{icon}</span>
                      );
                    })}
                  </div>
                )}
                
                <div className="flex items-center text-on-surface-variant gap-2 font-label-sm text-[10px] shrink-0">
                  <span className="flex items-center gap-0.5 whitespace-nowrap">
                    <span className="material-symbols-outlined" style={{ fontSize: '13px' }}>{game.isAnticipated ? 'watch_later' : 'visibility'}</span> 
                    {game.views}
                  </span>
                  {game.likes && game.likes !== "0" && (
                    <span className="flex items-center gap-0.5 whitespace-nowrap">
                      <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1", fontSize: '13px' }}>favorite</span> 
                      {game.likes}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
