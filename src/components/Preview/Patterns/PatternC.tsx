import React from "react";
import useCustomContext from "../../../hooks/useCustomContext";
import { labels } from "../../../data/labels";
import { skillLevelMap } from "../../Shared/SliderControlMap";

const PatternD = () => {
  const { personalInfo, skills, additionalSections, educations, experiences, summary, language } = useCustomContext();

  const renderOptionalField = (value, label) => {
    if (value) {
      return (
        <div className="mb-2 flex items-center gap-5">
          <p className="text-sm font-medium text-gray-600">{label}:</p>
          <p className="text-gray-800">{value}</p>
        </div>
      );
    }
    return null;
  };

  const renderExperience = (experience) => {
    return (
      <div key={experience.id} className="mb-6 border-b pb-4">
        <h4 className="text-lg font-semibold text-indigo-700">{experience.jobTitle}</h4>
        <p className="text-gray-600 font-medium">{experience.employer}</p>
        <p className="text-sm text-gray-500 mb-2">
          {experience.startDate} - {experience.endDate}
        </p>
        <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: experience.workSummary }} />
      </div>
    );
  };

  const renderEducation = (education) => {
    return (
      <div key={education.id} className="mb-6 border-b pb-4">
        <h4 className="text-lg font-semibold text-indigo-700">{education.degree}</h4>
        <p className="text-gray-600 font-medium">{education.schoolName}</p>
        <p className="text-gray-600">{education.schoolLocation}</p>
        <p className="text-sm text-gray-500 mb-2">
          {education.startDate} - {education.endDate}
        </p>
        <p className="text-gray-700">{education.fieldOfStudy}</p>
        {renderOptionalField(education.description, labels.education.description[language])}
      </div>
    );
  };

  const renderSkills = () => {
    if (!skills) return null;

    return (
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-indigo-800 mb-4 border-b pb-2">
          {labels.skills.skillsTitle[language]}
        </h3>
        <ul className="list-disc list-inside space-y-2">
          {skills.data.map((skill) => (
            <li key={skill.name} className="text-gray-800">
              {skill.name}
              {skills.showLevel && skill.level && ` - ${skillLevelMap[skill.level][language]}`}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderLanguages = () => {
    if (!additionalSections?.languages) return null;

    return (
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-indigo-800 mb-2">
          {labels.additionalSection.languages.title[language]}
        </h4>
        <ul className="list-disc list-inside space-y-2">
          {additionalSections.languages.map((lang) => (
            <li key={lang.name} className="text-gray-800">
              {lang.name}
              {lang.level && ` - ${skillLevelMap[lang.level][language]}`}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderAdditionalSection = () => {
    return (
      <div>
        {renderLanguages()}
        {additionalSections?.certifications && (
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-indigo-800 mb-2">
              {labels.additionalSection.certifications.title[language]}
            </h4>
            <p className="text-gray-800">{additionalSections.certifications}</p>
          </div>
        )}
        {additionalSections?.custom && (
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-indigo-800 mb-2">
              {labels.additionalSection.custom.title[language]}
            </h4>
            {/* Render custom data here */}
            {/* Example: */}
            {additionalSections.custom &&
              additionalSections.custom.map((item, index) => (
                <p key={index} className="text-gray-800">
                  {item.something}
                </p>
              ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-8 max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
      {/* Personal Information */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-indigo-900 mb-2">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <h3 className="text-xl font-semibold text-indigo-700 mb-4">{personalInfo.jobTitle}</h3>
        <div className="space-y-2">
          {renderOptionalField(personalInfo.email, labels.personalInfo.email[language])}
          {renderOptionalField(personalInfo.phone, labels.personalInfo.phone[language])}
          {renderOptionalField(personalInfo.city, labels.personalInfo.city[language])}
          {renderOptionalField(personalInfo.country, labels.personalInfo.country[language])}
          {renderOptionalField(personalInfo.linkedin, labels.personalInfo.linkedin[language])}
          {renderOptionalField(personalInfo.website, labels.personalInfo.website[language])}
        </div>
      </section>

      {/* Professional Summary */}
      {summary && (
        <section className="mb-8 border-b pb-4">
          <h3 className="text-xl font-semibold text-indigo-800 mb-4">{labels.professionalSummary.form[language]}</h3>
          <p className="text-gray-800">{summary}</p>
        </section>
      )}

      {/* Experience */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold text-indigo-800 mb-4">{labels.experience.experienceTitle[language]}</h3>
        {experiences.map(renderExperience)}
      </section>

      {/* Education */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold text-indigo-800 mb-4">{labels.education.educationTitle[language]}</h3>
        {educations.map(renderEducation)}
      </section>

      {/* Skills */}
      <section className="mb-8">{renderSkills()}</section>

      {/* Additional Sections */}
      <section>{renderAdditionalSection()}</section>
    </div>
  );
};

export default PatternD;
