import { contactData } from "../../data/contactData";

function ContactMap() {
  const { mapSection } = contactData;

  return (
    <section className="px-6 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#ff7a30]">
            {mapSection.badge}
          </p>

          <h2 className="font-headline text-4xl font-extrabold md:text-5xl">
            {mapSection.title}
          </h2>
        </div>

        <div className="overflow-hidden rounded-[2rem] shadow-sm ring-1 ring-zinc-200">
          <iframe
            src={mapSection.embedUrl}
            width="100%"
            height="450"
            loading="lazy"
            title="Map"
            className="border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default ContactMap;