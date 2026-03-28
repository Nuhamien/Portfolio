import ServiceCard from '../cards/ServiceCard'
import { services } from '../../data/services'

function ServicesPreview() {
  return (
    <section className="mx-4 overflow-hidden rounded-[3rem] bg-zinc-100 py-24">
      <div className="mx-auto max-w-6xl px-8">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-headline flex items-center gap-2 text-5xl font-extrabold text-[#1a1a1a]">
              My <span className="text-[#ff7a30]">Services</span>
              <span className="text-[#ff7a30]">.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-zinc-500">
            I create polished digital experiences with a strong focus on clarity,
            usability, and conversion.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview