import ServicesHero from "../components/services/ServicesHero";
import ServicesGrid from "../components/services/ServicesGrid";
import ServicesProcess from "../components/services/ServicesProcess";
import ServicesCTA from "../components/services/ServicesCTA";

function Services() {
  return (
    <main>
      <ServicesHero />
      <ServicesGrid />
      <ServicesProcess />
      <ServicesCTA />
    </main>
  );
}

export default Services;