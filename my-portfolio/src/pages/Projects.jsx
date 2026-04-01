import { useMemo, useState } from "react";
import { projectsData } from "../data/projectsData";

import ProjectsHero from "../components/projects/ProjectsHero";
import ProjectsCategories from "../components/projects/ProjectsCategories";
import ProjectsShowcase from "../components/projects/ProjectsShowcase";
import ProjectsCTA from "../components/projects/ProjectsCTA";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = projectsData.categories;

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projectsData.projectsList;
    }

    return projectsData.projectsList.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <main>
      <ProjectsHero />

      <ProjectsCategories
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <ProjectsShowcase projects={filteredProjects} />

      <ProjectsCTA />
    </main>
  );
}

export default Projects;