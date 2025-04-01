import React, { useCallback } from "react";
import useCustomContext from "../../../hooks/useCustomContext";
import PlusIcon from "../../../assets/plusIcon";
import Title from "../../Shared/Title";
import ToggleButton from "../../../UI/ToggleBtn/ToggleBtn";
import SliderControlMap from "../../Shared/SliderControlMap";

export interface SkillType {
  name: string;
  level: number;
}

export type SkillsObject = {
  data: SkillType[];
  showLevel: boolean;
};

const dict = {
  title: { he: "כישורים נוספים", en: "Skills" },
  showExpLvl: { en: "Show experience level", he: "הראה רמה" },
  hideExpLvl: { en: "Hide experience level", he: "הסתר רמה" },
  description: {
    he: "מומלץ לשתף כישורים שידגישו חוזקות שלכם",
    en: "Highlight your most important and applicable professional skills.",
  },
};

const SkillsSection: React.FC = () => {
  const { skills, setSkills, language } = useCustomContext();

  const handleSkillLevelChange = (index: number, level: number) => {
    const updatedSkills = [...skills.data];
    updatedSkills[index].level = level;

    setSkills((prev) => ({ ...prev, data: updatedSkills }));
  };

  const handleSkillNameChange = useCallback(
    (index: number, name: string) => {
      setSkills((prev) => {
        // Create a new array with a new object for the specific skill
        const newSkills = [...prev.data];
        newSkills[index] = { ...newSkills[index], name };
        return { ...prev, data: newSkills };
      });
    },
    [setSkills]
  );

  const randomSkill = () => {
    const skillsBank = [
      { he: "פיתוח מערכות Full-Stack", en: "Full-Stack Development" },
      { he: "פיתוח תוכנה ב-Node.js", en: "Software Development in Node.js" },
      { he: "עבודה עם מסדי נתונים PostgreSQL", en: "Working with PostgreSQL Databases" },
      { he: "שימוש בטכנולוגיות Front-End (React, JavaScript)", en: "Front-End Technologies (React, JavaScript)" },
      { he: "עבודה עם APIs", en: "API Development and Integration" },
      { he: "יכולת פתרון בעיות טכנולוגיות", en: "Problem-Solving Skills" },
      { he: "ניהול פרויקטים בצוות", en: "Team Project Management" },
      { he: "ידע ב-HTML ו-CSS", en: "HTML and CSS Proficiency" },
      { he: "הבנה של עקרונות אבטחת מידע", en: "Understanding of Security Principles" },
      { he: "יכולת עבודה בסביבה דינמית", en: "Ability to Work in a Dynamic Environment" },
    ].filter((s1) => {
      if (skills.data.find((s2) => s2.name === s1[language])) return false;
      return true;
    });

    const idx = Math.floor(Math.random() * skills.data.length);
    return skillsBank[idx][language];
  };

  const handleAddSkill = () => {
    if (skills.data.length === 10) alert("max skills is 10");
    const data = [...skills.data, { level: 3, name: randomSkill() }];
    setSkills((prev) => ({ data, showLevel: prev.showLevel }));
  };

  const handleDelete = (skill: SkillType) => {
    setSkills((prev) => {
      const data = prev.data.filter((s) => s.name !== skill.name);
      return { ...prev, data };
    });
  };

  const toggleShowLvl = () => {
    setSkills((prev) => ({ ...prev, showLevel: !prev.showLevel }));
  };

  return (
    <div className="w-full h-full fade-in">
      <Title title={dict.title[language]} description={dict.description[language]} />
      <div className="flex gap-3 items-center">
        <span className="mb-1">{dict[skills.showLevel ? "showExpLvl" : "hideExpLvl"][language]}</span>
        <ToggleButton checked={skills.showLevel} onChange={toggleShowLvl} />
      </div>

      <div className="w-full max-h-[65%] overflow-auto">
        {skills.data?.map((skill, index) => (
          <SliderControlMap
            onDelete={handleDelete}
            onNameChange={handleSkillNameChange}
            onLevelChange={handleSkillLevelChange}
            key={skill.name}
            index={index}
            value={skill}
            language={language}
            type="skills"
          />
        ))}
      </div>
      <button className="mt-10 app-btn">
        <PlusIcon />
        <span onClick={handleAddSkill}> Add Skill</span>
      </button>
    </div>
  );
};

export default SkillsSection;
