import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { getSiteSettings } from "../services/cms/siteCms/getSiteSettings";
import { mapSiteSettingsResponse } from "../../lib/mappers/mapSiteSettingsResponse";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [siteSettings, setSiteSettings] = useState(null);

  useEffect(() => {
    async function loadSiteSettings() {
      try {
        const response = await getSiteSettings();
        const mappedData = mapSiteSettingsResponse(response);
        setSiteSettings(mappedData);
      } catch (error) {
        console.error("Failed to load site settings:", error);
      }
    }
    loadSiteSettings();
  }, []);

  const brandName = siteSettings?.brandName || "Nuhamien";
  const brandLogo = siteSettings?.brandLogo || "";
 

  const navLinks = Array.isArray(siteSettings?.navLinks)
    ? siteSettings.navLinks.map((link) => ({
        name: link.name || link.label || "",
        path: link.path || "/",
      }))
    : [];

  const leftLinks = navLinks.slice(0, 3);
  const rightLinks = navLinks.slice(3);



  return (
    <nav className="fixed top-6 left-1/2 z-50 w-[90%] max-w-5xl -translate-x-1/2 rounded-full border border-white/10 bg-black/90 px-6 py-4 backdrop-blur">
      <div className="flex items-center justify-between">
       <div className="flex items-center gap-8">
          <div className="hidden items-center gap-8 md:flex">
            {leftLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "rounded-full bg-[#ff7a30] px-6 py-2 text-sm font-bold text-white"
                      : "text-white/70 hover:text-[#ff7a30]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>

        <Link to="/" className="flex items-center gap-3">
          {brandLogo ? (
            <img
              src={brandLogo}
              alt={brandName}
              className="h-10 w-10 rounded-full object-contain gap-3"
            />
          ) : null}

          <span className="text-lg font-bold text-white">{brandName}</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {rightLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "rounded-full bg-[#ff7a30] px-6 py-2 text-sm font-bold text-white"
                  : "text-sm font-medium text-white/80 transition hover:text-white"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
         className={`text-2xl md:hidden p-2 rounded-full ${
    menuOpen ? "text-black bg-white" : "text-white"
  }`}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="mt-4 flex flex-col gap-4 rounded-2xl bg-black p-4 md:hidden"> 
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium text-white/80 transition-colors ${
                    isActive 
                    ? "text-[#ff7a30]" : "text-white/80 hover:text-[#ff7a30]"    
                  
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