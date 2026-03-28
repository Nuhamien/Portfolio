function BlogCard({ category, author, date, title, image, bgColor }) {
  return (
    <div className="group cursor-pointer">
      <div
        className="relative mb-6 h-[380px] overflow-hidden rounded-[2.5rem] p-8"
        style={{ backgroundColor: bgColor }}
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute bottom-6 right-6 z-10">
          <button className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-900 text-white">
            ↗
          </button>
        </div>
      </div>

      <div className="mb-4 flex items-center gap-4">
        <span className="rounded-full bg-zinc-100 px-4 py-1 text-[10px] font-bold uppercase text-zinc-600">
          {category}
        </span>
      </div>

      <div className="mb-4 flex justify-between text-xs font-bold text-zinc-400">
        <span>{author}</span>
        <span>{date}</span>
      </div>

      <h3 className="text-2xl font-bold leading-tight transition-colors group-hover:text-[#ff7a30]">
        {title}
      </h3>
    </div>
  );
}

export default BlogCard;