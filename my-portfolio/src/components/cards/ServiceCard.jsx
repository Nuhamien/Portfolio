function ServiceCard({ title, description, image, compact = false, index = 0 }) {
  const fallbackLabels = [
    "UI/UX",
    "WEB",
    "APP",
    "CODE",
    "DESIGN",
    "BUILD",
  ];

  return (
    <div
      className={`group relative overflow-hidden rounded-[2.5rem] bg-[#121212] p-8 pt-10 transition-all duration-500 hover:-translate-y-2 ${
        compact ? "h-[420px]" : "h-[460px]"
      }`}
    >
      <div className="relative z-20">
        <h3 className="mb-4 text-2xl font-bold text-[#ff7a30]">{title}</h3>

        <p className="mb-8 max-w-[240px] text-sm leading-relaxed text-zinc-400">
          {description}
        </p>
      </div>

      <div className="absolute bottom-12 left-1/2 z-10 aspect-[4/3] w-[82%] -translate-x-1/2">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full rounded-2xl object-cover shadow-[0_20px_50px_-12px_rgba(255,122,48,0.3)]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-2xl bg-zinc-800 shadow-[0_20px_50px_-12px_rgba(255,122,48,0.15)]">
            <span className="text-3xl font-black tracking-[0.2em] text-zinc-600">
              {fallbackLabels[index] || "SERVICE"}
            </span>
          </div>
        )}
      </div>

      <button className="absolute bottom-8 right-8 z-30 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-white shadow-lg transition-colors group-hover:bg-[#ff7a30]">
        ↗
      </button>

      <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#ff7a30]/10 blur-[60px]"></div>
    </div>
  );
}

export default ServiceCard;