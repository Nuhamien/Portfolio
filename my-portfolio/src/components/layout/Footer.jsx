import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSiteSettings } from "../services/cms/siteCms/getSiteSettings";
import { mapSiteSettingsResponse } from "../../lib/mappers/mapSiteSettingsResponse";
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
function Footer() {
  const [siteSettings, setSiteSettings] = useState(null);

  useEffect(() => {
    async function loadSiteSettings() {
      try {
        const response = await getSiteSettings();
        const mappedData = mapSiteSettingsResponse(response);
        setSiteSettings(mappedData);
      } catch (error) {
        console.error("Failed to load footer settings:", error);
      }
    }

    loadSiteSettings();
  }, []);

  const brandName = siteSettings?.brandName || "Nuhamien";
  const brandLogo = siteSettings?.brandLogo || "";
  const footerDescription = siteSettings?.footerDescription || "";
  const email = siteSettings?.email || "";
  const phone = siteSettings?.phone || "";
  const location = siteSettings?.location || "";
  const navLinks = Array.isArray(siteSettings?.footerQuickLinks)
    ? siteSettings.footerQuickLinks.map((link) => ({
        name: link.name || link.label || "",
        path: link.path || "/",
      }))
    : [];
  const socialLinks = Array.isArray(siteSettings?.socialLinks)
    ? siteSettings.socialLinks.map((social) => ({
        name: social.label || "",
        url: social.url || social.path || "#",
        shortLabel: social.shortLabel || social.name?.charAt(0) || "?",
      }))
    : [];

    const contact = {
    phone: siteSettings?.phone || "",
    email: siteSettings?.email || "",
    location: siteSettings?.location || "",
  };

   const ctaSection = siteSettings?.footerCtaSection ||{
    title: "",
    highlight: "",
    suffix: "",
    button: {
      label: "",
      path: "/contact",
      icon: "→",
    },
  };

  const bottomBar = siteSettings?.footerBottomBar ||  {
    copyright: "",
    links: [],
  };

  const brand = {
    name: brandName,
    path: "/",
    description: footerDescription,
  };


   return (
    <>
      <section className="mx-4 rounded-t-[3rem] bg-[#121212] py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 md:flex-row md:px-8">
          <h2 className="font-headline text-center text-4xl font-extrabold text-white md:text-left md:text-5xl">
            {ctaSection.title}
            <span className="text-[#ff7a30]">{ctaSection.highlight}</span>
            {ctaSection.suffix}
          </h2>

          <Link
            to={ctaSection.button.path}
            className="flex items-center gap-2 rounded-full bg-[#ff7a30] px-10 py-4 font-bold text-white transition-transform hover:scale-105"
          >
            {ctaSection.button.label} <span>{ctaSection.button.icon}</span>
          </Link>
        </div>
      </section>

      <footer className="mx-4 rounded-b-[3rem] border-t border-white/5 bg-[#121212] pb-10 pt-20">
        <div className="mx-auto mb-20 grid max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-4 md:px-8">
          <div className="space-y-8 md:col-span-2">
            <Link to={brand.path} className="flex items-center gap-3">
              {brandLogo ? (
                <img
                  src={brandLogo}
                  alt={brand.name}
                  className="h-10 w-10 object-contain"
                />
              ) : null}

              <span className="text-lg font-bold tracking-tight text-white">
                {brand.name}
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-zinc-500">
              {brand.description}
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name || index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-sm font-bold text-white transition-colors hover:bg-[#ff7a30]"
                >
                {social.name === "LinkedIn" && <FaLinkedin size={16} />}
                {social.name === "GitHub" && <FaGithub size={16} />}
                {social.name === "Telegram" && <FaTelegramPlane size={16} />}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-8 font-bold text-white">Navigation</h4>

            <ul className="space-y-4 text-sm font-medium text-zinc-500">
              {navLinks.map((link, index) => (
                <li key={link.name || index}>
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
          <p>{bottomBar.copyright}</p>

          <div className="flex gap-8">
            {bottomBar.links.map((link, index) => (
              <a
                key={link.name || index}
                href={link.path}
                className="transition-colors hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;