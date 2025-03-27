import { createBrowserRouter, RouteObject } from "react-router";
import HomePage from "../components/HomePage/HomePage";
import App from "../App";
import PersonalInfoForm from "../components/Form/personalInfo/PersonalInfoForm";
import { SiteContextType } from "../hooks/useCustomContext";
import Experience from "../components/Form/experience/Experience";
import Educations from "../components/Form/education/Education";
import SkillsSection from "../components/Form/skills/Skills";
import Test from "../components/Test/Test";
import Summary from "../components/Form/Summary/Summary";
import AdditionalSections from "../components/Form/additionalSections/AdditionalSections";

export const formRoutes: (RouteObject & { label: string })[] = [
  { Component: PersonalInfoForm, path: "/contact", label: "Contact" },
  { Component: Experience, path: "/experience", label: "Experience" },
  { Component: Educations, path: "/education", label: "Education" },
  { Component: SkillsSection, path: "/skills", label: "Skills" },
  { Component: Summary, path: "/summary", label: "Summary" },
  { Component: AdditionalSections, path: "/finalize", label: "Finalize" },
];

const router = (contextValues: SiteContextType) =>
  createBrowserRouter([
    {
      path: "/",
      Component: App,
      children: formRoutes,
    },
    {
      path: "/xxx",
      Component: HomePage,
    },
    {
      path: "/test",
      Component: Test,
    },
  ]);

export default router;
