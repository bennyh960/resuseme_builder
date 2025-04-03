import React from "react";
import { Accordion } from "../../UI/Accordion";
import useCustomContext from "../../../hooks/useCustomContext";
import PlusIcon from "../../../assets/plusIcon";
import TrashIcon from "../../../assets/TrashIcon";
import EducationSingle, { EducationType, FakeInitEducation } from "./educationSingle/EducationSingle";
import Title from "../../Shared/Title";

const dict = {
  title: { he: "השכלה", en: "Education" },
  description: {
    he: "הוסיפו את ההשכלה שלכם עד כה , אפילו אם לא סיימתם.",
    en: "Enter your education experience so far, even if you have not graduated.",
  },
};

const Educations = () => {
  const { educations, setEducations, language } = useCustomContext();

  const handleChange = (value: string, type: keyof EducationType, experience: EducationType) => {
    const educationsTemp = [...educations];
    const idx = educations.findIndex((ex) => ex.id === experience.id);

    educationsTemp[idx][type] = value;
    setEducations(educationsTemp);
  };

  const validateExp = () => {
    const problematicEducation = educations.filter((ed) => {
      if (!ed.schoolName || !ed.fieldOfStudy || !ed.startDate) return true;
      return false;
    });

    if (problematicEducation.length) {
      const edu = problematicEducation[0];
      const text = `schoolName:${edu.schoolName} , field of study:${edu.fieldOfStudy} , start date:${edu.startDate}`;

      alert(`Please fix prev experience , (${text}) `);
      return false;
    }

    return true;
  };

  const handleAddExperience = () => {
    if (!validateExp()) return;

    const emptyNew: EducationType = {
      id: new Date().getTime().toString(),
      schoolName: FakeInitEducation.schoolName,
      schoolLocation: "",
      fieldOfStudy: FakeInitEducation.fieldOfStudy,
      startDate: "",
      endDate: "",
      degree: "",
      description: "",
    };

    setEducations((prev) => [...prev, emptyNew]);
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => {
    if (educations.length === 1) return;

    e.stopPropagation();

    setEducations((prev) => {
      return prev.filter((i) => i.id !== id);
    });
  };

  //   useEffect(() => {
  //     return () => {
  //       // setExperiences(p=>{
  //       //   const sorted = p.sort((a,b)=> a.startDate)
  //       //   return sorted
  //       // })
  //     };
  //   }, []);

  const accordionItems = educations.map((ed, idx) => {
    const title = (
      <div className="flex w-full justify-between py-4">
        <span>
          {ed.schoolName}, {ed.fieldOfStudy}{" "}
        </span>

        {educations.length > 1 && (
          <button
            disabled={educations.length === 1}
            onClick={(e) => handleDelete(e, ed.id)}
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
      content: <EducationSingle education={ed} language={language} onChange={handleChange} />,
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
        <span onClick={handleAddExperience}> Add Education</span>
      </button>
    </div>
  );
};

export default Educations;
