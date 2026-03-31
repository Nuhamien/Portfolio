import { homeData } from "../../data/homeData";

function WhyHireMe() {
  const { about } = homeData;

  return (
    <section className="px-6 py-28 md:px-8">
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#ff7a30]">
            About Me
          </p>

          <h2 className="font-headline text-4xl font-extrabold leading-tight md:text-5xl">
            Why you should <span className="text-[#ff7a30]">work with me</span>
          </h2>
        </div>

        {/* CONTENT */}
        <div className="grid gap-10 md:grid-cols-2">

          {/* LEFT */}
          <div className="space-y-6 text-zinc-600">
            <p className="leading-relaxed">{about.intro}</p>

            <p className="leading-relaxed">{about.story}</p>

            <p className="leading-relaxed">{about.motivation}</p>

            <p className="leading-relaxed">{about.differentiator}</p>
          </div>

          {/* RIGHT - STATS */}
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-[2rem] bg-zinc-100 p-8">
              <h3 className="mb-2 text-3xl font-black text-[#ff7a30]">
                {about.stats.projects}
              </h3>
              <p className="text-sm text-zinc-500">Projects</p>
            </div>

            <div className="rounded-[2rem] bg-zinc-100 p-8">
              <h3 className="mb-2 text-3xl font-black text-[#ff7a30]">
                {about.stats.experience}
              </h3>
              <p className="text-sm text-zinc-500">Experience</p>
            </div>

            <div className="rounded-[2rem] bg-zinc-100 p-8">
              <h3 className="mb-2 text-3xl font-black text-[#ff7a30]">
                {about.stats.certifications || "—"}
              </h3>
              <p className="text-sm text-zinc-500">Certifications</p>
            </div>

            <div className="rounded-[2rem] bg-zinc-100 p-8">
              <h3 className="mb-2 text-3xl font-black text-[#ff7a30]">
                {about.stats.achievements || "—"}
              </h3>
              <p className="text-sm text-zinc-500">Achievements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyHireMe;