import { homeData } from "../../data/homeData";

function MarqueeBanner() {
  const { marquee } = homeData;
  const repeatedItems = [...marquee.items, ...marquee.items];

  return (
    <div className="relative mb-32 overflow-hidden py-10">
      <div className="-rotate-2 bg-[#ff7a30] py-4 shadow-lg">
        <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap text-2xl font-black uppercase italic text-white md:text-3xl">
          {repeatedItems.map((item, index) => (
            <div key={index} className="flex items-center gap-10">
              <span>{item}</span>
              <span className="text-white/50">{marquee.separator}</span>
            </div>
          ))}

          {repeatedItems.map((item, index) => (
            <div key={`duplicate-${index}`} className="flex items-center gap-10">
              <span>{item}</span>
              <span className="text-white/50">{marquee.separator}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MarqueeBanner;