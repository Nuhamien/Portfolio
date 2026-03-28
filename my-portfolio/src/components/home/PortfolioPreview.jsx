import { portfolioData } from "../../data/portfolio";
import PortfolioCard from "../cards/PortfolioCard";

function PortfolioPreview() {
  return (
    <section className="overflow-hidden px-6 py-28 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-headline text-4xl font-extrabold leading-tight md:text-5xl">
            Lets have a look at
            <br />
            my <span className="text-[#ff7a30]">Portfolio</span>
          </h2>

          <button className="w-fit rounded-full bg-[#ff7a30] px-8 py-3 font-bold text-white">
            See All
          </button>
        </div>

        <div className="no-scrollbar flex snap-x gap-8 overflow-x-auto pb-12">
          {portfolioData.map((item) => (
            <PortfolioCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioPreview;