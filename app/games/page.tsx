import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import PopularGamesGrid from "@/component/games/popular-games-grid";
import PopularReviews from "@/component/games/popular-reviews";
import NewsAndArticles from "@/component/games/news-and-articles";

export default function GamesPage() {
  return (
    <div className="bg-background min-h-screen text-on-surface font-body selection:bg-primary selection:text-on-primary overflow-x-hidden">
      <Navbar />
      
      <div className="w-full max-w-[1100px] mx-auto px-gutter py-12 flex flex-col gap-12">
        <PopularGamesGrid />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column: Popular Reviews */}
          <div className="md:col-span-4">
            <PopularReviews />
          </div>
          
          {/* Right Column: News & Articles */}
          {/* <div>
            <NewsAndArticles />
          </div> */}
        </div>
      </div>

      <Footer />
    </div>
  );
}
