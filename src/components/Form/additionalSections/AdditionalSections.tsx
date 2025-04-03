import React, { ReactNode } from "react";
import Title from "../../Shared/Title";
import useCustomContext from "../../../hooks/useCustomContext";
import { Accordion } from "../../UI/Accordion";
import checkIcon from "../../../assets/circle-check.svg";
import ListIcon from "../../../assets/ListIcon";
import LanguagesIcon from "../../../assets/LanguagesIcon";
import MedalIcon from "../../../assets/MedalIcon";
import AdditionalLangSection from "./Languages/AdditionalLanguages";

export type AdditionalSectionsType = {
  languages: { name: string; level: number }[];
  custom: Record<string, string>[];
  certifications: string;
};

const dict = {
  title: { he: "פרטים נוספים", en: "Additional Sections" },
  description: {
    he: "הוסיפו את הקטגרויות הרלוונטיות ביותר עבורכם.",
    en: "You should only add resume categories if they are relevant and you can list a few things in each section. Pick the most impactful categories first.",
  },
};

export const initAdditionalSections: AdditionalSectionsType = {
  languages: [],
  custom: [],
  certifications: "",
};

const AdditionalSections = () => {
  const { language } = useCustomContext();

  const accordionItems = [
    {
      id: "languages",
      content: <AdditionalLangSection />,
      title: (
        <AdditionalTitleCard
          title="Languages"
          description="If you are proficient in one or more languages, mention them in this section."
          icon={<LanguagesIcon />}
        />
      ),
    },
    {
      id: "certifications",
      content: "",
      title: (
        <AdditionalTitleCard
          title="Certifications"
          description="Elevate your resume with noteworthy credentials that prove you are an expert in your field."
          icon={<MedalIcon />}
        />
      ),
    },
    {
      id: "custom",
      content: "",
      title: (
        <AdditionalTitleCard
          title="Add your own"
          description="Use this space to build a custom section, and make it your own."
          icon={<ListIcon />}
        />
      ),
    },
  ];

  return (
    <div className="w-full h-full fade-in">
      <Title title={dict.title[language]} description={dict.description[language]} />
      <div className="w-full max-h-[85%] overflow-auto">
        <Accordion items={accordionItems} />
      </div>
    </div>
  );
};

export default AdditionalSections;

const AdditionalTitleCard = ({ icon, title, description }: { icon: ReactNode; title: string; description: string }) => {
  return (
    <div className="flex gap-3 items-center">
      <div className="w-12 h-12 bg-amber-200">{icon}</div>
      <div className="flex-col gap-3">
        <div className="flex gap-2 items-center">
          <span className="font-bold text-2xl">{title}</span>
          <span>
            <img src={checkIcon} alt={`is filled ${title} section `} />
          </span>
        </div>
        <div className="font-light">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
