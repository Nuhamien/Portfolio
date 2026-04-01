import { aboutData } from "../../data/aboutData";

function AboutHero() {
  const { hero } = aboutData;

  return (
    <section className="px-6 pb-20 pt-40 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 inline-flex items-center rounded-full border border-zinc-200 px-4 py-1.5 text-sm font-medium text-zinc-600">
          {hero.badge}
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="font-headline mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
              {hero.title.main}{" "}
              <span className="text-[#ff7a30]">{hero.title.highlight}</span>{" "}
              {hero.title.suffix}
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-zinc-500">
              {hero.description}
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-zinc-100">
            {hero.image.src ? (
              <img
                src={hero.image.src}
                alt={hero.image.alt}
                className="min-h-[420px] w-full object-cover"
              />
            ) : (
              <div className="flex min-h-[420px] items-center justify-center bg-zinc-200">
                <span className="text-sm font-medium text-zinc-500">
                  {hero.image.placeholder}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;