import React, { useCallback } from "react";
import useCustomContext from "../../../hooks/useCustomContext";
import PlusIcon from "../../../assets/plusIcon";
import SkillSingle from "./SkillSingle/SkillSingle";
import Title from "../../Shared/Title";
import ToggleButton from "../../../UI/ToggleBtn/ToggleBtn";

export interface SkillType {
  name: string;
  level: number;
}

export type SkillsObject = {
  data: SkillType[];
  showLevel: boolean;
};

const dict = {
  title: { he: "השכלה", en: "Education" },
  description: {
    he: "הוסיפו את ההשכלה שלכם עד כה , אפילו אם לא סיימתם.",
    en: "Enter your education experience so far, even if you have not graduated.",
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
    console.log("xx");
    const data = [...skills.data, { level: 3, name: randomSkill() }];
    setSkills((prev) => ({ data, showLevel: prev.showLevel }));
  };

  const handleDelete = (skill: SkillType) => {
    setSkills((prev) => {
      const data = prev.data.filter((s) => s.name !== skill.name);
      return { ...prev, data };
    });
  };

  return (
    <div className="w-full h-full">
      <Title title={dict.title[language]} description={dict.description[language]} />
      {/* <ToggleButton checked={} onChange={} /> */}

      <div className="w-full max-h-[70%] overflow-auto">
        {skills.data?.map((skill, index) => (
          <SkillSingle
            onDelete={handleDelete}
            onNameChange={handleSkillNameChange}
            onLevelChange={handleSkillLevelChange}
            key={skill.name}
            index={index}
            skill={skill}
            language={language}
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
