import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import ListHero from "@/component/lists/details/list-hero";
import ListActions from "@/component/lists/details/list-actions";
import ListGrid from "@/component/lists/details/list-grid";

export default function ListDetailsPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch list data based on params.slug
  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen flex flex-col font-body selection:bg-primary-container selection:text-on-primary-container relative">
      {/* Hero Backdrop */}
      <div className="absolute top-0 left-0 w-full h-[500px] md:h-[650px] overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/70 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-surface/90 via-surface/40 to-surface/90 z-10"></div>
        <img 
          alt="Backdrop" 
          className="w-full h-full object-cover object-top opacity-60" 
          style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 100%)' }}
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbNUtmF5Yq4H7duAOwww_Umdh0kNJBX1UTLBxLs8AjbaVsdKPF4gle3Ux3bf1wG2_J1H41TDjd5RIZeDuHapCGI-p2Zyc1Xr-EePFLQiKWsi8gGuW3I7yrjG5IyUPwJhm7jZQ-6I89zbYZPgaNIV2Yg338FqPgJWASgIY9y0UpORY-eiZE8tykpQCLKP0RYhwfxRrdkEp7XnvRy61-Bx8zVnG9_kCMenjy2hn8jzcpgQ99P7r77tUAvo7CABwkSAgzKCFnaDSj0-4"
        />
      </div>

      <Navbar />
      
      <main className="flex-grow w-full max-w-[1100px] mx-auto px-gutter mt-16 md:mt-24 relative z-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <ListHero />
          <ListActions />
        </div>
        
        <ListGrid />
      </main>

      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
}
