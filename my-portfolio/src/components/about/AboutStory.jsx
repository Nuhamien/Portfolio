import { aboutData } from "../../data/aboutData";

function AboutStory() {
  const { storySection } = aboutData;

  return (
    <section className="mx-4 rounded-[3rem] bg-zinc-100 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:px-8">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#ff7a30]">
            {storySection.badge}
          </p>

          <h2 className="font-headline text-4xl font-extrabold leading-tight md:text-5xl">
            {storySection.title}
          </h2>
        </div>

        <div className="space-y-6 text-zinc-600">
          {storySection.paragraphs.map((text, index) => (
            <p key={index} className="leading-relaxed">
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutStory;