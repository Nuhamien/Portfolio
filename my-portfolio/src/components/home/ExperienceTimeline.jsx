function ExperienceTimeline({ data, steps = [] }) {
  if (!data) return null;

  return (
    <section className="px-6 py-28 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 max-w-2xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#ff7a30]">
            {data.badge}
          </p>

          <h2 className="font-headline text-4xl font-extrabold leading-tight md:text-5xl">
            {data.title?.main}{" "}
            <span className="text-[#ff7a30]">
              {data.title?.highlight}
            </span>
          </h2>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-6 top-0 hidden h-full w-[2px] bg-zinc-200 md:block"></div>

          <div className="space-y-10">
            {steps.map((step, index) => (
              <div
                key={step.id || index}
                className="grid grid-cols-1 gap-6 md:grid-cols-[auto_1fr] md:gap-8"
              >
                <div className="relative z-10 hidden md:flex">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff7a30] text-lg font-bold text-white shadow-lg shadow-orange-200">
                    {index + 1}
                  </div>
                </div>

                <div className="rounded-[2rem] bg-zinc-100 p-8">
                  <div className="mb-3 flex items-center gap-4 md:hidden">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff7a30] text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>

                  <h3 className="mb-3 hidden text-2xl font-bold md:block">
                    {step.title}
                  </h3>

                  <p className="max-w-2xl leading-relaxed text-zinc-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceTimeline;