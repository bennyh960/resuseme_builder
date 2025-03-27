import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import { personalInfoInit, PersonalInfoType } from "../components/Form/personalInfo/PersonalInfoForm";
import { ExperienceType, FakeInitExperience } from "../components/Form/experience/ExperienceSingle/ExperienceSingle";
import { EducationType, FakeInitEducation } from "../components/Form/education/educationSingle/EducationSingle";
import { SkillsObject } from "../components/Form/skills/Skills";
import {
  AdditionalSectionsType,
  initAdditionalSections,
} from "../components/Form/additionalSections/AdditionalSections";

export type Language = "en" | "he";

export interface SiteContextType {
  children?: JSX.Element;
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
  personalInfo: PersonalInfoType;
  setPersonalInfo: Dispatch<SetStateAction<PersonalInfoType>>;
  experiences: ExperienceType[];
  setExperiences: Dispatch<SetStateAction<ExperienceType[]>>;
  educations: EducationType[];
  setEducations: Dispatch<SetStateAction<EducationType[]>>;
  skills: SkillsObject;
  setSkills: Dispatch<SetStateAction<SkillsObject>>;
  summary: string;
  setSummary: Dispatch<SetStateAction<string>>;
  additionalSections: AdditionalSectionsType;
  setAdditionalSections: Dispatch<SetStateAction<AdditionalSectionsType>>;
}

export const SiteContext = createContext<SiteContextType>({} as SiteContextType);

export const SiteProvider = ({ children }: { children: ReactNode }) => {
  const [personalInfo, setPersonalInfo] = useLocalStorage("personalInfo", personalInfoInit);
  const [experiences, setExperiences] = useLocalStorage<ExperienceType[]>("experiences", [FakeInitExperience]);
  const [educations, setEducations] = useLocalStorage<EducationType[]>("educations", [FakeInitEducation]);
  const [skills, setSkills] = useLocalStorage<SkillsObject>("skills", { showLevel: true, data: [] });
  const [summary, setSummary] = useLocalStorage<string>("summary", "");
  const [additionalSections, setAdditionalSections] = useLocalStorage<AdditionalSectionsType>(
    "additionalSections",
    initAdditionalSections
  );

  const [language, setLanguage] = useState<Language>("en");
  return (
    <SiteContext.Provider
      value={{
        language,
        summary,
        setSummary,
        setLanguage,
        setPersonalInfo,
        experiences,
        setExperiences,
        personalInfo,
        educations,
        setEducations,
        setSkills,
        skills,
        additionalSections,
        setAdditionalSections,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

const useCustomContext = () => useContext(SiteContext);
export default useCustomContext;
