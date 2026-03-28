function WhyHireMe() {
  return (
    <section className="mx-4 my-12 rounded-[3rem] bg-zinc-100 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:px-8">
        <div className="relative">
          <div className="aspect-square w-full overflow-hidden rounded-[2rem] bg-white">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVykUyrbe3srrYWq7eKCmaP0YUh_FIACBBpZpCuJREni1EJKaLCDzfxHl_yCxySotblIA9H9Kl1cZrXodU6KNIXD8-9jwSv3njhxgjTq_HwqYg6vQHg2GRjX_yhJH9lEA4KQaeBeCLFZq1CsGjHm6C70yGzhsBdi7rRCGOZ3kiD3Tw7e6DZyT792Nuy0pR-bF36RxMNgMJP23b9tTXWBQSbOZYWMJJEwqWuDx4x0RmLih-ezbVvp51wwlGfYGu8vlzkxDBwZVJKfvL"
              alt="Jenny"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-10">
          <h2 className="font-headline text-4xl font-extrabold leading-tight md:text-5xl">
            Why <span className="text-[#ff7a30]">Hire me</span>?
          </h2>

          <p className="leading-relaxed text-zinc-500">
            I design modern digital experiences that balance usability,
            aesthetics, and business value. My work focuses on helping products
            feel intuitive, polished, and memorable.
          </p>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <div className="mb-1 text-4xl font-black">450+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Project Completed
              </div>
            </div>

            <div>
              <div className="mb-1 text-4xl font-black">10+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Years Experience
              </div>
            </div>
          </div>

          <button className="rounded-full bg-zinc-200 px-10 py-4 font-bold text-zinc-800 transition-colors hover:bg-zinc-300">
            Hire me
          </button>
        </div>
      </div>
    </section>
  );
}

export default WhyHireMe;