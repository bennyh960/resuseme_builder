// label.ts

import { EducationType } from "../components/Form/education/educationSingle/EducationSingle";
import { ExperienceType } from "../components/Form/experience/ExperienceSingle/ExperienceSingle";
import { PersonalInfoType } from "../components/Form/personalInfo/PersonalInfoForm";

export type LabelsType = {
  personalInfo: Record<keyof PersonalInfoType | "personalInfo", Record<"he" | "en", string>>;
  experience: Record<keyof ExperienceType | "experienceTitle" | "current", Record<"he" | "en", string>>;
  education: Record<keyof EducationType | "educationTitle" | "current", Record<"he" | "en", string>>;
  skills: Record<string, Record<"he" | "en", string>>;
};

export const labels: LabelsType = {
  personalInfo: {
    personalInfo: { he: "מידע אישי", en: "Personal Info" },
    firstName: { he: "שם פרטי", en: "First Name" },
    lastName: { he: "שם משפחה", en: "Last Name" },
    email: { he: "דואר אלקטרוני", en: "Email" },
    phone: { he: "טלפון", en: "Phone" },
    city: { he: "עיר", en: "City" },
    jobTitle: { he: "תפקיד", en: "Job Title" },
    country: { he: "ארץ", en: "Country" },
    linkedin: { he: "לינקדין", en: "Linkedin" },
    website: { he: "אתר אישי", en: "Website" },
  },
  experience: {
    experienceTitle: { he: "ניסיון תעסוקתי", en: "Experience" },
    current: { he: "משרה נוכחית", en: "current" },
    jobTitle: { he: "תפקיד", en: "Job Title*" },
    employer: { he: "מעסיק", en: "Employer" },
    location: { he: "מיקום", en: "Location" },
    startDate: { he: "תאריך התחלה", en: "Start date" },
    endDate: { he: "תאריך סיום", en: "End date" },
    workSummary: { he: "תקציר", en: "Work Summary" },
    id: { he: "", en: "" },
  },
  // professionalSummary: {
  //   professionalSummary: { he: "סיכום מקצועי", en: "Professional Summary" },
  //   description: { he: "תיאור", en: "Description" },
  // },
  skills: {
    skillsTitle: { he: "כישורים", en: "Skills" },
    skill: { he: "", en: "Skill" },
    level: { he: "", en: "Level" },
    demoOnEmpty: { he: "תכונה", en: "skill x" },
  },
  education: {
    educationTitle: { he: "השכלה", en: "Education" },
    degree: { he: "תואר", en: "Degree" },
    schoolName: { he: "מוסד", en: "Institution" },
    schoolLocation: { he: "מיקום מוסד", en: "Institution location" },
    current: { he: "אני סטודנט", en: "I'm student" },
    description: { he: "תאור בקצרה", en: "Description" },
    startDate: { he: "תאריך התחלה", en: "Start Date" },
    endDate: { he: "תאריך סיום", en: "End Date" },
    id: { he: "", en: "" },
    fieldOfStudy: { he: "תחום לימודים", en: "Field of Study" },
  },
};
