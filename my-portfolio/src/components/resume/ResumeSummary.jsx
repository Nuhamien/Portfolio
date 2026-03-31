import { homeData } from "../../data/homeData";

function ResumeSummary() {
  const { about } = homeData;

  return (
    <section className="px-6 pb-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] bg-zinc-100 p-8">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#ff7a30]">
              Profile
            </p>
            <p className="leading-relaxed text-zinc-600">{about.intro}</p>
          </div>

          <div className="rounded-[2rem] bg-zinc-100 p-8">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#ff7a30]">
              Focus
            </p>
            <div className="space-y-4 text-zinc-600">
              <p>{about.story}</p>
              <p>{about.differentiator}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeSummary;