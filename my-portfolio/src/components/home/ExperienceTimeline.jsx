import { experienceData } from "../../data/experience";

function ExperienceTimeline() {
  return (
    <section className="px-6 py-28 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-headline mb-20 text-center text-4xl font-extrabold md:text-5xl">
          My <span className="text-[#ff7a30]">Work Experience</span>
        </h2>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-zinc-300 md:block"></div>

          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <div
                key={item.id}
                className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-10"
              >
                <div className="text-left md:text-right">
                  <h3 className="text-2xl font-bold">{item.company}</h3>
                  <p className="text-sm font-medium text-zinc-400">
                    {item.period}
                  </p>
                </div>

                <div className="relative z-10 hidden items-start justify-center md:flex">
                  <div
                    className={`mt-2 flex h-10 w-10 items-center justify-center rounded-full border-4 ${
                      index === 1
                        ? "border-white bg-zinc-800"
                        : "border-[#ff7a30] bg-white"
                    }`}
                  >
                    <div
                      className={`h-2 w-2 rounded-full ${
                        index === 1 ? "bg-white" : "bg-[#ff7a30]"
                      }`}
                    ></div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-2xl font-bold">{item.role}</h3>
                  <p className="max-w-sm text-sm leading-relaxed text-zinc-500">
                    {item.description}
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