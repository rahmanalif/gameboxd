const FEATURED_MEMBERS = [
  {
    id: 1,
    name: "Elena Fisher",
    avatar: "/users/pewdiepie.jpg",
    stats: "5.7k games • 1.7k reviews",
    games: [
      "/users/pewdiepie.jpg",
      "/users/pewdiepie.jpg",
      "/users/pewdiepie.jpg",
      "/users/pewdiepie.jpg"
    ]
  },
  {
    id: 2,
    name: "Alex Chen",
    avatar: "/users/pewdiepie.jpg",
    stats: "664 games • 561 reviews",
    games: [
      "/users/pewdiepie.jpg",
      "/users/pewdiepie.jpg",
      "/users/pewdiepie.jpg",
      "/users/pewdiepie.jpg"
    ]
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    avatar: "/users/pewdiepie.jpg",
    stats: "377 games • 335 reviews",
    games: [
      "/users/pewdiepie.jpg",
      "/users/pewdiepie.jpg",
      "/users/pewdiepie.jpg",
      "/users/pewdiepie.jpg"
    ]
  },
  {
    id: 4,
    name: "NeoPixel",
    avatar: "/users/pewdiepie.jpg",
    stats: "1.4k games • 169 reviews",
    games: [
      "/users/pewdiepie.jpg",
      "/users/pewdiepie.jpg",
      "/users/pewdiepie.jpg",
      "/users/pewdiepie.jpg"
    ]
  },
  {
    id: 5,
    name: "RetroRogue",
    avatar: "/users/pewdiepie.jpg",
    stats: "1k games • 112 reviews",
    games: [
      "/users/pewdiepie.jpg",
      "/users/pewdiepie.jpg",
      "/users/pewdiepie.jpg",
      "/users/pewdiepie.jpg"
    ]
  }
];

export default function FeaturedMembers() {
  return (
    <section className="mb-stack-lg">
      <h2 className="font-label-md text-label-md text-on-surface-variant tracking-wider uppercase border-b border-outline-variant mb-6 pb-2 font-bold">Featured Members</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {FEATURED_MEMBERS.map((member) => (
          <div key={member.id} className="flex flex-col items-center group cursor-pointer">
            <div className="relative mb-3">
              <img 
                alt={member.name} 
                className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-surface-container-high object-cover group-hover:border-primary transition-colors shadow-sm" 
                src={member.avatar}
              />
              <button className="absolute bottom-0 right-2 md:right-4 bg-surface-container-high hover:bg-primary hover:text-on-primary-container text-on-surface rounded-full w-8 h-8 flex items-center justify-center border-2 border-background transition-colors shadow-sm">
                <span className="material-symbols-outlined text-sm font-bold">add</span>
              </button>
            </div>
            <h3 className="font-headline text-lg text-on-surface font-bold leading-tight group-hover:text-primary transition-colors text-center">{member.name}</h3>
            <p className="font-label-sm text-[11px] text-on-surface-variant mb-3 text-center opacity-80">{member.stats}</p>
            <div className="flex gap-1 justify-center">
              {member.games.map((img, i) => (
                <img 
                  key={i} 
                  alt="Game Poster" 
                  className="w-8 h-12 object-cover rounded-sm border border-outline-variant/30 shadow-sm" 
                  src={img}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
