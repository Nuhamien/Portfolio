import { homeData } from "../../data/homeData";

function AboutHero() {
  const { about } = homeData;

  return (
    <section className="px-6 pb-20 pt-40 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 inline-flex items-center rounded-full border border-zinc-200 px-4 py-1.5 text-sm font-medium text-zinc-600">
          About Me
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="font-headline mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
              I design and build
              <span className="text-[#ff7a30]"> simple, usable </span>
              digital experiences.
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-zinc-500">
              {about.intro}
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-zinc-100">
            <div className="flex min-h-[420px] items-center justify-center bg-zinc-200">
              <span className="text-sm font-medium text-zinc-500">
                Your Image Here
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;