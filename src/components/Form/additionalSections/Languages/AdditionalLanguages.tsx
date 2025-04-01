import React, { useCallback } from "react";
import useCustomContext from "../../../../hooks/useCustomContext";
import Title from "../../../Shared/Title";
import PlusIcon from "../../../../assets/plusIcon";
import SliderControlMap from "../../../Shared/SliderControlMap";

interface LangType {
  name: string;
  level: number;
}

const AdditionalLangSection: React.FC = () => {
  const { additionalSections, setAdditionalSections, language } = useCustomContext();

  const handleLevelChange = (index: number, level: number) => {
    const updatedLang = [...additionalSections.languages];
    updatedLang[index].level = level;
    setAdditionalSections((prev) => ({ ...prev, languages: [...updatedLang] }));
  };

  const handleNameChange = useCallback(
    (index: number, name: string) => {
      setAdditionalSections((prev) => {
        // Create a new array with a new object for the specific Lang
        const newLang = [...prev.languages];
        newLang[index] = { ...newLang[index], name };
        return { ...prev, languages: newLang };
      });
    },
    [setAdditionalSections]
  );

  const handleAddLang = () => {
    const data = [...additionalSections.languages, { level: 3, name: "" }];
    setAdditionalSections((prev) => ({ ...prev, languages: data }));
  };

  const handleDelete = (selectedLanguage: LangType) => {
    setAdditionalSections((prev) => {
      const data = prev.languages.filter((s) => s.name !== selectedLanguage.name);
      return { ...prev, data };
    });
  };

  return (
    <div className="w-full h-full fade-in">
      <div className="w-full max-h-[65%] overflow-auto">
        {additionalSections.languages?.map((lang, index) => (
          <SliderControlMap
            onDelete={handleDelete}
            onNameChange={handleNameChange}
            onLevelChange={handleLevelChange}
            key={lang.name}
            index={index}
            value={lang}
            type="language"
            language={language}
          />
        ))}
      </div>
      <button className="mt-10 app-btn">
        <PlusIcon />
        <span onClick={handleAddLang}> Add Language</span>
      </button>
    </div>
  );
};

export default AdditionalLangSection;
