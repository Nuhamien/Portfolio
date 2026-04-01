import ResumeHero from "../components/resume/ResumeHero";
import ResumeSummary from "../components/resume/ResumeSummary";
import ResumeSkills from "../components/resume/ResumeSkills";
import ResumeProjects from "../components/resume/ResumeProjects";
import ResumeProcess from "../components/resume/ResumeProcess";
import ResumeCTA from "../components/resume/ResumeCTA";

function Resume() {
  return (
    <main>
      <ResumeHero />
      <ResumeSummary />
      <ResumeSkills />
      <ResumeProjects />
      <ResumeProcess />
      <ResumeCTA />
    </main>
  );
}

export default Resume;