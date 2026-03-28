import { Link } from "react-router-dom";

function Footer() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Service", path: "/services" },
    { name: "Resume", path: "/resume" },
    { name: "Project", path: "/projects" },
  ];

  const socialLinks = [
    { name: "Facebook", href: "#", icon: "f" },
    { name: "Instagram", href: "#", icon: "◎" },
    { name: "Dribbble", href: "#", icon: "◌" },
    { name: "LinkedIn", href: "#", icon: "in" },
  ];

  return (
    <>
      <section className="mx-4 rounded-t-[3rem] bg-[#121212] py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 md:flex-row md:px-8">
          <h2 className="font-headline text-center text-4xl font-extrabold text-white md:text-left md:text-5xl">
            My <span className="text-[#ff7a30]">Services</span>
            <span className="text-[#ff7a30]">.</span>
          </h2>

          <button className="flex items-center gap-2 rounded-full bg-[#ff7a30] px-10 py-4 font-bold text-white transition-transform hover:scale-105">
            Hire me <span>↗</span>
          </button>
        </div>
      </section>

      <footer className="mx-4 rounded-b-[3rem] border-t border-white/5 bg-[#121212] pb-10 pt-20">
        <div className="mx-auto mb-20 grid max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-4 md:px-8">
          <div className="space-y-8 md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff7a30]">
                <span className="text-xs font-bold text-white">J</span>
              </div>
              <span className="text-lg font-bold tracking-tighter text-white">
                JCREA
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-zinc-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed lobortis orci elementum egestas
              lobortis.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-label={item.name}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-sm font-bold text-white transition-colors hover:bg-[#ff7a30]"
                >
                  {item.icon}
                </a>
              ))}
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
                <p>+91 7738443636</p>
                <p>Jaycrea36@gmail.com</p>
                <p>Portfolio-jcrea.com</p>
              </div>
            </div>

            <div>
              <h4 className="mb-4 font-bold text-white">
                Get the latest information
              </h4>

              <div className="flex items-center rounded-full bg-zinc-800 p-1.5">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="flex-grow bg-transparent px-4 text-xs text-white placeholder:text-zinc-500 focus:outline-none"
                />
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff7a30] text-white">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/5 px-6 py-8 text-xs font-medium text-zinc-500 md:flex-row md:px-8">
          <p>Copyright© 2023 Jayesh. All Rights Reserved.</p>

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