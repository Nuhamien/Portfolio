import { useEffect, useMemo, useState } from "react";
import { getProjects } from "../components/services/cms/getProjects";
import { getProjectsPage } from "../components/services/cms/getProjectsPage";
import { mapProjectsResponse } from "../lib/mappers/mapProjectsResponse";
import { mapProjectsPageResponse } from "../lib/mappers/mapProjectsPageResponse";

import ProjectsHero from "../components/projects/ProjectsHero";
import ProjectsCategories from "../components/projects/ProjectsCategories";
import ProjectsShowcase from "../components/projects/ProjectsShowcase";
import ProjectsCTA from "../components/projects/ProjectsCTA";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [pageData, setPageData] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProjectsPage() {
      try {
        setLoading(true);
        setError("");

        const [projectsResponse, projectsPageResponse] = await Promise.all([
          getProjects(),
          getProjectsPage(),
        ]);

        const mappedProjects = mapProjectsResponse(projectsResponse);
        const mappedPageData = mapProjectsPageResponse(projectsPageResponse);

        setProjects(mappedProjects);
        setPageData(mappedPageData);
      } catch (err) {
        console.error(err);
        setError("Failed to load projects content.");
      } finally {
        setLoading(false);
      }
    }

    loadProjectsPage();
  }, []);

  const categories = pageData?.categories || ["All"];

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [projects, activeCategory]);

  if (loading) {
    return (
      <main className="px-6 py-24 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-zinc-500">Loading projects...</p>
        </div>
      </main>
    );
  }

  if (error || !pageData) {
    return (
      <main className="px-6 py-24 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-red-500">{error || "Projects page data is missing."}</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <ProjectsHero data={pageData.hero} projectCount={projects.length} />

      <ProjectsCategories
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <ProjectsShowcase projects={filteredProjects} />

      <ProjectsCTA data={pageData.ctaSection} />
    </main>
  );
}

export default Projects;