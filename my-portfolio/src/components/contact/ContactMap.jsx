function ContactMap() {
  return (
    <section className="px-6 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#ff7a30]">
            Location
          </p>

          <h2 className="font-headline text-4xl font-extrabold md:text-5xl">
            Addis Ababa, Ethiopia
          </h2>
        </div>

        <div className="overflow-hidden rounded-[2rem] shadow-sm ring-1 ring-zinc-200">
          <iframe
            src="https://www.google.com/maps?q=Addis%20Ababa%2C%20Ethiopia&z=13&output=embed"
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