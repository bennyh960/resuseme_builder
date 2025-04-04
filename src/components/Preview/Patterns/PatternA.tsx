import React from "react";
import useCustomContext, { Language } from "../../../hooks/useCustomContext";
import { labels } from "../../../data/labels";
import { skillLevelMap, LangLevelMap } from "../../Shared/SliderControlMap";
import StartGroup from "../../UI/StartGroup";
import { SkillsObject } from "../../Form/skills/Skills";
import { GenerateSkills } from "./helpers/helpers";

// Helper function to map skill level and language level

const PatternA: React.FC = () => {
  const { personalInfo, skills, additionalSections, educations, experiences, summary, language } = useCustomContext();
  // const getSkillLevelText = (level: number) => skillLevelMap[level][language];
  const getLanguageLevelText = (level: number) => LangLevelMap[level][language];

  return (
    <div className="mx-auto bg-white text-gray-800">
      {/* Personal Information Section */}
      <section className="personal-info mb-10">
        <div className="header mb-4 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
          <h2 className="text-xl text-gray-500">{personalInfo.jobTitle}</h2>
        </div>
        <div className="contact-info space-y-2 flex gap-5 justify-between flex-wrap w-full">
          {personalInfo.email && (
            <div>
              <strong>{labels.personalInfo.email[language]}:</strong> {personalInfo.email}
            </div>
          )}
          {personalInfo.phone && (
            <div>
              <strong>{labels.personalInfo.phone[language]}:</strong> {personalInfo.phone}
            </div>
          )}
          {personalInfo.city && (
            <div>
              <strong>{labels.personalInfo.city[language]}:</strong> {personalInfo.city}
            </div>
          )}
          {personalInfo.country && (
            <div>
              <strong>{labels.personalInfo.country[language]}:</strong> {personalInfo.country}
            </div>
          )}
          {personalInfo.linkedin.text && (
            <div>
              <strong>{labels.personalInfo.linkedin[language]}:</strong>{" "}
              <a href={personalInfo.linkedin.url}>{personalInfo.linkedin.text}</a>
            </div>
          )}
          {personalInfo.website.text && (
            <div>
              <strong>{labels.personalInfo.website[language]}:</strong>{" "}
              <a href={personalInfo.website.url}>{personalInfo.website.text}</a>
            </div>
          )}
        </div>
      </section>
      {/* Professional Summary Section */}
      {summary && (
        <section className="professional-summary mb-10">
          <h3 className="text-xl font-semibold mb-3">{labels.professionalSummary.form[language]}</h3>
          <p dangerouslySetInnerHTML={{ __html: summary }} />
        </section>
      )}
      {/* Experience Section */}
      {experiences.length > 0 && (
        <section className="experience mb-10">
          <h3 className="text-xl font-semibold mb-3">{labels.experience.experienceTitle[language]}</h3>
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card p-5 mb-4 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-lg font-bold">
                {exp.jobTitle} - {exp.employer}
              </h4>
              <p>
                <strong>{labels.experience.startDate[language]}:</strong> {exp.startDate}
              </p>
              <p>
                <strong>{labels.experience.endDate[language]}:</strong>{" "}
                {exp.endDate || labels.experience.current[language]}
              </p>
              <div className="work-summary mt-3" dangerouslySetInnerHTML={{ __html: exp.workSummary }} />
            </div>
          ))}
        </section>
      )}
      {/* Education Section */}
      {educations.length > 0 && (
        <section className="education mb-10">
          <h3 className="text-xl font-semibold mb-3">{labels.education.educationTitle[language]}</h3>
          {educations.map((edu) => (
            <div key={edu.id} className="education-card p-5 mb-4 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-lg font-bold">
                {edu.degree} - {edu.schoolName}
              </h4>
              <p>
                <strong>{labels.education.schoolLocation[language]}:</strong> {edu.schoolLocation}
              </p>
              <p>
                <strong>{labels.education.startDate[language]}:</strong> {edu.startDate}
              </p>
              <p>
                <strong>{labels.education.endDate[language]}:</strong> {edu.endDate}
              </p>
              {edu.description && (
                <p>
                  <strong>{labels.education.description[language]}:</strong> {edu.description}
                </p>
              )}
            </div>
          ))}
        </section>
      )}
      {/* Skills Section */}
      {skills.data.length > 0 && (
        <section className="skills mb-10">
          <h3 className="text-xl font-semibold mb-3">{labels.skills.skillsTitle[language]}</h3>
          <ul className="grid grid-cols-2 gap-2">
            {skills.data.map((skill, idx) => (
              <li key={idx} className="flex items-center  p-2">
                <strong className="flex-1 min-w-0">{skill.name}</strong>
                <GenerateSkills
                  color={skills.levelColor}
                  language={language}
                  type={skills.levelType}
                  level={skill.level}
                  className="italic text-gray-500"
                />
              </li>
            ))}
          </ul>
        </section>
      )}
      {/* Languages Section */}
      {additionalSections.languages.length > 0 && (
        <section className="languages mb-10">
          <h3 className="text-xl font-semibold mb-3">{labels.additionalSection.languages.title[language]}</h3>
          <ul className="space-y-2">
            {additionalSections.languages.map((lang, idx) => (
              <li key={idx} className="text-lg">
                <strong>{lang.name}</strong>
                <span className="italic text-gray-500"> - {getLanguageLevelText(lang.level)}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
      {/* Certifications & Custom Section */}
      <section className="additional-sections">
        {additionalSections.certifications && (
          <div className="mb-4">
            <h4 className="text-lg font-semibold">{labels.additionalSection.certifications.title[language]}</h4>
            <p>{additionalSections.certifications}</p>
          </div>
        )}
        {additionalSections.custom &&
          additionalSections.custom.map((item, idx) => (
            <div key={idx} className="mb-4">
              <h4 className="text-lg font-semibold">{labels.additionalSection.custom.title[language]}</h4>
              <p>{item.something}</p>
            </div>
          ))}
      </section>
    </div>
  );
};

export default PatternA;
