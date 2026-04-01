import { Link } from "react-router-dom";
import { servicesData } from "../../data/servicesData";

function ServicesCTA() {
  const { ctaSection } = servicesData;

  return (
    <section className="mx-4 mb-24 rounded-[3rem] bg-[#121212] py-24 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-8">
        <h2 className="font-headline mb-6 text-4xl font-extrabold leading-tight md:text-5xl">
          {ctaSection.title.main}{" "}
          <span className="text-[#ff7a30]">
            {ctaSection.title.highlight}
          </span>
        </h2>

        <p className="mx-auto mb-10 max-w-2xl leading-relaxed text-zinc-400">
          {ctaSection.description}
        </p>

        <Link
          to={ctaSection.button.path}
          className="rounded-full bg-[#ff7a30] px-8 py-4 font-bold text-white transition-transform hover:scale-105"
        >
          {ctaSection.button.text}
        </Link>
      </div>
    </section>
  );
}

export default ServicesCTA;