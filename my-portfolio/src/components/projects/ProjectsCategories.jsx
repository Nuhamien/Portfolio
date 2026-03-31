import { homeData } from "../../data/homeData";

function ProjectsCategories() {
  const categories = [
    "All",
    ...new Set(homeData.projects.map((project) => project.category)),
  ];

  return (
    <section className="px-6 pb-10 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap gap-4">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
                index === 0
                  ? "bg-[#ff7a30] text-white"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsCategories;