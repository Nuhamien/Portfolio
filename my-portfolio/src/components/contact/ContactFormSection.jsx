import { contactData } from "../../data/contactData";

function ContactFormSection() {
  const { contactInfo, formSection } = contactData;

  return (
    <section className="mx-4 rounded-[3rem] bg-zinc-100 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:px-8">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#ff7a30]">
            {formSection.badge}
          </p>

          <h2 className="font-headline mb-6 text-4xl font-extrabold leading-tight md:text-5xl">
            {formSection.title}
          </h2>

          <p className="max-w-xl leading-relaxed text-zinc-600">
            {formSection.description}
          </p>

          <a
            href={`mailto:${contactInfo.email}`}
            className="mt-6 inline-block font-semibold text-[#ff7a30]"
          >
            {contactInfo.items.find(i => i.title === "Email")?.value}
          </a>
        </div>

        <form
          action={`mailto:${contactInfo.email}`}
          method="POST"
          className="space-y-5 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-zinc-200"
        >
          <input
            type="text"
            name="name"
            placeholder={formSection.form.namePlaceholder}
            className="w-full rounded-2xl border border-zinc-200 px-5 py-4 outline-none focus:border-[#ff7a30]"
          />

          <input
            type="email"
            name="email"
            placeholder={formSection.form.emailPlaceholder}
            className="w-full rounded-2xl border border-zinc-200 px-5 py-4 outline-none focus:border-[#ff7a30]"
          />

          <input
            type="text"
            name="subject"
            placeholder={formSection.form.subjectPlaceholder}
            className="w-full rounded-2xl border border-zinc-200 px-5 py-4 outline-none focus:border-[#ff7a30]"
          />

          <textarea
            name="message"
            placeholder={formSection.form.messagePlaceholder}
            rows="6"
            className="w-full rounded-2xl border border-zinc-200 px-5 py-4 outline-none focus:border-[#ff7a30]"
          ></textarea>

          <button
            type="submit"
            className="rounded-full bg-[#ff7a30] px-8 py-4 font-bold text-white transition-transform hover:scale-105"
          >
            {formSection.form.submitText}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactFormSection;