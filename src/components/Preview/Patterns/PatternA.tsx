import React from "react";
import useCustomContext from "../../../hooks/useCustomContext";
import { labels } from "../../../data/labels";

const PatternA = () => {
  const { personalInfo, language, skills, additionalSections, educations, experiences, summary } = useCustomContext();
  return (
    <div className={`p-6 mx-auto ${language === "he" ? "text-right" : "text-left"}`}>
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">{personalInfo.firstName + " " + personalInfo.lastName}</h1>
        <p className="text-xl">{personalInfo.jobTitle}</p>
        <div className="flex justify-between">
          <p className="text-sm text-gray-500">
            {labels.personalInfo.phone[language]}: {personalInfo.phone}
          </p>
          <p className="text-sm text-gray-500">
            {labels.personalInfo.email[language]}: {personalInfo.email}
          </p>
          {personalInfo.linkedin && (
            <p className="text-sm text-gray-500">
              {labels.personalInfo.linkedin[language]}: {personalInfo.linkedin}
            </p>
          )}
          {personalInfo.website && (
            <p className="text-sm text-gray-500">
              {labels.personalInfo.website[language]}: {personalInfo.website}
            </p>
          )}
        </div>
      </header>

      {/* Professional Summary */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">{labels.professionalSummary.preview[language]}</h2>
        <p dangerouslySetInnerHTML={{ __html: summary }} />
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">{labels.skills.skillsTitle[language]}</h2>
        <ul>
          {skills.data.map((skill, index) => (
            <li key={index} className="text-lg">
              <span>{skill.name}</span>
              {skills.showLevel && <span> - {skill.level}</span>}
            </li>
          ))}
        </ul>
      </section>

      {/* Work Experience */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">{labels.experience.experienceTitle[language]}</h2>
        {experiences.map((exp, index) => {
          return (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-bold">
                {exp.jobTitle} - {exp.employer}
              </h3>
              <p className="text-sm text-gray-500">
                <span>{exp.startDate}</span>
                <span>-</span>
                <span>{exp.endDate}</span>
              </p>
              <div className="list-disc ml-5" dangerouslySetInnerHTML={{ __html: exp.workSummary }} />
            </div>
          );
        })}
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">{labels.education.educationTitle[language]}</h2>
        {educations.map((edu) => {
          return (
            <div key={edu.id}>
              <h3 className="text-xl font-bold">
                {edu.degree} in {edu.fieldOfStudy} ({edu.schoolName},{edu.schoolLocation})
              </h3>
              <p className="text-sm text-gray-500">
                {edu.startDate} - {edu.endDate}
              </p>
              <p className="text-sm" dangerouslySetInnerHTML={{ __html: edu.description }}></p>
            </div>
          );
        })}
      </section>

      {/* Languages */}
      <section className="mb-6">
        <div>
          <h1>{labels.additionalSection.languages.title[language]}</h1>
          <ul>
            {additionalSections.languages.map((lang) => {
              return (
                <li key={lang.name}>
                  {lang.name}-{lang.level}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PatternA;
