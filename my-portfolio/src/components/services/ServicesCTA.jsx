import { Link } from "react-router-dom";

function ServicesCTA() {
  return (
    <section className="mx-4 mb-24 rounded-[3rem] bg-[#121212] py-24 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-8">
        <h2 className="font-headline mb-6 text-4xl font-extrabold leading-tight md:text-5xl">
          Have a project in mind?
          <span className="text-[#ff7a30]"> Let’s build it.</span>
        </h2>

        <p className="mx-auto mb-10 max-w-2xl leading-relaxed text-zinc-400">
          Whether it's design, frontend development, or both, I’m ready to help
          turn your ideas into a clean and functional digital product.
        </p>

        <Link
          to="/contact"
          className="rounded-full bg-[#ff7a30] px-8 py-4 font-bold text-white transition-transform hover:scale-105"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}

export default ServicesCTA;