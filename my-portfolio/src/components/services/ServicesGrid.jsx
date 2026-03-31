import ServiceCard from "../cards/ServiceCard";
import { homeData } from "../../data/homeData";

function ServicesGrid() {
  const services = homeData.services;

  return (
    <section className="mx-4 rounded-[3rem] bg-zinc-100 py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#ff7a30]">
            Services
          </p>

          <h2 className="font-headline text-4xl font-extrabold leading-tight md:text-5xl">
            What I can help you <span className="text-[#ff7a30]">build</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image || ""}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;