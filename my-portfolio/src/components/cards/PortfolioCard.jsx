function PortfolioCard({ image, title, description, category }) {
  return (
    <div className="min-w-[85%] snap-center md:min-w-[600px]">
      <img
        src={image}
        alt={title}
        className="mb-8 w-full rounded-[2rem] shadow-xl"
      />

      <div className="text-center">
        <span className="mb-4 inline-block rounded-full bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-600">
          {category}
        </span>

        <h3 className="mb-4 text-3xl font-extrabold">{title}</h3>
        <p className="mx-auto max-w-2xl text-zinc-500">{description}</p>
      </div>
    </div>
  );
}

export default PortfolioCard;