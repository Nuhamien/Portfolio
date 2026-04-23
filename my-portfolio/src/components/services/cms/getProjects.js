// src/services/cms/getProjects.js
import { fetchAPI } from "./fetchAPI";

export function getProjects() {
  return fetchAPI("/api/projects?populate=*");
}