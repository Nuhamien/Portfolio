import { homeData } from "../../data/homeData";

function ServicesProcess() {
  const steps = homeData.process;

  return (
    <section className="px-6 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#ff7a30]">
            Process
          </p>

          <h2 className="font-headline text-4xl font-extrabold leading-tight md:text-5xl">
            How I approach every project
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-zinc-200"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#ff7a30] text-lg font-bold text-white">
                {index + 1}
              </div>

              <h3 className="mb-4 text-xl font-bold">{step.title}</h3>

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

export default ServicesProcess;