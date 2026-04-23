export function mapProjectsPageResponse(response) {
  const data = response.data;

  return {
    hero: {
      badge: data.badge || "",
      title: {
        main: data.titleMain || "",
        highlight: data.titleHighlight || "",
        suffix: data.titleSuffix || "",
      },
      description: data.description || "",
    },
    categories: data.categories || [],
    ctaSection: {
      title: {
        main: data.ctaTitleMain || "",
        highlight: data.ctaTitleHighlight || "",
        suffix: data.ctaTitleSuffix || "",
      },
      description: data.ctaDescription || "",
      button: {
        text: data.ctaButtonText || "",
        path: data.ctaButtonPath || "/contact",
      },
    },
  };
}