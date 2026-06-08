import Link from "next/link";

export default function ListHero() {
  return (
    <div className="md:col-span-8 flex flex-col gap-stack-sm drop-shadow-md">
      {/* Creator Meta */}
      <div className="flex items-center gap-3 mb-2">
        <img 
          alt="Avatar" 
          className="w-8 h-8 rounded-full border border-outline-variant" 
          src="/users/pewdiepie.jpg"
        />
        <div className="flex items-center gap-2 font-label-md text-label-md">
          <span className="text-on-surface-variant">List by</span>
          <Link className="text-on-surface font-bold hover:text-primary transition-colors" href="#">okaybro1</Link>
          <span className="bg-surface-container-high/80 backdrop-blur-sm text-primary px-1.5 py-0.5 rounded text-[10px] tracking-wider uppercase border border-outline-variant/50">Pro</span>
        </div>
      </div>
      
      {/* Title */}
      <h1 className="font-display text-display-lg md:text-[56px] md:leading-[64px] text-white drop-shadow-lg mb-4 font-bold tracking-tight">
        Games everyone should play at least once
      </h1>
      
      {/* Description */}
      <div className="prose prose-invert prose-p:font-body prose-p:text-body-md prose-p:text-on-surface/90 prose-p:leading-relaxed max-w-none space-y-4">
        <p>I asked the community what's one game everyone should play at least once in their lifetime to create a definitive list of absolute essentials.</p>
        <p>Whether it's for historical significance, groundbreaking mechanics, or unparalleled storytelling, these are the titles that define the medium.</p>
        <p>Feel free to comment your progress on the list or any games you think should be added or removed. Thanks!</p>
      </div>
    </div>
  );
}
