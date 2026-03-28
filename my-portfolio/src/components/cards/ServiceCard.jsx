import { ArrowUpRight } from 'lucide-react'

function ServiceCard({ title, description, image }) {
  return (
    <div className="group relative h-[500px] overflow-hidden rounded-[2.5rem] bg-[#121212] p-10 pt-12 transition-all duration-500 hover:-translate-y-2">
      <div className="relative z-20">
        <h3 className="mb-4 text-2xl font-bold text-[#ff7a30]">{title}</h3>
        <p className="max-w-[220px] text-sm leading-relaxed text-zinc-400">
          {description}
        </p>
      </div>

      <div className="absolute bottom-12 left-1/2 z-10 aspect-[4/3] w-[85%] -translate-x-1/2">
        <img
          src={image}
          alt={title}
          className="h-full w-full rounded-2xl object-cover shadow-2xl"
        />
      </div>

      <button className="absolute bottom-8 right-8 z-30 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-white shadow-lg transition-colors group-hover:bg-[#ff7a30]">
        <ArrowUpRight size={22} />
      </button>
    </div>
  )
}

export default ServiceCard