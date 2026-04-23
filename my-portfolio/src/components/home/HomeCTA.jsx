function HomeCTA({ data }) {
  const section = data;

  if (!section) return null;

  return (
    <section className="px-8 py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-headline mb-12 text-5xl font-extrabold">
          {section.title?.line1}
          <br />
          {section.title?.line2Start}
          <span className="text-primary">
            {section.title?.line2Highlight}
          </span>
        </h2>

        <div className="relative mx-auto mb-8 flex max-w-2xl items-center rounded-full bg-zinc-100 p-2">
          <span className="px-6 text-orange-500">✉️</span>

          <input
            type="email"
            placeholder={section.input?.placeholder || ""}
            className="flex-grow border-none bg-transparent font-medium text-zinc-900 placeholder:text-zinc-400 focus:ring-0"
          />

          <button className="rounded-full bg-[#ff7a30] px-10 py-3.5 font-bold text-white shadow-lg shadow-primary/20 transition-transform hover:scale-105">
            {section.input?.buttonText}
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
          {(section.highlights || []).map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff7a30]"></span>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeCTA;