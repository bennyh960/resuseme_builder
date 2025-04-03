import React from "react";
import useCustomContext from "../../../hooks/useCustomContext";
import { labels } from "../../../data/labels";
import StartGroup from "../../UI/StartGroup";
import { LangLevelMap, skillLevelMap } from "../../Shared/SliderControlMap";

const PatternB: React.FC = () => {
  const { personalInfo, skills, additionalSections, educations, experiences, summary, language } = useCustomContext();
  const getSkillLevelText = (level: number) => skillLevelMap[level][language];
  const getLanguageLevelText = (level: number) => LangLevelMap[level][language];

  return (
    <div className="mx-auto bg-white  ">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <p className="text-xl text-gray-600">{personalInfo.jobTitle}</p>

        <div className="flex justify-center space-x-4 mt-4 text-gray-700">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.city && personalInfo.country && (
            <span>
              {personalInfo.city}, {personalInfo.country}
            </span>
          )}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b-2 border-blue-500 pb-2 mb-4 flex items-center">
            Professional Summary
          </h2>
          <div dangerouslySetInnerHTML={{ __html: summary }} />
        </section>
      )}

      {/* Education */}
      {educations && educations.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b-2 border-blue-500 pb-2 mb-4 flex items-center">
            {/* <GraduationCap className="mr-2" />  */}
            Education
          </h2>
          {educations.map((edu) => (
            <div key={edu.id} className="mb-4">
              <div className="flex justify-between">
                <h3 className="font-bold">{edu.schoolName}</h3>
                <p className="text-gray-600">
                  {edu.startDate} - {edu.endDate || "Present"}
                </p>
              </div>
              <p className="text-gray-700">
                {edu.degree} in {edu.fieldOfStudy}
              </p>
              {edu.description && (
                <p className="text-gray-600 mt-2" dangerouslySetInnerHTML={{ __html: edu.description }} />
              )}
            </div>
          ))}
        </section>
      )}

      {/* Professional Experience */}
      {experiences && experiences.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b-2 border-blue-500 pb-2 mb-4 flex items-center">
            {/* <Briefcase className="mr-2" />  */}
            Professional Experience
          </h2>
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <h3 className="font-bold">
                    {exp.jobTitle} at {exp.employer}
                  </h3>
                  {exp.location && <p className="text-gray-700">({exp.location})</p>}
                </div>
                <p className="text-gray-600">
                  {exp.startDate} - {exp.endDate || "Present"}
                </p>
              </div>

              {exp.workSummary && (
                <p className="text-gray-600 mt-2" dangerouslySetInnerHTML={{ __html: exp.workSummary }} />
              )}
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {skills && skills.data.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b-2 border-blue-500 pb-2 mb-4 flex items-center">
            {/* <Code className="mr-2" />  */}
            Skills
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {skills.data.map((skill, index) => (
              <div key={index} className="flex justify-between items-center">
                <span>{skill.name}</span>
                {skills.showLevel &&
                  (skills.levelType === "stars" ? (
                    <StartGroup max={5} rate={skill.level} color={skills.levelColor} />
                  ) : (
                    <span style={{ color: skills.levelColor }}>{getSkillLevelText(skill.level)}</span>
                  ))}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Languages */}
      {
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b-2 border-blue-500 pb-2 mb-4 flex items-center">
            {/* <Globe className="mr-2" />  */}
            Languages
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {additionalSections.languages.map((lang, index) => (
              <div key={index} className="flex justify-between items-center">
                <span>{lang.name}</span>
                {/* <SkillLevel level={lang.lvl} showLevel={true} /> */}
              </div>
            ))}
          </div>
        </section>
      }

      {/* Certifications */}
      {additionalSections?.certifications && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b-2 border-blue-500 pb-2 mb-4 flex items-center">
            {/* <Award className="mr-2" />  */}
            Certifications
          </h2>
          <div dangerouslySetInnerHTML={{ __html: additionalSections.certifications }} />
        </section>
      )}
    </div>
  );
};

export default PatternB;
