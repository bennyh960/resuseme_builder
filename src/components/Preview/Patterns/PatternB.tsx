import React from "react";
import useCustomContext from "../../../hooks/useCustomContext";

const PatternB = () => {
  const { personalInfo } = useCustomContext();
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* <!-- Header --> */}
      <div className="flex items-center mb-6">
        <div className="w-1/3">
          <h1 className="text-4xl font-bold text-gray-900">
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
          <p className="text-xl text-gray-600">{personalInfo.jobTitle}</p>
        </div>
        <div className="w-2/3 text-right">
          <p className="text-sm text-gray-500">Phone: {personalInfo.phone}</p>
          <p className="text-sm text-gray-500">Email: {personalInfo.email}</p>
          {(personalInfo.city || personalInfo.country) && (
            <p className="text-sm text-gray-500">
              Location: {personalInfo.city}
              {personalInfo.city && personalInfo.country ? "," : ""} {personalInfo.country}{" "}
            </p>
          )}
        </div>
      </div>

      {/* <!-- Professional Summary --> */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Professional Summary</h2>
        <p className="text-gray-700">
          Highly skilled web developer with over 5 years of experience in creating dynamic websites and web
          applications. Passionate about writing clean, maintainable code and delivering great user experiences. Adept
          at working with modern JavaScript frameworks and committed to continuously learning and improving.
        </p>
      </section>

      {/* <!-- Skills --> */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Skills</h2>
        <div className="flex flex-wrap gap-4">
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm">HTML</span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm">CSS</span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm">JavaScript</span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm">React</span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm">Node.js</span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm">TypeScript</span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm">Git</span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm">Tailwind CSS</span>
        </div>
      </section>

      {/* <!-- Work Experience --> */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Work Experience</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-gray-900">Senior Web Developer</h3>
            <p className="text-gray-600">Company Name | 2021 - Present</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Developed and maintained web applications using React, Node.js, and MongoDB.</li>
              <li>Collaborated with cross-functional teams to ensure project timelines were met.</li>
              <li>Improved website performance by optimizing front-end code and implementing best practices.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Frontend Developer</h3>
            <p className="text-gray-600">Company Name | 2018 - 2021</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Designed and developed responsive websites using HTML, CSS, and JavaScript.</li>
              <li>Created reusable components and streamlined UI development process using React.js.</li>
              <li>Collaborated with the design team to implement modern UI/UX principles into websites.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* <!-- Education --> */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Education</h2>
        <div>
          <h3 className="font-bold text-gray-900">Bachelor of Science in Computer Science</h3>
          <p className="text-gray-600">University Name | 2014 - 2018</p>
        </div>
      </section>

      {/* <!-- Contact Info --> */}
      <section className="mt-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Contact Me</h2>
        <p className="text-gray-600">
          Feel free to reach out via email or phone for job opportunities or collaborations.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="mailto:johndoe@email.com" className="text-blue-500 hover:text-blue-700">
            Email
          </a>
          <a href="tel:+15551234567" className="text-blue-500 hover:text-blue-700">
            Phone
          </a>
        </div>
      </section>
    </div>
  );
};

export default PatternB;
