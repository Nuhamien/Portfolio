import { Link } from "react-router-dom";

function Hero({ data }) {
  const buttons = data?.buttons || [];
  const badge = data?.badge || "";
  const title = data?.title || {};
  const description = data?.description || "";
  const image = data?.image || {};

  const titleMain = title.main || "";
  const titleHighlight = title.highlight || "";
  const titleSub = title.sub || "";

  const hasHighlight =
    titleMain && titleHighlight && titleMain.includes(titleHighlight);

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-40 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-1.5 text-xs font-medium text-zinc-600">
          <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-bold">
            {badge}
          </span>
        </div>

        <h1 className="font-headline mb-8 text-5xl font-extrabold leading-[1.1] tracking-tight md:text-7xl lg:text-8xl">
          {hasHighlight ? (
            <>
              {titleMain.replace(titleHighlight, "")}
              <span className="text-[#ff7a30]">{titleHighlight}</span>
            </>
          ) : (
            <>
              {titleMain}
              {titleHighlight ? (
                <span className="text-[#ff7a30]"> {titleHighlight}</span>
              ) : null}
            </>
          )}
          <br />
          {titleSub}
        </h1>

        <p className="mb-10 max-w-2xl text-base leading-relaxed text-zinc-500 md:text-lg">
          {description}
        </p>

        <div className="relative mt-6 w-full max-w-xl">
          <div className="absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-100/60 md:h-[420px] md:w-[420px]"></div>

          {image?.src ? (
            <img
              src={image.src}
              alt={image.alt || "Hero image"}
              className="relative z-10 mx-auto h-auto w-full"
            />
          ) : null}

          {buttons.length > 0 ? (
            <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-4">
              {buttons.map((button) => {
                const commonClass =
                  "rounded-full px-6 py-3 font-bold transition-transform";

                const variantClass =
                  button.variant === "primary"
                    ? "bg-[#ff7a30] text-white hover:scale-105"
                    : "bg-zinc-200 text-zinc-800 hover:bg-zinc-300";

                if (button.action === "navigate") {
                  return (
                    <Link
                      key={button.text}
                      to={button.target}
                      className={`${commonClass} ${variantClass}`}
                    >
                      {button.text}
                    </Link>
                  );
                }

                if (button.action === "scroll") {
                  return (
                    <a
                      key={button.text}
                      href={`#${button.target}`}
                      className={`${commonClass} ${variantClass}`}
                    >
                      {button.text}
                    </a>
                  );
                }

                return (
                  <button
                    key={button.text}
                    className={`${commonClass} ${variantClass}`}
                  >
                    {button.text}
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default Hero;