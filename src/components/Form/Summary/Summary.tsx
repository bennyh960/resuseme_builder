import React, { useEffect } from "react";
import useCustomContext from "../../../hooks/useCustomContext";
import Title from "../../Shared/Title";
import RichTextEditor from "../../../UI/RichTextEditor/RichTextEditor";

const dict = {
  title: { he: "תקציר", en: "Summary" },
  description: {
    he: "סכמו בקצרה על הניסיון התעסוקתי , השכלה וכישורים כאן",
    en: "Summarize your work experience, education and skills here.",
  },
  subTitle: {
    en: "Professional Summary",
    he: "תקציר מקצועי",
  },
};
const maxLength = 1500;
const Summary = () => {
  const { summary, setSummary, language } = useCustomContext();

  const handleChange = (value: string) => {
    if (value.length < 1000) setSummary(value);
  };

  return (
    <div className="w-full h-full fade-in">
      <Title title={dict.title[language]} description={dict.description[language]} />

      <div className="block font-medium text-gray-900 mb-2">{dict.subTitle[language]}</div>
      <RichTextEditor maxLength={maxLength} onChange={handleChange} initialContent={summary} />
      <span>
        {summary?.length}/{maxLength}
      </span>
    </div>
  );
};

export default Summary;
