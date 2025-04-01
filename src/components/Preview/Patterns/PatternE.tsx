import useCustomContext from "../../../hooks/useCustomContext";
import { LangLevelMap, skillLevelMap } from "../../Shared/SliderControlMap";

const PatternE: React.FC = () => {
  const { personalInfo, skills, additionalSections, educations, experiences, summary, language } = useCustomContext();
  const getSkillLevelText = (level: number) => skillLevelMap[level][language];
  const getLanguageLevelText = (level: number) => LangLevelMap[level][language];

  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold">{`${personalInfo.firstName} ${personalInfo.lastName}`}</h1>
        <p className="text-xl italic">{personalInfo.jobTitle}</p>
        <div className="mt-2 space-y-1">
          {personalInfo.phone && <p>{personalInfo.phone}</p>}
          {personalInfo.email && <p>{personalInfo.email}</p>}
          {personalInfo.city && personalInfo.country && <p>{`${personalInfo.city}, ${personalInfo.country}`}</p>}
          {personalInfo.linkedin?.url && (
            <p>
              <a href={personalInfo.linkedin.url} className="text-blue-600 underline">
                {personalInfo.linkedin.text || "LinkedIn"}
              </a>
            </p>
          )}
          {personalInfo.website?.url && (
            <p>
              <a href={personalInfo.website.url} className="text-blue-600 underline">
                {personalInfo.website.text || "Website"}
              </a>
            </p>
          )}
        </div>
      </div>

      {/* Summary Section */}
      {summary && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Summary</h2>
          <div dangerouslySetInnerHTML={{ __html: summary }}></div>
        </div>
      )}

      {/* Experience Section */}
      {experiences.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Experience</h2>
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-4">
              <h3 className="text-xl font-bold">{exp.jobTitle}</h3>
              <p className="italic text-sm">
                {exp.employer} - {exp.location}
              </p>
              <p className="text-sm mb-2">
                {exp.startDate} - {exp.endDate}
              </p>
              <div dangerouslySetInnerHTML={{ __html: exp.workSummary }}></div>
            </div>
          ))}
        </div>
      )}

      {/* Education Section */}
      {educations.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Education</h2>
          {educations.map((edu) => (
            <div key={edu.id} className="mb-4">
              <h3 className="text-xl font-bold">{edu.schoolName}</h3>
              <p className="italic text-sm">{edu.schoolLocation}</p>
              <p className="text-sm mb-2">
                {edu.degree} {edu.fieldOfStudy}
              </p>
              {edu.startDate && edu.endDate && (
                <p className="text-sm mb-2">
                  {edu.startDate} - {edu.endDate}
                </p>
              )}
              {edu.description && <div dangerouslySetInnerHTML={{ __html: edu.description }}></div>}
            </div>
          ))}
        </div>
      )}

      {/* Skills Section */}
      {skills.data.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Skills</h2>
          <ul className="list-disc pl-5">
            {skills.data.map((skill) => (
              <li key={skill.name}>
                {skill.name}{" "}
                {skills.showLevel && <span className="italic text-sm">({getSkillLevelText(skill.level)})</span>}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Additional Sections */}
      <div className="mb-6">
        {additionalSections.languages.length > 0 && (
          <div className="mb-4">
            <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Languages</h2>
            <ul className="list-disc pl-5">
              {additionalSections.languages.map((lang) => (
                <li key={lang.name}>
                  {lang.name} <span className="italic text-sm">({getLanguageLevelText(lang.level)})</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {additionalSections.certifications && (
          <div className="mb-4">
            <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Certifications</h2>
            <div dangerouslySetInnerHTML={{ __html: additionalSections.certifications }}></div>
          </div>
        )}

        {additionalSections.custom.length > 0 && (
          <div className="mb-4">
            <h2 className="text-2xl font-semibold border-b pb-1 mb-2">Custom Section</h2>
            <ul className="list-disc pl-5">
              {additionalSections.custom.map((item, index) => (
                <li key={index}>
                  {Object.keys(item)[0]}: {Object.values(item)[0]}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatternE;
