function PortfolioCard({
  image,
  title,
  description,
  category,
  liveLink,
  githubLink,
}) {
  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-[2rem] bg-white shadow-lg">
        <div className="flex h-[320px] w-full items-center justify-center bg-zinc-200">
          {image ? (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-sm text-zinc-400">No Image</span>
          )}
        </div>

        <div className="p-6 md:p-8">
          <span className="mb-4 inline-block rounded-full bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-600">
            {category}
          </span>

          <h3 className="mb-3 text-2xl font-extrabold text-zinc-900 md:text-3xl">
            {title}
          </h3>

          <p className="mb-6 text-sm leading-relaxed text-zinc-500 md:text-base">
            {description}
          </p>

          {(liveLink || githubLink) && (
            <div className="flex gap-4">
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#ff7a30] px-5 py-2 text-sm font-semibold text-white"
                >
                  Live
                </a>
              )}

              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-zinc-100 px-5 py-2 text-sm font-semibold text-zinc-700"
                >
                  GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;