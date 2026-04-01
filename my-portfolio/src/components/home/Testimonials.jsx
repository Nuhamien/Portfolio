import { homeData } from "../../data/homeData";
import TestimonialCard from "../cards/TestimonialCard";

function Testimonials() {
  const { testimonials } = homeData;

  if (!testimonials.enabled) {
    return null;
  }

  const hasItems = testimonials.items && testimonials.items.length > 0;

  return (
    <section className="relative mx-4 overflow-hidden rounded-[3rem] bg-[#121212] py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#ff7a30]">
            {testimonials.badge}
          </p>

          <h2 className="font-headline mb-6 text-4xl font-extrabold text-white md:text-5xl">
            {testimonials.title.main}{" "}
            <span className="text-[#ff7a30]">
              {testimonials.title.highlight}
            </span>
          </h2>

          <p className="mx-auto max-w-xl text-sm leading-relaxed text-zinc-500">
            {testimonials.description}
          </p>
        </div>

        {hasItems ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonials.items.map((item) => (
              <TestimonialCard key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center md:p-14">
            <div className="mb-4 text-5xl text-[#ff7a30]">
              {testimonials.placeholder.quoteMark}
            </div>

            <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
              {testimonials.placeholder.title}
            </h3>

            <p className="mx-auto max-w-2xl leading-relaxed text-zinc-400">
              {testimonials.placeholder.description}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Testimonials;