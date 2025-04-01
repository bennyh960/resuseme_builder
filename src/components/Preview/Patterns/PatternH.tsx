import EmailIcon from "../../../assets/emailIcon";
import GlobeIcon from "../../../assets/GlobeIcon";
import LocationIcon from "../../../assets/LocationIcon";
import PhoneIcon from "../../../assets/PhoneIcon";
import useCustomContext from "../../../hooks/useCustomContext";
import { LangLevelMap, skillLevelMap } from "../../Shared/SliderControlMap";

const PatternI: React.FC = () => {
  const { personalInfo, skills, additionalSections, educations, experiences, summary, language } = useCustomContext();
  const getSkillLevelText = (level: number) => skillLevelMap[level][language];
  const getLanguageLevelText = (level: number) => LangLevelMap[level][language];

  return (
    <div className="flex flex-col bg-white font-sans text-gray-800">
      {/* Header Section */}
      <header className="pb-4 border-b-2 border-gray-300">
        <h1 className="text-3xl font-bold text-gray-800">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <h2 className="text-xl text-blue-600 font-medium mt-1">{personalInfo.jobTitle}</h2>

        {/* Contact Information */}
        <div className="mt-3 flex flex-wrap gap-x-6 text-sm justify-between">
          {personalInfo.email && (
            <div className="flex items-center gap-1">
              <EmailIcon />
              <span>{personalInfo.email}</span>
            </div>
          )}

          {personalInfo.phone && (
            <div className="flex items-center gap-1">
              <PhoneIcon />
              <span>{personalInfo.phone}</span>
            </div>
          )}

          {(personalInfo.city || personalInfo.country) && (
            <div className="flex items-center gap-1">
              <LocationIcon />
              <span>
                {personalInfo.city && personalInfo.country
                  ? `${personalInfo.city}, ${personalInfo.country}`
                  : personalInfo.city || personalInfo.country}
              </span>
            </div>
          )}

          {personalInfo.linkedin?.url && (
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <a href={personalInfo.linkedin.url} target="_blank" rel="noopener noreferrer">
                {personalInfo.linkedin.text || "LinkedIn"}
              </a>
            </div>
          )}

          {personalInfo.website?.url && (
            <div className="flex items-center gap-1">
              <GlobeIcon />
              <a href={personalInfo.website.url} target="_blank" rel="noopener noreferrer">
                {personalInfo.website.text || "Website"}
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Professional Summary */}
      {summary && (
        <section className="mt-4">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-2">Professional Summary</h2>
          <div dangerouslySetInnerHTML={{ __html: summary }} className="text-gray-700" />
        </section>
      )}

      {/* Experience Section */}
      {experiences.length > 0 && (
        <section className="mt-4">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-2">
            Professional Experience
          </h2>
          <div className="space-y-4">
            {experiences.map((exp) => (
              <div key={exp.id} className="flex flex-col">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-gray-800">{exp.jobTitle}</h3>
                  <span className="text-sm text-gray-600">
                    {exp.startDate} - {exp.endDate ? exp.endDate : "Present"}
                  </span>
                </div>
                <div className="flex justify-between items-baseline">
                  <h4 className="text-blue-600">
                    {exp.employer}
                    {exp.location ? `, ${exp.location}` : ""}
                  </h4>
                </div>
                <div dangerouslySetInnerHTML={{ __html: exp.workSummary }} className="mt-1 text-gray-700" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education Section */}
      {educations.some((edu) => edu.schoolName) && (
        <section className="mt-4">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-2">Education</h2>
          <div className="space-y-4">
            {educations
              .filter((edu) => edu.schoolName)
              .map((edu) => (
                <div key={edu.id} className="flex flex-col">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-semibold text-gray-800">{edu.schoolName}</h3>
                    {(edu.startDate || edu.endDate) && (
                      <span className="text-sm text-gray-600">
                        {edu.startDate ? edu.startDate : ""}
                        {edu.startDate && edu.endDate ? " - " : ""}
                        {edu.endDate ? edu.endDate : edu.startDate ? "Present" : ""}
                      </span>
                    )}
                  </div>
                  {(edu.degree || edu.fieldOfStudy) && (
                    <h4 className="text-blue-600">
                      {edu.degree}
                      {edu.degree && edu.fieldOfStudy ? " in " : ""}
                      {edu.fieldOfStudy}
                      {edu.schoolLocation ? `, ${edu.schoolLocation}` : ""}
                    </h4>
                  )}
                  {edu.description && (
                    <div dangerouslySetInnerHTML={{ __html: edu.description }} className="mt-1 text-gray-700" />
                  )}
                </div>
              ))}
          </div>
        </section>
      )}

      {/* Skills Section */}
      {skills.data.length > 0 && (
        <section className="mt-4">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-2">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
            {skills.data.map((skill, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-700">{skill.name}</span>
                {skills.showLevel && <span className="text-sm text-blue-600">{getSkillLevelText(skill.level)}</span>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Languages Section */}
      {additionalSections.languages.length > 0 && (
        <section className="mt-4">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-2">Languages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
            {additionalSections.languages.map((lang, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-700">{lang.name}</span>
                <span className="text-sm text-blue-600">{getLanguageLevelText(lang.level)}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications Section */}
      {additionalSections.certifications && (
        <section className="mt-4">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-2">Certifications</h2>
          <div dangerouslySetInnerHTML={{ __html: additionalSections.certifications }} className="text-gray-700" />
        </section>
      )}

      {/* Custom Sections */}
      {additionalSections.custom && additionalSections.custom.length > 0 && (
        <section className="mt-4">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-2">Additional Information</h2>
          <div className="space-y-2">
            {additionalSections.custom.map((item, index) => (
              <div key={index} className="flex flex-col">
                {Object.entries(item).map(([key, value]) => (
                  <div key={key} className="flex">
                    <span className="font-medium text-gray-700 min-w-32">{key}:</span>
                    <span className="text-gray-700 ml-2">{value}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default PatternI;
