import { homeData } from "../../data/homeData";

function AboutValues() {
  const { about } = homeData;

  const values = [
    {
      title: "Clarity",
      description:
        "I focus on creating interfaces that are easy to understand and practical for real users.",
    },
    {
      title: "Simplicity",
      description: about.differentiator,
    },
    {
      title: "Growth",
      description: about.motivation,
    },
  ];

  return (
    <section className="mx-4 mb-24 rounded-[3rem] bg-[#121212] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#ff7a30]">
            Core Focus
          </p>

          <h2 className="font-headline text-4xl font-extrabold md:text-5xl">
            The principles behind my work.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((item) => (
            <div key={item.title} className="rounded-[2rem] bg-white/5 p-8">
              <h3 className="mb-4 text-2xl font-bold">{item.title}</h3>
              <p className="leading-relaxed text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutValues;