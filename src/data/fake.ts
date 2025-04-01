/**
 * in each data there is some optional fields that mention here , if it * it mean all of this section is optional
 * */
const optioanlFields = {
  educations: ["description"],
  personalInfo: ["city", "country", "linkedin", "website"],
  additionalSection: {
    custom: "*",
    certifications: "*",
  },
};

// pay attention description is optional but is html and not text so use dangerouslyHtml
const educations = [
  {
    id: "-demo",
    schoolName: "Bar Ilandsa",
    schoolLocation: "Ramat Gan",
    degree: "B.Sc",
    fieldOfStudy: "Computer Science",
    startDate: "2020-03",
    endDate: "2023-04",
    description: "Master of Indigo <b>league</b> , using Dragonite and Tyrnitar as beasts.",
  },
  {
    id: "1743023098560",
    schoolName: "Bar Ilan",
    schoolLocation: "",
    fieldOfStudy: "Computer Science",
    startDate: "",
    endDate: "",
    degree: "",
    description: "",
  },
];

// workSummary is html and not text , all fields are mandatory
const experiences = [
  {
    id: "-demo",
    jobTitle: "Pokemon Master2",
    employer: "Indigo",
    location: "Viridian City",
    startDate: "2023-03",
    endDate: "2025-05",
    workSummary: "<p>Master of <strong>Indigo</strong> league , using Dragonite and Tyrnitar as beasts.</p>",
  },
];

// optional fields : city,country ,linkedin, website
const personalInfo = {
  firstName: "Benny",
  lastName: "Hassan",
  jobTitle: "Full Stack Developer",
  phone: "0524874600",
  email: "bennyh960@gmail.com",
  city: "",
  country: "",
  linkedin: { text: "", url: "" },
  website: { text: "", url: "" },
};

// render level of skill only if showlevel is true (its controlled)
const skills = {
  data: [
    { level: 3, name: "Full-Stack Development" },
    { level: 3, name: "Software Development in Node.js" },
    { level: 3, name: "Working with PostgreSQL Databases" },
    { level: 3, name: "Front-End Technologies (React, JavaScript)" },
  ],
  showLevel: true,
};

// its html
const summary =
  "Tool owner of production machines, <b>responsible for tool performance</b>, data, writing work plans, troubleshooting, validation, quality performance and project management.";

const additionalSection = {
  languages: [
    { name: "Hebrew", level: 3 },
    { name: "English", level: 2 },
  ],
  custom: [{ something: "the value of it" }], // optional
  certifications: "some ceritifaction", // optional but is html and not string
};

export const patenPrompt = `You are ux ui designer with high experience with resume and job hunter.I build resume-builder app.
 i get from users form of their resume data and I generate for them a pattern of thier final resume. 
 For that , I give you fake data of a resume, and you will create a pattern for me with react, typescript with tailwind css.
 
 pay attention to the following rules :

 ** The component is start as follow:
 import useCustomContext from "../../../hooks/useCustomContext";
import { LangLevelMap, skillLevelMap } from "../../Shared/SliderControlMap";
 const PatternX: React.FC = () => {
  const { personalInfo, skills, additionalSections, educations, experiences, summary, language } = useCustomContext();
  const getSkillLevelText = (level: number) => skillLevelMap[level][language];
  const getLanguageLevelText = (level: number) => LangLevelMap[level][language];

  return ()

  export default PatternX

  ** the wrapper of this component is already has padding class and sizing which is look like
   <div  className="m-auto p-6 resume-container"> 
    <PatternX/>
    </div>

    and css:
    .resume-container {
  @apply w-[210mm] min-w-[210mm] h-fit min-h-[297mm];
}
** Form Info:
1. Personal info (contact): ${JSON.stringify(personalInfo)}
  ## optional fields : city,country ,linkedin, website
2. Experiences: ${JSON.stringify(experiences)}
  ## workSummary is html and not text , all fields are mandatory
3. Education: ${JSON.stringify(educations)}
  ## pay attention that description is optional and type is html and not text so use dangerouslyHtml
4. Skills: ${JSON.stringify(skills)}
  ## render level of skill only if showlevel is true (its controlled)
4. summary: ${JSON.stringify(summary)}
  ## its html 
5.additionalSection :${JSON.stringify(additionalSection)}
  ## languages at least 1 element is mandatory
  ## custom : optional but keep in mind it has key and value dynamics
  ## certifications : optional but is using html  
 `;
