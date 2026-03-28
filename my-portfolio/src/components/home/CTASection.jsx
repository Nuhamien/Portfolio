function CTASection() {
  return (
    <section className="px-6 py-28 md:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-headline mb-12 text-4xl font-extrabold md:text-5xl">
          Have an Awesome Project
          <br />
          Idea? <span className="text-[#ff7a30]">Let's Discuss</span>
        </h2>

        <div className="relative mx-auto mb-8 flex max-w-2xl items-center rounded-full bg-zinc-100 p-2">
          <span className="px-6 text-orange-500">✉</span>
          <input
            type="email"
            placeholder="Enter Email Address"
            className="flex-grow border-none bg-transparent font-medium text-zinc-900 placeholder:text-zinc-400 focus:outline-none"
          />
          <button className="rounded-full bg-[#ff7a30] px-10 py-3.5 font-bold text-white shadow-lg">
            Send
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff7a30]"></span>
            4.9/5 Average Ratings
          </div>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff7a30]"></span>
            25+ Winning Awards
          </div>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff7a30]"></span>
            Certified Product Designer
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;