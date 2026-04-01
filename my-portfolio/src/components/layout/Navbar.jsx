import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navbarData } from "../../data/site/navbarData";
import logo from "../../assets/images/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { homeLink, brand, navLinks } = navbarData;

  return (
    <nav className="fixed top-6 left-1/2 z-50 w-[90%] max-w-5xl -translate-x-1/2 rounded-full border border-white/10 bg-black/90 px-6 py-3 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link
            to={homeLink.path}
            className="rounded-full bg-[#ff7a30] px-6 py-2 text-sm font-bold text-white"
          >
            {homeLink.label}
          </Link>

          <div className="hidden gap-8 md:flex">
            {navLinks.slice(0, 2).map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#ff7a30]"
                      : "text-white/70 hover:text-[#ff7a30]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>

        <Link to={brand.path} className="flex items-center gap-3">
          <img
            src={logo}
            alt={brand.name}
            className="h-10 w-10 object-contain"
          />
          <span className="text-lg font-bold tracking-tight text-white">
            {brand.name}
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.slice(2).map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#ff7a30]"
                    : "text-white/70 hover:text-[#ff7a30]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
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
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#ff7a30]"
                    : "text-white/80 hover:text-[#ff7a30]"
                }`
              }
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