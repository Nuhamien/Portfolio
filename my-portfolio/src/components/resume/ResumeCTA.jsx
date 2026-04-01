import { resumeData } from "../../data/resumeData";
import { contactData } from "../../data/contactData";

function ResumeCTA() {
  const { ctaSection } = resumeData;

  return (
    <section className="mx-4 mb-24 rounded-[3rem] bg-[#121212] py-24 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-8">
        <h2 className="font-headline mb-6 text-4xl font-extrabold leading-tight md:text-5xl">
          {ctaSection.title.main}{" "}
          <span className="text-[#ff7a30]">
            {ctaSection.title.highlight}
          </span>
          ?
        </h2>

        <p className="mx-auto mb-10 max-w-2xl leading-relaxed text-zinc-400">
          {ctaSection.description}
        </p>

        <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`mailto:${contactData.email}`}
            className="rounded-full bg-[#ff7a30] px-8 py-4 font-bold text-white transition-transform hover:scale-105"
          >
            {ctaSection.buttons.primary.text}
          </a>

          <a
            href={contactData.contactInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-zinc-800 px-8 py-4 font-bold text-white transition-colors hover:bg-zinc-700"
          >
            {ctaSection.buttons.secondary.text}
          </a>
        </div>

        <div className="space-y-1 text-sm text-zinc-500">
          <p>{contactData.email}</p>
          <p>{contactData.phone}</p>
          <p>{contactData.location}</p>
        </div>
      </div>
    </section>
  );
}

export default ResumeCTA;