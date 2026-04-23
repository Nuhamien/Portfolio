import { fetchAPI } from "../fetchAPI";

export function getHomePage() {
  return fetchAPI("/api/home-page?populate=*");
}