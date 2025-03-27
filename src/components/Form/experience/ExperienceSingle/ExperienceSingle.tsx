import React, { useEffect, useRef } from "react";
import FormField from "../../../../UI/FormField/FormField";
import { labels } from "../../../../data/labels";
import { Language } from "../../../../hooks/useCustomContext";
import RichTextEditor from "../../../../UI/RichTextEditor/RichTextEditor";
import Checkbox from "../../../../UI/CheckBox/CheckBox";

export type ExperienceType = {
  jobTitle: string;
  employer: string;
  location: string;
  startDate: string;
  endDate: string;
  workSummary: string;
  id: string;
};

export const FakeInitExperience: ExperienceType = {
  id: "-demo",
  jobTitle: "Pokemon Master",
  employer: "Indigo",
  location: "Viridian City",
  startDate: "2023-03",
  endDate: "2025-04",
  workSummary: "Master of Indigo league , using Dragonite and Tyrnitar as beasts.",
};

const currentLbl = { he: "עדיין", en: "Current" };

interface IExperienceSingle {
  language: Language;
  experience: ExperienceType;
  onChange: (value: string, type: keyof ExperienceType, experience: ExperienceType) => void;
}

const ExperienceSingle = ({ language, experience, onChange }: IExperienceSingle) => {
  const endDateRef = useRef<string>(experience.endDate);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | string) => {
    if (typeof e === "string") {
      onChange(e, "workSummary" as keyof ExperienceType, experience);
    } else {
      onChange(e.target.value, e.target.id as keyof ExperienceType, experience);
    }
  };

  const handleChangeCurrent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked === true ? currentLbl[language] : endDateRef.current;
    onChange(value, "endDate" as keyof ExperienceType, experience);
  };

  useEffect(() => {
    if (experience.endDate) {
      endDateRef.current = experience.endDate;
    }
  }, [experience.endDate]);

  return (
    <div className="flex flex-wrap gap-7">
      <FormField
        className="basis-[calc(50%-14px)]"
        id="jobTitle"
        label={labels.experience.jobTitle[language]}
        placeholder="Data Analyst"
        value={experience.jobTitle}
        onChange={handleChange}
      />
      <FormField
        className="basis-[calc(50%-14px)]"
        id="employer"
        label={labels.experience.employer[language]}
        placeholder="Dell"
        value={experience.employer}
        onChange={handleChange}
      />

      <FormField
        className="basis-[calc(50%-14px)]"
        id="location"
        label={labels.experience.location[language]}
        placeholder="New York"
        value={experience.location}
        onChange={handleChange}
      />
      <FormField
        className="basis-[calc(24%-14px)]"
        id="startDate"
        label={labels.experience.startDate[language]}
        placeholder="Mar 2022"
        type="month"
        value={experience.startDate}
        onChange={handleChange}
      />
      <div className="basis-[calc(24%-14px)] flex flex-col gap-3">
        <FormField
          id="endDate"
          label={labels.experience.endDate[language]}
          placeholder="Mar 2024"
          type="month"
          value={experience.endDate}
          onChange={handleChange}
        />
        <span className="ml-1">
          <Checkbox
            label="Current"
            containerClassName="mt-3"
            checked={experience.endDate === currentLbl.en || experience.endDate === currentLbl.he}
            onChange={handleChangeCurrent}
          />
        </span>
      </div>

      <div className="basis-2 w-full flex-grow">
        <div className="block font-medium text-gray-900 mb-2">{labels.experience.workSummary[language]}</div>
        <RichTextEditor onChange={(html) => handleChange(html)} initialContent={experience.workSummary} />
      </div>
    </div>
  );
};

export default ExperienceSingle;
