import { resumeData } from "../../data/resumeData";

function ResumeSummary() {
  const { summarySection } = resumeData;

  return (
    <section className="px-6 pb-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] bg-zinc-100 p-8">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#ff7a30]">
              {summarySection.profile.badge}
            </p>
            <p className="leading-relaxed text-zinc-600">
              {summarySection.profile.text}
            </p>
          </div>

          <div className="rounded-[2rem] bg-zinc-100 p-8">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#ff7a30]">
              {summarySection.focus.badge}
            </p>
            <div className="space-y-4 text-zinc-600">
              {summarySection.focus.items.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeSummary;