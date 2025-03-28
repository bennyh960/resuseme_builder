import React from "react";
import { skillLevelMap } from "../../Form/skills/SkillSingle/SkillSingle";
import useCustomContext from "../../../hooks/useCustomContext";
import { labels } from "../../../data/labels";

const languageLvlMap = { ...skillLevelMap };

const PatternB = () => {
  const { personalInfo, skills, additionalSections, educations, experiences, summary, language } = useCustomContext();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg">
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
            {/* <User className="mr-2" />  */}
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
              {edu.description && <p className="text-gray-600 mt-2">{edu.description}</p>}
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
                <h3 className="font-bold">
                  {exp.jobTitle} at {exp.employer}
                </h3>
                <p className="text-gray-600">
                  {exp.startDate} - {exp.endDate || "Present"}
                </p>
              </div>
              <p className="text-gray-700">{exp.location}</p>
              {exp.workSummary && <p className="text-gray-600 mt-2">{exp.workSummary}</p>}
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
                {/* <SkillLevel level={skill.level} showLevel={skills.showLevel} /> */}
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
