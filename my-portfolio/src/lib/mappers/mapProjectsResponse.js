// src/lib/mappers/mapProjects.js
export function mapProjectsResponse(response) {
  const baseUrl = import.meta.env.VITE_STRAPI_URL;

  return response.data.map((item) => {
    const attrs = item;
    const imageUrl = attrs.image?.url
      ? `${baseUrl}${attrs.image.url}`
      : "";

    return {
      id: attrs.id,
      title: attrs.title,
      category: attrs.category,
      description: attrs.description,
      image: imageUrl,
      liveLink: attrs.liveLink || "",
      githubLink: attrs.githubLink || "",
      featured: attrs.featured || false,
    };
  });
}