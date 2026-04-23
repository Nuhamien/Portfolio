function TestimonialCard({ name, role, rating, image, text }) {
  return (
    <div className="relative rounded-[2.5rem] border border-white/5 bg-zinc-900/40 p-12 transition-colors hover:bg-zinc-900/60">
      <div className="mb-8 flex items-center gap-4">
        {image ? (
          <img
            src={image}
            alt={name || "User"}
            className="h-14 w-14 rounded-full border-2 border-[#ff7a30] object-cover"
          />
        ) : (
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#ff7a30] bg-zinc-800 text-sm font-bold text-white">
            {name?.charAt(0) || "U"}
          </div>
        )}

        <div>
          <h4 className="text-lg font-bold text-white">
            {name || "Anonymous"}
          </h4>
          <p className="text-xs text-zinc-500">
            {role || ""}
          </p>
        </div>
      </div>

      <div className="mb-6 flex gap-1 text-orange-500">
        {[...Array(5)].map((_, index) => (
          <span key={index}>★</span>
        ))}

        {rating ? (
          <span className="ml-2 text-sm font-bold text-white">
            {rating}
          </span>
        ) : null}
      </div>

      <p className="leading-relaxed italic text-zinc-400">
        {text || ""}
      </p>
    </div>
  );
}

export default TestimonialCard;