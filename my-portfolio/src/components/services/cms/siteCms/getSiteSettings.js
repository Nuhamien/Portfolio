import { fetchAPI } from "../fetchAPI";

export function getSiteSettings() {
  return fetchAPI("/api/site-setting?populate=*");
}