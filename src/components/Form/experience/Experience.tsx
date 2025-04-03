import React, { useEffect } from "react";
import { Accordion } from "../../UI/Accordion";
import useCustomContext from "../../../hooks/useCustomContext";
import ExperienceSingle, { ExperienceType } from "./ExperienceSingle/ExperienceSingle";
import PlusIcon from "../../../assets/plusIcon";
import TrashIcon from "../../../assets/TrashIcon";
import Title from "../../Shared/Title";

const dict = {
  title: { he: "ניסיון תעסוקתי", en: "Experience" },
  description: {
    he: "התחילו מהעבודה האחרונה שלכם , הוסיפו את הניסיון התעסוקתי האחרונים שלכם במידה ושיניתם משרה לרוב.",
    en: "Start with your most recent position and work backward. Add the most recent and relevant positions if you have lots of experience.",
  },
};

const Experience = () => {
  const { experiences, setExperiences, language } = useCustomContext();

  const handleChange = (value: string, type: keyof ExperienceType, experience: ExperienceType) => {
    const experiencesTemp = [...experiences];
    const idx = experiences.findIndex((ex) => ex.id === experience.id);

    experiencesTemp[idx][type] = value;
    setExperiences(experiencesTemp);
  };

  const validateExp = () => {
    const problematicExperience = experiences.filter((ex) => {
      if (!ex.employer || !ex.jobTitle || !ex.startDate) return true;
      return false;
    });

    if (problematicExperience.length) {
      const exp = problematicExperience[0];
      const text = `job:${exp.jobTitle} , employer:${exp.employer} , start date:${exp.startDate}`;

      alert(`Please fix prev experience , (${text}) `);
      return false;
    }

    return true;
  };

  const handleAddExperience = () => {
    if (!validateExp()) return;

    const emptyNew = {
      id: new Date().getTime().toString(),
      employer: "Employer",
      endDate: "",
      jobTitle: "Job Title",
      location: "",
      startDate: "",
      workSummary: "",
    };

    setExperiences((prev) => [...prev, emptyNew]);
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => {
    if (experiences.length === 1) return;

    e.stopPropagation();

    setExperiences((prev) => {
      return prev.filter((i) => i.id !== id);
    });
  };

  useEffect(() => {
    return () => {
      // setExperiences(p=>{
      //   const sorted = p.sort((a,b)=> a.startDate)
      //   return sorted
      // })
    };
  }, []);

  const accordionItems = experiences.map((ex, idx) => {
    const title = (
      <div className="flex w-full justify-between py-4">
        <span>
          {ex.jobTitle}, {ex.employer}{" "}
        </span>

        {experiences.length > 1 && (
          <button
            disabled={experiences.length === 1}
            onClick={(e) => handleDelete(e, ex.id)}
            className="mr-3 flex items-center gap-2 text-blue-400 cursor-pointer hover:text-blue-800 font-medium transition-all duration-200"
          >
            <TrashIcon />
          </button>
        )}
      </div>
    );

    return {
      id: idx,
      title: title,
      content: <ExperienceSingle experience={ex} language={language} onChange={handleChange} />,
    };
  });

  return (
    <div className="w-full h-full fade-in">
      <Title title={dict.title[language]} description={dict.description[language]} />

      <div className="w-full max-h-[80%] overflow-auto">
        <Accordion items={accordionItems} allowMultiple={false} />
      </div>
      <button className="mt-10 app-btn">
        <PlusIcon />
        <span onClick={handleAddExperience}> Add Work Experience</span>
      </button>
    </div>
  );
};

export default Experience;
