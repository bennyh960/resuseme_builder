import React from "react";
import useCustomContext from "../../../hooks/useCustomContext";
import { demoData } from "../../../data/fake";
import { labels } from "../../../data/labels";

const PatternA = () => {
  const { personalInfo, language } = useCustomContext();
  return (
    <div className={`resume-container p-6 max-w-4xl mx-auto ${language === "he" ? "text-right" : "text-left"}`}>
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">
          {personalInfo.firstName + " " + personalInfo.lastName || demoData.personalInfo.name[language]}
        </h1>
        <p className="text-xl">{demoData.personalInfo.title[language]}</p>
        <p className="text-sm text-gray-500">{demoData.personalInfo.email[language]}</p>
      </header>

      {/* Professional Summary */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">{labels.professionalSummary.professionalSummary[language]}</h2>
        <p>{demoData.professionalSummary.description[language]}</p>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">{labels.skills.skills[language]}</h2>
        <ul>
          {demoData.skills.skill[language].split(", ").map((skill, index) => (
            <li key={index} className="text-lg">
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* Work Experience */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">{labels.workExperience.workExperience[language]}</h2>
        {Object.keys(demoData.workExperience).map((key, index) => {
          if (key === "workExperience") return null; // Skip the parent label
          const experience = demoData.workExperience[key as "experience1"];
          return (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-bold">
                {experience.role[language]} - {experience.company[language]}
              </h3>
              <p className="text-sm text-gray-500">{experience.duration[language]}</p>
              <ul className="list-disc ml-5">
                {experience.responsibilities[language].map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">{labels.education.education[language]}</h2>
        <div>
          <h3 className="text-xl font-bold">
            {demoData.education.degree1.degree[language]} - {demoData.education.degree1.institution[language]}
          </h3>
          <p className="text-sm text-gray-500">{demoData.education.degree1.year[language]}</p>
        </div>
      </section>

      {/* Contact */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">{labels.contact.contact[language]}</h2>
        <p>
          {labels.contact.email[language]}: {demoData.contact.email[language]}
        </p>
        <p>
          {labels.contact.phone[language]}: {demoData.contact.phone[language]}
        </p>
      </section>
    </div>
  );
};

export default PatternA;
