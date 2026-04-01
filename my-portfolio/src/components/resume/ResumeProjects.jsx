import { resumeData } from "../../data/resumeData";
import { projectsData } from "../../data/projectsData";

function ResumeProjects() {
  const { projectsSection } = resumeData;

  const projects = projectsSection.projectIds
    .map((id) =>
      projectsData.projectsList.find((project) => project.id === id)
    )
    .filter(Boolean);

  return (
    <section className="px-6 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#ff7a30]">
            {projectsSection.badge}
          </p>

          <h2 className="font-headline text-4xl font-extrabold leading-tight md:text-5xl">
            {projectsSection.title}
          </h2>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-zinc-200"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="mt-1 inline-block rounded-full bg-zinc-100 px-4 py-1 text-sm font-medium text-zinc-600">
                    {project.category}
                  </p>
                </div>
              </div>

              <p className="mt-5 max-w-4xl leading-relaxed text-zinc-600">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResumeProjects;