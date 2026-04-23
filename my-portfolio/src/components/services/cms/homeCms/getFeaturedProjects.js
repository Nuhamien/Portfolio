import { fetchAPI } from "../fetchAPI";

export function getFeaturedProjects() {
  return fetchAPI("/api/projects?populate=*&filters[featured][$eq]=true");
}