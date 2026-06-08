import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import GameHero from "@/component/games/details/game-hero";
import GameReviews from "@/component/games/details/game-reviews";

export default function GameDetailsPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch game data based on params.slug
  return (
    <div className="bg-background min-h-screen text-on-surface font-body selection:bg-primary selection:text-on-primary overflow-x-hidden relative">
      {/* Hero Backdrop Cover Photo */}
      <div className="absolute top-0 left-0 w-full h-[500px] md:h-[650px] overflow-hidden pointer-events-none z-0">
        <img 
          alt="Backdrop" 
          className="w-full h-full object-cover object-top opacity-50" 
          style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 100%)' }}
          src="/elder 2.jpg"
        />
      </div>

      <div className="relative z-50">
        <Navbar />
      </div>
      
      <main className="w-full max-w-[1100px] mx-auto px-gutter mt-32 md:mt-[300px] pb-12 flex flex-col gap-12 relative z-20">
        <GameHero />
        <GameReviews />
      </main>

      <Footer />
    </div>
  );
}
