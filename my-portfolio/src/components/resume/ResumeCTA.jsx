import { homeData } from "../../data/homeData";

function ResumeCTA() {
  const { contact } = homeData;

  return (
    <section className="mx-4 mb-24 rounded-[3rem] bg-[#121212] py-24 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-8">
        <h2 className="font-headline mb-6 text-4xl font-extrabold leading-tight md:text-5xl">
          Interested in my <span className="text-[#ff7a30]">work</span>?
        </h2>

        <p className="mx-auto mb-10 max-w-2xl leading-relaxed text-zinc-400">
          I’m open to opportunities where I can grow through UI/UX design,
          frontend development, and real product work.
        </p>

        <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`mailto:${contact.email}`}
            className="rounded-full bg-[#ff7a30] px-8 py-4 font-bold text-white transition-transform hover:scale-105"
          >
            Email Me
          </a>

          <a
            href={contact.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-zinc-800 px-8 py-4 font-bold text-white transition-colors hover:bg-zinc-700"
          >
            LinkedIn
          </a>
        </div>

        <div className="space-y-1 text-sm text-zinc-500">
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
          <p>{contact.location}</p>
        </div>
      </div>
    </section>
  );
}

export default ResumeCTA;