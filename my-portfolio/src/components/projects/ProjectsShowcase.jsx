import PortfolioCard from "../cards/PortfolioCard";
import { homeData } from "../../data/homeData";

function ProjectsShowcase() {
  const projects = homeData.projects;

  return (
    <section className="px-6 pb-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <PortfolioCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsShowcase;