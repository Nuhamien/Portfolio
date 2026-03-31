import { Link } from "react-router-dom";

function ProjectsCTA() {
  return (
    <section className="mx-4 mb-24 rounded-[3rem] bg-[#121212] py-24 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-8">
        <h2 className="font-headline mb-6 text-4xl font-extrabold leading-tight md:text-5xl">
          Want to work on a <span className="text-[#ff7a30]">project</span>
          together?
        </h2>

        <p className="mx-auto mb-10 max-w-2xl leading-relaxed text-zinc-400">
          I’m open to projects where I can contribute through UI/UX design,
          frontend development, and clean digital problem-solving.
        </p>

        <Link
          to="/contact"
          className="inline-block rounded-full bg-[#ff7a30] px-8 py-4 font-bold text-white transition-transform hover:scale-105"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}

export default ProjectsCTA;