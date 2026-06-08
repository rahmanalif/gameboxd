import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import ListHeader from "@/component/lists/list-header";
import FeaturedLists from "@/component/lists/featured-lists";
import AdBanner from "@/component/lists/ad-banner";
import RecentlyLiked from "@/component/lists/recently-liked";
import CrewPicks from "@/component/lists/crew-picks";

export default function ListsPage() {
  return (
    <div className="bg-background min-h-screen text-on-surface font-body selection:bg-primary selection:text-on-primary overflow-x-hidden">
      <Navbar />
      
      <main className="w-full max-w-[1100px] mx-auto px-gutter py-12 flex flex-col gap-12">
        <ListHeader />
        
        <FeaturedLists />
        
        {/* <AdBanner /> */}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Left Column: Recently Liked */}
          <div className="md:col-span-2">
            <RecentlyLiked />
          </div>
          
          {/* Right Column: Crew Picks */}
          <aside className="md:col-span-1 md:border-l border-surface-variant md:pl-10">
            <CrewPicks />
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
