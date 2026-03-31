import Hero from '../components/home/Hero'
import ServicesPreview from '../components/home/ServicesPreview'
import ProcessTimeline from '../components/home/ProcessTimeline'
import WhyHireMe from '../components/home/WhyHireMe'
import PortfolioPreview from '../components/home/PortfolioPreview'
import Testimonials from '../components/home/Testimonials'

import MarqueeBanner from '../components/home/MarqueeBanner'
import BlogPreview from '../components/home/BlogPreview'

function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <ProcessTimeline />
      <WhyHireMe />
      <PortfolioPreview />
      <Testimonials />
      
      <MarqueeBanner />
      <BlogPreview />
    </>
  )
}

export default Home