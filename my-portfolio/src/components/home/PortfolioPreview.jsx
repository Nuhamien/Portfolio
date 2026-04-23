function ServicesPreview({ data }) {
  return (
    <section className="px-6 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#ff7a30]">
            {data.badge}
          </p>

          <h2 className="font-headline mb-4 text-4xl font-extrabold leading-tight md:text-5xl">
            {data.title.main}{" "}
            <span className="text-[#ff7a30]">{data.title.highlight}</span>{" "}
            {data.title.suffix}
          </h2>

          <p className="text-zinc-500">{data.description}</p>
        </div>

        {/* keep your existing service cards here */}
      </div>
    </section>
  );
}

export default ServicesPreview;