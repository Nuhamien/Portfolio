export async function fetchAPI(path) {
  const baseUrl = import.meta.env.VITE_STRAPI_URL;

  if (!baseUrl) {
    throw new Error("VITE_STRAPI_URL is not defined in your environment.");
  }

  const response = await fetch(`${baseUrl}${path}`);

  if (!response.ok) {
    throw new Error(`Strapi request failed: ${response.status}`);
  }

  return response.json();
}