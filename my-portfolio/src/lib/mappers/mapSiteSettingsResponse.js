export function mapSiteSettingsResponse(response) {
  const data = response.data;

  const logoUrl =
    data.brandLogo?.url
      ? `${import.meta.env.VITE_STRAPI_URL}${data.brandLogo.url}`
      : "";

  return {
    brandName: data.brandName || "Nuhamien",
    brandLogo: logoUrl,
    navLinks: Array.isArray(data.navLinks) ? data.navLinks : [],
    footerQuickLinks: Array.isArray(data.footerQuickLinks)
      ? data.footerQuickLinks
      : [],
    socialLinks: Array.isArray(data.socialLinks) ? data.socialLinks : [],
    footerDescription: data.footerDescription || "",
    email: data.email || "",
    phone: data.phone || "",
    location: data.location || "",

     footerCtaSection: {
      title: data.footerCtaTitle || "",
      highlight: data.footerCtaHighlight || "",
      suffix: data.footerCtaSuffix || "",
      button: {
        label: data.footerCtaButtonLabel || "",
        path: data.footerCtaButtonPath || "/contact",
        icon: data.footerCtaButtonIcon || "→",
      },
    },

    footerBottomBar: {
      copyright:
        data.footerCopyright || `© 2026 ${data.brandName || "Nuhamien"}. All rights reserved.`,
      links: Array.isArray(data.footerBottomLinks)
        ? data.footerBottomLinks
        : [],
    },

  };
}