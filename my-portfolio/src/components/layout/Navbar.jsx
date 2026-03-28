import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Service", path: "/services" },
    { name: "Resume", path: "/resume" },
    { name: "Project", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 z-50 w-[90%] max-w-5xl -translate-x-1/2 rounded-full border border-white/10 bg-black/90 px-6 py-3 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="rounded-full bg-[#ff7a30] px-6 py-2 text-sm font-bold text-white"
          >
            Home
          </Link>

          <div className="hidden gap-8 md:flex">
            {navLinks.slice(0, 2).map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-white/70 transition-colors hover:text-[#ff7a30]"
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>

        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff7a30]">
            <span className="text-xs font-bold text-white">J</span>
          </div>
          <span className="text-lg font-bold tracking-tighter text-white">
            JCREA
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.slice(2).map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="text-sm font-medium text-white/70 transition-colors hover:text-[#ff7a30]"
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="mt-4 flex flex-col gap-4 rounded-3xl bg-zinc-900 p-5 md:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-white/80 transition-colors hover:text-[#ff7a30]"
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;