import ServiceCard from "../cards/ServiceCard";

function ServicesPreview({ data, services = [] }) {
  if (!data) return null;

  return (
    <section className="relative mx-4 overflow-hidden rounded-[3rem] bg-zinc-100 py-24">
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#ff7a30]">
              {data.badge}
            </p>

            <h2 className="font-headline flex items-center gap-2 text-4xl font-extrabold text-[#1a1a1a] md:text-5xl">
              {data.title?.main}
              <span className="text-[#ff7a30]">
                {data.title?.highlight}
              </span>
              <span className="text-[#ff7a30]">
                {data.title?.suffix}
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-zinc-500">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id || index}
              title={service.title}
              description={service.description}
              image={service.image || ""}
              compact={true}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;