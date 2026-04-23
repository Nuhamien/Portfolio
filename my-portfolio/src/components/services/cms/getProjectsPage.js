// src/services/cms/getProjectsPage.js
import { fetchAPI } from "./fetchAPI";

export function getProjectsPage() {
  return fetchAPI("/api/projects-page");
}