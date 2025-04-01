import React from "react";
import useCustomContext from "../../../hooks/useCustomContext";
import { LangLevelMap, skillLevelMap } from "../../Shared/SliderControlMap";

const PatternG: React.FC = () => {
  const { personalInfo, skills, additionalSections, educations, experiences, summary, language } = useCustomContext(); // Assuming useCustomContext is defined elsewhere

  const getSkillLevelText = (level: number) => {
    return skillLevelMap[level] ? skillLevelMap[level][language] : "";
  };

  const getLanguageLevelText = (level: number) => {
    return LangLevelMap[level] ? LangLevelMap[level][language] : "";
  };

  return (
    <div className="flex flex-col h-full">
      {/* Personal Info */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <h2 className="text-lg font-semibold">{personalInfo.jobTitle}</h2>
        <div className="flex items-center space-x-4">
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.city && <span>{personalInfo.city}</span>}
          {personalInfo.country && <span>{personalInfo.country}</span>}
          {personalInfo.linkedin?.url && (
            <a href={personalInfo.linkedin.url} target="_blank" rel="noopener noreferrer">
              {personalInfo.linkedin.text || "LinkedIn"}
            </a>
          )}
          {personalInfo.website?.url && (
            <a href={personalInfo.website.url} target="_blank" rel="noopener noreferrer">
              {personalInfo.website.text || "Website"}
            </a>
          )}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Summary</h2>
          <div dangerouslySetInnerHTML={{ __html: summary }} />
        </div>
      )}

      {/* Experiences */}
      {experiences && experiences.length > 0 && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Experience</h2>
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-2">
              <h3 className="font-semibold">{exp.jobTitle}</h3>
              <p className="text-gray-600">
                {exp.employer}, {exp.location}
              </p>
              <p className="text-gray-600">
                {exp.startDate} - {exp.endDate}
              </p>
              <div dangerouslySetInnerHTML={{ __html: exp.workSummary }} />
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {educations && educations.length > 0 && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Education</h2>
          {educations.map((edu) => (
            <div key={edu.id} className="mb-2">
              <h3 className="font-semibold">
                {edu.degree} - {edu.fieldOfStudy}
              </h3>
              <p className="text-gray-600">
                {edu.schoolName}, {edu.schoolLocation}
              </p>
              <p className="text-gray-600">
                {edu.startDate} - {edu.endDate}
              </p>
              {edu.description && <div dangerouslySetInnerHTML={{ __html: edu.description }} />}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills && skills.data && skills.data.length > 0 && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.data.map((skill, index) => (
              <div key={index} className="px-2 py-1 bg-gray-200 rounded-md">
                {skill.name}
                {skills.showLevel && skill.level && (
                  <span className="text-sm text-gray-500"> ({getSkillLevelText(skill.level)})</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Additional Sections */}
      {additionalSections && (
        <div>
          {/* Languages */}
          {additionalSections.languages && additionalSections.languages.length > 0 && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Languages</h2>
              <ul>
                {additionalSections.languages.map((lang, index) => (
                  <li key={index}>
                    {lang.name} - {getLanguageLevelText(lang.level)}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Custom Sections */}
          {Object.keys(additionalSections.custom).length > 0 && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Custom</h2>
              {Object.entries(additionalSections.custom).map(([key, value], index) => (
                <div key={index}>
                  <p className="font-semibold">{key}:</p>
                  <p>{value}</p>
                </div>
              ))}
            </div>
          )}

          {/* Certifications */}
          {additionalSections.certifications && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Certifications</h2>
              <div dangerouslySetInnerHTML={{ __html: additionalSections.certifications }} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PatternG;
