import Link from "next/link";

const REVIEWS = [
  {
    id: 1,
    user: "Sarah Connor",
    avatar: "/users/pewdiepie.jpg",
    rating: 5,
    date: "24 Feb 2022",
    likes: "1.2k",
    comments: 42,
    content: "Miyazaki has done it again. The transition to an open world format hasn't diluted the masterful level design FromSoftware is known for; it's expanded it. Limgrave alone offers more compelling exploration than most full games. Every horizon promises a new horrifying discovery or a beautiful, tragic vista. A monumental achievement in environmental storytelling."
  },
  {
    id: 2,
    user: "Alex Mercer",
    avatar: "/users/pewdiepie.jpg",
    rating: 4,
    date: "01 Mar 2022",
    likes: "850",
    comments: 18,
    content: "Incredible scope and art direction. The legacy dungeons are some of the best content they've ever produced (Stormveil Castle is a masterclass in layout). However, the late-game boss balancing feels a bit overturned compared to previous titles, relying heavily on delayed attacks that break the rhythm of combat. Still, an unforgettable journey."
  }
];

export default function GameReviews() {
  return (
    <div className="mt-stack-lg border-t border-surface-variant pt-stack-sm">
      {/* Tab Navigation */}
      <div className="flex gap-8 border-b border-surface-variant/50 overflow-x-auto no-scrollbar">
        <button className="font-label-md text-label-md uppercase tracking-widest text-primary border-b-2 border-primary pb-3 whitespace-nowrap font-bold">POPULAR REVIEWS</button>
        <button className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant hover:text-white pb-3 whitespace-nowrap transition-colors font-bold">LISTS</button>
        <button className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant hover:text-white pb-3 whitespace-nowrap transition-colors font-bold">SIMILAR GAMES</button>
      </div>

      {/* Reviews Content */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {REVIEWS.map((review) => (
          <div key={review.id} className="bg-surface-container-low border border-surface-variant p-6 rounded-xl flex flex-col gap-4 hover:border-primary/30 transition-all duration-300 group">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-variant overflow-hidden border border-outline shadow-sm">
                  <img alt={review.user} className="w-full h-full object-cover" src={review.avatar} />
                </div>
                <div>
                  <div className="font-label-md text-label-md text-on-surface font-bold">{review.user}</div>
                  <div className="flex items-center text-primary-container gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: i < review.rating ? "'FILL' 1" : "'FILL' 0", fontSize: '14px' }}>star</span>
                    ))}
                  </div>
                </div>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant">{review.date}</span>
            </div>
            <p className="font-body text-body-md text-on-surface-variant line-clamp-4 leading-relaxed italic">
              "{review.content}"
            </p>
            <div className="flex items-center gap-5 mt-2 text-on-surface-variant font-label-sm text-label-sm">
              <span className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer group-hover:text-on-surface">
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>favorite</span> {review.likes} Likes
              </span>
              <span className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer group-hover:text-on-surface">
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chat_bubble</span> {review.comments} Comments
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button className="font-label-md text-label-md text-on-surface hover:text-primary transition-colors border border-surface-variant hover:border-primary px-8 py-3 rounded-lg font-bold tracking-widest uppercase">
          READ ALL REVIEWS
        </button>
      </div>
    </div>
  );
}
