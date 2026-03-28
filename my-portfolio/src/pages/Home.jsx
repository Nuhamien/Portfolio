import Hero from "../components/home/Hero";
import ServicesPreview from "../components/home/ServicesPreview";
import ExperienceTimeline from "../components/home/ExperienceTimeline";
import WhyHireMe from "../components/home/WhyHireMe";
import PortfolioPreview from "../components/home/PortfolioPreview";
import Testimonials from "../components/home/Testimonials";
import CTASection from "../components/home/CTASection";
import MarqueeBanner from "../components/home/MarqueeBanner";
import BlogPreview from "../components/home/BlogPreview";

function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <ExperienceTimeline />
      <WhyHireMe />
      <PortfolioPreview />
      <Testimonials />
      <CTASection />
      <MarqueeBanner />
      <BlogPreview />
    </>
  );
}

export default Home;