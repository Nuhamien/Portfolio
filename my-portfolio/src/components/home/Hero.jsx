function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-40 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-1.5 text-xs font-medium text-zinc-600">
          <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-bold">
            Hello!
          </span>
        </div>

        <h1 className="font-headline mb-8 text-5xl font-extrabold leading-none tracking-tight md:text-7xl lg:text-8xl">
          I'm <span className="text-[#ff7a30]">Jenny,</span>
          <br />
          Product Designer
        </h1>

        <div className="relative mt-12 w-full max-w-xl">
          <div className="absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-100/60 md:h-[420px] md:w-[420px]"></div>

          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqGnk23USkJqrvjvdTIw41I31sETwZZCrZnuxwLJ5msfasH7kBseC_XzO-EKhL8T_eIYA5WkUiou5xxHKJRk0kCwExC0ObZ1mNR4HkSGaBFPov6rtMBrYV_wJ80hoPiFK735x9CqPzG4k1GSWaXmc5SetZZ3cGR18OQVQME57_mwOun2DtB-6kcheaKcaFecjx6pzUcm2TBwUkAJhjQLCKx4GW8sfgVQGOdhzbg9-KWa0bNbE93-aj_yGmT1eOoI4RXFWG86Hgj86L"
            alt="Jenny Portrait"
            className="relative z-10 mx-auto h-auto w-full"
          />

          <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-4">
            <button className="rounded-full bg-[#ff7a30] px-6 py-3 font-bold text-white transition-transform hover:scale-105">
              Portfolio
            </button>
            <button className="rounded-full bg-zinc-200 px-6 py-3 font-bold text-zinc-800 transition-colors hover:bg-zinc-300">
              Hire me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;