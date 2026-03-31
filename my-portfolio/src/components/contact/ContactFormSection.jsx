import { homeData } from "../../data/homeData";

function ContactFormSection() {
  const { contact } = homeData;

  return (
    <section className="mx-4 rounded-[3rem] bg-zinc-100 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:px-8">
        
        {/* LEFT */}
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#ff7a30]">
            Get in Touch
          </p>

          <h2 className="font-headline mb-6 text-4xl font-extrabold leading-tight md:text-5xl">
            Tell me about your project
          </h2>

          <p className="max-w-xl leading-relaxed text-zinc-600">
            You can send a message directly through this form or reach me using
            my email. I’m open to opportunities, collaborations, and real
            projects.
          </p>

          {/* DIRECT EMAIL */}
          <a
            href={`mailto:${contact.email}`}
            className="mt-6 inline-block text-[#ff7a30] font-semibold"
          >
            {contact.email}
          </a>
        </div>

        {/* FORM */}
        <form
          action={`mailto:${contact.email}`}
          method="POST"
          className="space-y-5 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-zinc-200"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full rounded-2xl border border-zinc-200 px-5 py-4 outline-none focus:border-[#ff7a30]"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full rounded-2xl border border-zinc-200 px-5 py-4 outline-none focus:border-[#ff7a30]"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full rounded-2xl border border-zinc-200 px-5 py-4 outline-none focus:border-[#ff7a30]"
          />

          <textarea
            name="message"
            placeholder="Write your message..."
            rows="6"
            className="w-full rounded-2xl border border-zinc-200 px-5 py-4 outline-none focus:border-[#ff7a30]"
          ></textarea>

          <button
            type="submit"
            className="rounded-full bg-[#ff7a30] px-8 py-4 font-bold text-white transition-transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactFormSection;