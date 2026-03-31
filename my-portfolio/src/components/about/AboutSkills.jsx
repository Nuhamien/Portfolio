import { homeData } from "../../data/homeData";

function AboutSkills() {
  const { categories } = homeData.skills;

  return (
    <section className="px-6 pb-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#ff7a30]">
            Skills
          </p>

          <h2 className="font-headline text-4xl font-extrabold md:text-5xl">
            Tools and strengths I’m building through design and development.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <div key={category.title} className="rounded-[2rem] bg-zinc-100 p-8">
              <h3 className="mb-5 text-2xl font-bold">{category.title}</h3>

              <div className="space-y-4">
                {category.items.map((item) => (
                  <div key={item.name} className="border-b border-zinc-200 pb-3 last:border-b-0 last:pb-0">
                    <p className="font-medium text-zinc-900">{item.name}</p>
                    <p className="text-sm text-[#ff7a30]">{item.level}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSkills;