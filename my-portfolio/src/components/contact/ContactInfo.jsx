import { contactData } from "../../data/contactData";

function ContactInfo() {
  const { contactInfo } = contactData;

  return (
    <section className="px-6 pb-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-3">
          {contactInfo.items.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] bg-zinc-100 p-8 text-center"
            >
              <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
              <p className="text-zinc-600">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;