import { resumeData } from "../../data/resumeData";

function ResumeSkills() {
  const { skillsSection } = resumeData;

  return (
    <section className="px-6 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-headline mb-12 text-3xl font-extrabold md:text-4xl">
          {skillsSection.title}
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {skillsSection.items.map((skill) => (
            <div
              key={skill.id}
              className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-zinc-200"
            >
              <h3 className="text-lg font-bold">{skill.name}</h3>
              <p className="text-sm text-[#ff7a30]">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResumeSkills;