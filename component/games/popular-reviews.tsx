const REVIEWS = [
  {
    id: 1,
    game: "Elden Ring",
    year: "2022",
    rating: 5,
    user: "User123",
    avatar: "/users/pewdiepie.jpg",
    poster: "/games/124909-spider-man-3-windows-front-cover.png",
    likes: 245,
    comments: 32,
    content: "An absolute masterpiece of open-world design. The sense of discovery is unmatched in modern gaming. Every corner hides a secret, a challenge, or a breathtaking view."
  },
  {
    id: 2,
    game: "Cyberpunk 2077",
    year: "2020",
    rating: 3,
    user: "NightCityNetrunner",
    avatar: "/users/pewdiepie.jpg",
    poster: "/games/grandtheftautovicecity_pc.jpg",
    likes: 180,
    comments: 45,
    content: "Flawed but fascinating. The narrative and world-building are top-tier, even if the mechanics sometimes fall short of the ambition."
  }
];

export default function PopularReviews() {
  return (
    <section className="flex flex-col gap-stack-sm">
      <div className="border-b border-surface-variant pb-2">
        <h2 className="font-display text-headline-sm text-on-surface">Popular Reviews This Week</h2>
      </div>
      <div className="flex flex-col gap-0 border border-surface-variant rounded bg-surface-container-low overflow-hidden">
        {REVIEWS.map((review) => (
          <div key={review.id} className="p-4 border-b border-surface-variant last:border-b-0 flex gap-4 hover:bg-surface-container transition-colors cursor-pointer">
            <div className="w-16 h-24 flex-shrink-0 bg-surface-variant rounded overflow-hidden border border-surface-variant">
              <img alt={`${review.game} Poster`} className="w-full h-full object-cover" src={review.poster} />
            </div>
            <div className="flex flex-col gap-1 flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-display text-headline-sm text-on-surface leading-none mb-1">{review.game}</h3>
                  <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
                    <span>{review.year}</span>
                    <div className="flex items-center text-primary gap-0">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: i < review.rating ? "'FILL' 1" : "'FILL' 0" }}>star</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
                  <span className="hidden sm:inline">Review by</span>
                  <div className="flex items-center gap-1.5">
                    <img alt={review.user} src={review.avatar} className="w-5 h-5 rounded-full object-cover border border-outline-variant/50" />
                    <span className="text-on-surface font-semibold">{review.user}</span>
                  </div>
                </div>
              </div>
              <p className="font-body text-body-md text-on-surface-variant mt-2 line-clamp-2">{review.content}</p>
              <div className="flex items-center gap-4 mt-2 text-on-surface-variant font-label-sm text-label-sm">
                <span className="flex items-center gap-1 hover:text-primary cursor-pointer"><span className="material-symbols-outlined text-[14px]">thumb_up</span> {review.likes}</span>
                <span className="flex items-center gap-1 hover:text-primary cursor-pointer"><span className="material-symbols-outlined text-[14px]">chat_bubble</span> {review.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
