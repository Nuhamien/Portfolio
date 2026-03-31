function ServicesHero() {
  return (
    <section className="px-6 pb-20 pt-40 md:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-zinc-200 px-4 py-1.5 text-sm font-medium text-zinc-600">
          My Services
        </div>

        <h1 className="font-headline mx-auto mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
          Design and development services focused on{" "}
          <span className="text-[#ff7a30]">clarity and usability</span>
        </h1>

        <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-500">
          I design and build simple, user-friendly interfaces that solve real
          problems and improve how users interact with digital products.
        </p>
      </div>
    </section>
  );
}

export default ServicesHero;