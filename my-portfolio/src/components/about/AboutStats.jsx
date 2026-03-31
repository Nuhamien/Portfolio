import { homeData } from "../../data/homeData";

function AboutStats() {
  const { stats } = homeData.about;

  const statItems = [
    { label: "Experience", value: stats.experience || "—" },
    { label: "Projects", value: stats.projects || "—" },
    { label: "Achievements", value: stats.achievements || "—" },
    { label: "Certifications", value: stats.certifications || "—" },
  ];

  return (
    <section className="px-6 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {statItems.map((item) => (
            <div
              key={item.label}
              className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-zinc-200"
            >
              <h3 className="mb-2 text-4xl font-black text-[#ff7a30]">
                {item.value}
              </h3>
              <p className="text-sm font-medium text-zinc-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutStats;