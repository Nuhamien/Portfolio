import { homeData } from "../../data/homeData";

function AboutStory() {
  const { about } = homeData;

  return (
    <section className="mx-4 rounded-[3rem] bg-zinc-100 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:px-8">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#ff7a30]">
            My Story
          </p>

          <h2 className="font-headline text-4xl font-extrabold leading-tight md:text-5xl">
            A growing designer and frontend developer focused on clarity and
            simplicity.
          </h2>
        </div>

        <div className="space-y-6 text-zinc-600">
          <p className="leading-relaxed">{about.story}</p>
          <p className="leading-relaxed">{about.motivation}</p>
          <p className="leading-relaxed">{about.differentiator}</p>
        </div>
      </div>
    </section>
  );
}

export default AboutStory;