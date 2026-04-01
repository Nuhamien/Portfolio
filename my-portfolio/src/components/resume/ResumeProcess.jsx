import { resumeData } from "../../data/resumeData";
import { servicesData } from "../../data/servicesData";

function ResumeProcess() {
  const { processSection } = resumeData;

  const processSteps = processSection.stepIds
    .map((id) =>
      servicesData.processTimeline.steps.find((step) => step.id === id)
    )
    .filter(Boolean);

  return (
    <section className="px-6 pb-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#ff7a30]">
            {processSection.badge}
          </p>

          <h2 className="font-headline text-4xl font-extrabold md:text-5xl">
            {processSection.title}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {processSteps.map((step, index) => (
            <div key={step.id} className="rounded-[2rem] bg-zinc-100 p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#ff7a30] text-lg font-bold text-white">
                {index + 1}
              </div>

              <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
              <p className="leading-relaxed text-zinc-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResumeProcess;