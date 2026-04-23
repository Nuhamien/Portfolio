import { useEffect, useState } from "react";
import { getHomePage } from "../components/services/cms/homeCms/getHomePage";
import { getFeaturedProjects } from "../components/services/cms/homeCms/getFeaturedProjects";
import { mapHomePageResponse } from "../lib/mappers/mapHomePageResponse";
import { mapProjectsResponse } from "../lib/mappers/mapProjectsResponse";

import Hero from "../components/home/Hero";
import MarqueeBanner from "../components/home/MarqueeBanner";
import ServicesPreview from "../components/home/ServicesPreview";
import WhyHireMe from "../components/home/WhyHireMe";
import PortfolioPreview from "../components/home/PortfolioPreview";
import ExperienceTimeline from "../components/home/ExperienceTimeline";
import Testimonials from "../components/home/Testimonials";
import BlogPreview from "../components/home/BlogPreview";
import HomeCTA from "../components/home/HomeCTA";

function Home() {
  const [pageData, setPageData] = useState(null);
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadHomePage() {
      try {
        setLoading(true);
        setError("");

        const [homePageResponse, featuredProjectsResponse] = await Promise.all([
          getHomePage(),
          getFeaturedProjects(),
        ]);

        const mappedHomePage = mapHomePageResponse(homePageResponse);
        const mappedProjects = mapProjectsResponse(featuredProjectsResponse);

        setPageData(mappedHomePage);
        setFeaturedProjects(mappedProjects);
      } catch (err) {
        console.error(err);
        setError("Failed to load home page content.");
      } finally {
        setLoading(false);
      }
    }

    loadHomePage();
  }, []);

  if (loading) {
    return (
      <main className="px-6 py-24 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-zinc-500">Loading home page...</p>
        </div>
      </main>
    );
  }

  if (error || !pageData) {
    return (
      <main className="px-6 py-24 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-red-500">
            {error || "Home page data is missing."}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Hero data={pageData.hero} />

      <MarqueeBanner data={pageData.marquee} />

      <ServicesPreview
        data={pageData.servicesPreview}
        services={pageData.previewServices || []}
      />

      <WhyHireMe data={pageData.whyHireMe} />

      <PortfolioPreview
        data={pageData.featuredProjects}
        projects={featuredProjects}
      />

      <ExperienceTimeline
        data={pageData.experienceTimeline}
        steps={pageData.experienceSteps || []}
      />

      <Testimonials
        data={pageData.testimonials}
        items={pageData.testimonialItems || []}
      />

      <BlogPreview
        data={pageData.blogPreview}
        posts={pageData.blogPosts || []}
      />

      <HomeCTA data={pageData.homeCTA} />
    </main>
  );
}

export default Home;