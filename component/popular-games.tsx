import Link from "next/link";
import GameCard from "@/component/game-card";

const GAMES = [
  { id: 1, title: "Spider-Man 3", rating: 4.2, views: "1.5m", likes: "124k", img: "/games/124909-spider-man-3-windows-front-cover.png" },
  { id: 2, title: "GTA Vice City", rating: 4.8, views: "8.5m", likes: "890k", img: "/games/grandtheftautovicecity_pc.jpg" },
  { id: 3, title: "IGI", rating: 4.3, views: "2.1m", likes: "156k", img: "/games/igic.jpg" },
  { id: 4, title: "Need for Speed Most Wanted", rating: 4.9, views: "3.2m", likes: "210k", img: "/games/need for speed most wanted.jpg" },
  { id: 5, title: "Prince of Persia", rating: 4.6, views: "4.5m", likes: "340k", img: "/games/prince of persia.jpg" },
  { id: 6, title: "House of the Dead", rating: 4.1, views: "650k", likes: "65k", img: "/games/house of the dead.jpg" },
];

export default function PopularGames() {
  return (
    <section>
      <div className="flex justify-between items-end border-b border-surface-variant pb-2 mb-8">
        <h2 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">POPULAR GAMES THIS WEEK</h2>
        <Link href="#" className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest">MORE</Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {GAMES.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}
