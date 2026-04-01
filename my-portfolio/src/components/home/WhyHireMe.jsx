import { Link } from "react-router-dom";
import { homeData } from "../../data/homeData";

function WhyHireMe() {
  const section = homeData?.whyHireMe;

  if (!section) return null;

  return (
    <section className="mx-4 my-12 rounded-[3rem] bg-zinc-100 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-8 md:grid-cols-2">
        <div className="relative">
          <div className="aspect-square w-full overflow-hidden rounded-[2rem] bg-white">
            <img
              src={section.image}
              alt="Why hire me"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-10">
          <h2 className="font-headline text-5xl font-extrabold leading-tight">
  {section.titleStart}
  <span className="text-[#ff7a30]">{section.titleHighlight}</span>
  {section.titleEnd}
</h2>

          <p className="leading-relaxed text-zinc-500">
            {section.description}
          </p>

          <div className="grid grid-cols-2 gap-12">
            {section.stats?.map((item, index) => (
              <div key={index}>
                <div className="mb-1 text-4xl font-black">{item.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <Link
            to={section.buttonLink}
            className="inline-block rounded-full bg-zinc-200 px-10 py-4 font-bold text-zinc-800 transition-colors hover:bg-zinc-300"
          >
            {section.buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WhyHireMe;