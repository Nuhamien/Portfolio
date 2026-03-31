import { Link } from "react-router-dom";
import { homeData } from "../../data/homeData";
import logo from "../../assets/images/logo.png"; // keep this if you have your logo image

function Footer() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Resume", path: "/resume" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const brandName = "Nuhamien";
  const { contact } = homeData;

  return (
    <>
      <section className="mx-4 rounded-t-[3rem] bg-[#121212] py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 md:flex-row md:px-8">
          <h2 className="font-headline text-center text-4xl font-extrabold text-white md:text-left md:text-5xl">
            Let’s build something <span className="text-[#ff7a30]">great</span>.
          </h2>

          <Link
            to="/contact"
            className="flex items-center gap-2 rounded-full bg-[#ff7a30] px-10 py-4 font-bold text-white transition-transform hover:scale-105"
          >
            Contact Me <span>↗</span>
          </Link>
        </div>
      </section>

      <footer className="mx-4 rounded-b-[3rem] border-t border-white/5 bg-[#121212] pb-10 pt-20">
        <div className="mx-auto mb-20 grid max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-4 md:px-8">
          <div className="space-y-8 md:col-span-2">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt={brandName}
                className="h-10 w-10 object-contain"
              />
              <span className="text-lg font-bold tracking-tight text-white">
                {brandName}
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-zinc-500">
              UI/UX designer and frontend developer focused on creating simple,
              clean, and usable digital experiences.
            </p>

            <div className="flex gap-4">
              <a
                href={contact.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-sm font-bold text-white transition-colors hover:bg-[#ff7a30]"
              >
                in
              </a>

              <a
                href={contact.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-sm font-bold text-white transition-colors hover:bg-[#ff7a30]"
              >
                gh
              </a>

              <a
                href={contact.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-sm font-bold text-white transition-colors hover:bg-[#ff7a30]"
              >
                tg
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-8 font-bold text-white">Navigation</h4>

            <ul className="space-y-4 text-sm font-medium text-zinc-500">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="transition-colors hover:text-[#ff7a30]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="mb-8 font-bold text-white">Contact</h4>

              <div className="space-y-2 text-sm text-zinc-500">
                <p>{contact.phone}</p>
                <p>{contact.email}</p>
                <p>{contact.location}</p>
              </div>
            </div>

            <div>
              <h4 className="mb-4 font-bold text-white">Quick Email</h4>

              <div className="flex items-center rounded-full bg-zinc-800 p-1.5">
                <input
                  type="text"
                  value={contact.email}
                  readOnly
                  className="flex-grow bg-transparent px-4 text-xs text-white outline-none"
                />
                <a
                  href={`mailto:${contact.email}`}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff7a30] text-white"
                  aria-label="Send email"
                >
                  →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/5 px-6 py-8 text-xs font-medium text-zinc-500 md:flex-row md:px-8">
          <p>© 2026 {brandName}. All Rights Reserved.</p>

          <div className="flex gap-8">
            <a href="#" className="transition-colors hover:text-white">
              User Terms & Conditions
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;