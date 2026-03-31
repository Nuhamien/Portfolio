import { homeData } from "../../data/homeData";

function ResumeHero() {
  return (
    <section className="px-6 pb-20 pt-40 md:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-zinc-200 px-4 py-1.5 text-sm font-medium text-zinc-600">
          Resume
        </div>

        <h1 className="font-headline mx-auto mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
          My skills, projects, and <span className="text-[#ff7a30]">growth journey</span>
        </h1>

        <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-500">
          A practical overview of my background in UI/UX design and frontend
          development, built around real projects, learning, and hands-on work.
        </p>

        <p className="mt-4 text-sm text-zinc-400">
          {homeData.about.stats.experience} • {homeData.about.stats.projects} projects
        </p>
      </div>
    </section>
  );
}

export default ResumeHero;