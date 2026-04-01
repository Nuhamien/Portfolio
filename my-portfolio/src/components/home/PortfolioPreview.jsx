import { useEffect, useRef, useState } from "react";
import { homeData } from "../../data/homeData";
import { projectsData } from "../../data/projectsData";
import PortfolioCard from "../cards/PortfolioCard";

function PortfolioPreview() {
  const scrollRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const { projectsPreview } = homeData;
  console.log(homeData);
  console.log(homeData.portfolioPreview);

  const projects = projectsPreview.projectIds
    .map((id) =>
      projectsData.projectsList.find((project) => project.id === id)
    )
    .filter(Boolean);

  const updateActiveCard = () => {
    const container = scrollRef.current;
    if (!container || cardRefs.current.length === 0) return;

    const containerLeft = container.getBoundingClientRect().left;

    let closestIndex = 0;
    let smallestDistance = Infinity;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const cardLeft = card.getBoundingClientRect().left;
      const distance = Math.abs(cardLeft - containerLeft);

      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  const scrollToCard = (index) => {
    const container = scrollRef.current;
    const card = cardRefs.current[index];

    if (!container || !card) return;

    container.scrollTo({
      left: card.offsetLeft,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    updateActiveCard();

    container.addEventListener("scroll", updateActiveCard);
    window.addEventListener("resize", updateActiveCard);

    return () => {
      container.removeEventListener("scroll", updateActiveCard);
      window.removeEventListener("resize", updateActiveCard);
    };
  }, []);

  return (
    <section id="projects" className="overflow-hidden px-6 py-28 md:px-8">
      <div className="mx-auto max-w-6xl">
       <div class="flex justify-between items-end mb-16">
       <h2 class="font-headline text-5xl font-extrabold leading-tight">
            {projectsPreview.title.main}
            <br />
            {projectsPreview.title.sub}{" "}
            
            <span className="text-[#ff7a30]">
              {projectsPreview.title.highlight}
            </span>
             <button class="bg-[#ff7a30] text-white px-8 py-3 rounded-full font-bold">See All</button>
          </h2>
        </div>

        <div
          ref={scrollRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-6"
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className="min-w-[85vw] snap-start md:min-w-[520px] lg:min-w-[580px]"
            >
              <PortfolioCard {...project} />
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-10 bg-[#ff7a30]"
                  : "w-2.5 bg-zinc-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioPreview;