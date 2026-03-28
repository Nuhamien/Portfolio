import { testimonialsData } from "../../data/testimonials";
import TestimonialCard from "../cards/TestimonialCard";

function Testimonials() {
  return (
    <section className="relative mx-4 overflow-hidden rounded-[3rem] bg-[#121212] py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-20 text-center">
          <h2 className="font-headline mb-6 text-4xl font-extrabold text-white md:text-5xl">
            Client <span className="text-[#ff7a30]">Testimonials</span>
          </h2>

          <p className="mx-auto max-w-xl text-sm leading-relaxed text-zinc-500">
            Feedback from clients who trusted my design process and product
            thinking to bring their ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonialsData.map((item) => (
            <TestimonialCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;