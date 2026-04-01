import Hero from "../components/home/Hero";
import MarqueeBanner from "../components/home/MarqueeBanner";
import ServicesPreview from "../components/home/ServicesPreview";
import WhyHireMe from "../components/home/WhyHireMe";
import PortfolioPreview from "../components/home/PortfolioPreview";
import ExperienceTimeline from "../components/home/ExperienceTimeline";
import Testimonials from "../components/home/Testimonials";
import BlogPreview from "../components/home/BlogPreview";
import HomeCTA from "../components/home/HomeCTA";

import { homeData } from "../data/homeData";

function Home() {
  return (
    <main>
      <Hero data={homeData.hero} />
    
      <ServicesPreview />
      <WhyHireMe />
      <PortfolioPreview />
      <ExperienceTimeline />
      <Testimonials />
      <HomeCTA />
      <BlogPreview />
      <MarqueeBanner />
    </main>
  );
}

export default Home;