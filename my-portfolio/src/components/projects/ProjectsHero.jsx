function ProjectsHero({ data, projectCount }) {
  return (
    <section className="px-6 pb-20 pt-40 md:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-zinc-200 px-4 py-1.5 text-sm font-medium text-zinc-600">
          {data.badge}
        </div>

        <h1 className="font-headline mx-auto mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
          {data.title.main}{" "}
          <span className="text-[#ff7a30]">{data.title.highlight}</span>{" "}
          {data.title.suffix}
        </h1>

        <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-500">
          {data.description}
        </p>

        <p className="mt-4 text-sm text-zinc-400">
          {projectCount} projects featured
        </p>
      </div>
    </section>
  );
}

export default ProjectsHero;