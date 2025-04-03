import React, { useEffect, useRef } from "react";
import FormField from "../../../UI/FormField";
import { labels } from "../../../../data/labels";
import { Language } from "../../../../hooks/useCustomContext";
import RichTextEditor from "../../../UI/RichTextEditor";
import CheckBox from "../../../UI/CheckBox";
import Checkbox from "../../../UI/CheckBox";

export type EducationType = {
  schoolName: string;
  schoolLocation: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  description: string;
  id: string;
};

export const FakeInitEducation: EducationType = {
  id: "-demo",
  schoolName: "Bar Ilan",
  schoolLocation: "Ramat Gan",
  degree: "B.Sc",
  fieldOfStudy: "Computer Science",
  startDate: "2020-03",
  endDate: "2023-04",
  description: "Master of Indigo league , using Dragonite and Tyrnitar as beasts.",
};

interface IEducationSingle {
  language: Language;
  education: EducationType;
  onChange: (value: string, type: keyof EducationType, experience: EducationType) => void;
}

const EducationSingle = ({ language, education, onChange }: IEducationSingle) => {
  const endDateRef = useRef<string>(education.endDate);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | string) => {
    if (typeof e === "string") {
      onChange(e, "description" as keyof EducationType, education);
    } else {
      onChange(e.target.value, e.target.id as keyof EducationType, education);
    }
  };

  const handleChangeCurrent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked === true ? "" : endDateRef.current;
    onChange(value, "endDate" as keyof EducationType, education);
  };

  useEffect(() => {
    if (education.endDate) {
      endDateRef.current = education.endDate;
    }
  }, [education.endDate]);

  return (
    <div className="flex flex-wrap gap-7">
      <FormField
        className="basis-[calc(50%-14px)]"
        id="schoolName"
        label={labels.education.schoolName[language]}
        value={education.schoolName}
        onChange={handleChange}
      />
      <FormField
        className="basis-[calc(50%-14px)]"
        id="schoolLocation"
        label={labels.education.schoolLocation[language]}
        value={education.schoolLocation}
        onChange={handleChange}
      />

      <FormField
        className="basis-[calc(50%-14px)]"
        id="degree"
        label={labels.education.degree[language]}
        value={education.degree}
        onChange={handleChange}
      />
      <FormField
        className="basis-[calc(50%-14px)]"
        id="fieldOfStudy"
        label={labels.education.fieldOfStudy[language]}
        value={education.fieldOfStudy}
        onChange={handleChange}
      />
      <FormField
        className="basis-[calc(30%-14px)]"
        id="startDate"
        label={labels.education.startDate[language]}
        type="month"
        value={education.startDate}
        onChange={handleChange}
      />
      <div className="basis-[calc(30%-14px)] flex flex-col gap-3">
        <FormField
          id="endDate"
          label={labels.education.endDate[language]}
          placeholder="Mar 2024"
          type="month"
          value={education.endDate}
          onChange={handleChange}
        />
        <span className="ml-1">
          <Checkbox
            label={labels.education.current[language]}
            containerClassName="mt-1"
            checked={education.endDate === ""}
            onChange={handleChangeCurrent}
          />
        </span>
      </div>

      <div className="basis-[100%] w-full flex-grow">
        <div className="block font-medium text-gray-900 mb-2">{labels.education.description[language]}</div>
        <RichTextEditor onChange={(html) => handleChange(html)} initialContent={education.description} />
      </div>
    </div>
  );
};

export default EducationSingle;
