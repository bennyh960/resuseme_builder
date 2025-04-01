import React from "react";
import useCustomContext from "../../../hooks/useCustomContext";
import { labels } from "../../../data/labels";
import { LangLevelMap, skillLevelMap } from "../../Shared/SliderControlMap";

const PatternD: React.FC = () => {
  const { personalInfo, skills, additionalSections, educations, experiences, summary, language } = useCustomContext();
  const getSkillLevelText = (level: number) => skillLevelMap[level][language];
  const getLanguageLevelText = (level: number) => LangLevelMap[level][language];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 text-gray-800">
      {/* Personal Information Section */}
      <section className="personal-info mb-10">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {personalInfo.firstName} {personalInfo.lastName}
            </h1>
            <h2 className="text-xl font-medium text-gray-600">{personalInfo.jobTitle}</h2>
          </div>
          <div className="text-right">
            {personalInfo.email && <div>{personalInfo.email}</div>}
            {personalInfo.phone && <div>{personalInfo.phone}</div>}
            {personalInfo.city && (
              <div>
                {personalInfo.city}, {personalInfo.country}
              </div>
            )}
            {personalInfo.linkedin && <div>{personalInfo.linkedin}</div>}
            {personalInfo.website && <div>{personalInfo.website}</div>}
          </div>
        </div>
      </section>

      {/* Professional Summary Section */}
      {summary && (
        <section className="professional-summary bg-white rounded-lg p-6 mb-10 shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">{labels.professionalSummary.form[language]}</h3>
          <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: summary }} />
        </section>
      )}

      {/* Experience Section */}
      {experiences.length > 0 && (
        <section className="experience bg-white rounded-lg p-6 mb-10 shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">{labels.experience.experienceTitle[language]}</h3>
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-item mb-6">
              <h4 className="text-xl font-bold text-gray-800">
                {exp.jobTitle} - <span className="text-gray-600">{exp.employer}</span>
              </h4>
              <p className="text-gray-600">
                <strong>{labels.experience.startDate[language]}:</strong> {exp.startDate}
              </p>
              <p className="text-gray-600">
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
        <section className="education bg-white rounded-lg p-6 mb-10 shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">{labels.education.educationTitle[language]}</h3>
          {educations.map((edu) => (
            <div key={edu.id} className="education-item mb-6">
              <h4 className="text-xl font-bold text-gray-800">
                {edu.degree} - <span className="text-gray-600">{edu.schoolName}</span>
              </h4>
              <p className="text-gray-600">
                <strong>{labels.education.schoolLocation[language]}:</strong> {edu.schoolLocation}
              </p>
              <p className="text-gray-600">
                <strong>{labels.education.startDate[language]}:</strong> {edu.startDate}
              </p>
              <p className="text-gray-600">
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
        <section className="skills bg-white rounded-lg p-6 mb-10 shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">{labels.skills.skillsTitle[language]}</h3>
          <ul className="space-y-4">
            {skills.data.map((skill, idx) => (
              <li key={idx} className="flex justify-between items-center">
                <div className="w-2/3">
                  <strong>{skill.name}</strong>
                </div>
                {skills.showLevel && (
                  <div className="w-1/3 text-gray-500 text-right">{getSkillLevelText(skill.level)}</div>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Languages Section */}
      {additionalSections.languages.length > 0 && (
        <section className="languages bg-white rounded-lg p-6 mb-10 shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            {labels.additionalSection.languages.title[language]}
          </h3>
          <ul className="space-y-4">
            {additionalSections.languages.map((lang, idx) => (
              <li key={idx} className="flex justify-between items-center">
                <div className="w-2/3">
                  <strong>{lang.name}</strong>
                </div>
                <div className="w-1/3 text-gray-500 text-right">{getLanguageLevelText(lang.level)}</div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Certifications & Custom Sections */}
      <section className="additional-sections">
        {additionalSections.certifications && (
          <div className="certifications mb-6 p-6 bg-white rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-gray-900">
              {labels.additionalSection.certifications.title[language]}
            </h4>
            <p>{additionalSections.certifications}</p>
          </div>
        )}
        {additionalSections.custom &&
          additionalSections.custom.map((item, idx) => (
            <div key={idx} className="custom-section mb-6 p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900">{labels.additionalSection.custom.title[language]}</h4>
              <p>{item.something}</p>
            </div>
          ))}
      </section>
    </div>
  );
};

export default PatternD;
