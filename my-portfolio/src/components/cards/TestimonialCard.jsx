function TestimonialCard({ name, role, rating, image, text }) {
  return (
    <div className="relative rounded-[2.5rem] border border-white/5 bg-zinc-900/40 p-12 transition-colors hover:bg-zinc-900/60">
      <div className="mb-8 flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="h-14 w-14 rounded-full border-2 border-[#ff7a30] object-cover"
        />

        <div>
          <h4 className="text-lg font-bold text-white">{name}</h4>
          <p className="text-xs text-zinc-500">{role}</p>
        </div>
      </div>

      <div className="mb-6 flex gap-1 text-orange-500">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span className="ml-2 text-sm font-bold text-white">{rating}</span>
      </div>

      <p className="leading-relaxed italic text-zinc-400">{text}</p>
    </div>
  );
}

export default TestimonialCard;