const optioanlFields = {
  educations: ["description"],
  personalInfo: ["city", "country", "linkedin", "website"],
  additionalSection: {
    custom: "*",
    certifications: "*",
  },
};

const educations = [
  {
    id: "-demo",
    schoolName: "Bar Ilandsa",
    schoolLocation: "Ramat Gan",
    degree: "B.Sc",
    fieldOfStudy: "Computer Science",
    startDate: "2020-03",
    endDate: "2023-04",
    description: "Master of Indigo league , using Dragonite and Tyrnitar as beasts.",
  },
  {
    id: "1743023098560",
    schoolName: "Bar Ilan",
    schoolLocation: "",
    fieldOfStudy: "Computer Science",
    startDate: "",
    endDate: "",
    degree: "",
    description: "",
  },
];

const experiences = [
  {
    id: "-demo",
    jobTitle: "Pokemon Master2",
    employer: "Indigo",
    location: "Viridian City",
    startDate: "2023-03",
    endDate: "2025-05",
    workSummary: "<p>Master of <strong>Indigo</strong> league , using Dragonite and Tyrnitar as beasts.</p>",
  },
];

const personalInfo = {
  firstName: "Benny",
  lastName: "Hassan",
  jobTitle: "Full Stack Developer",
  phone: "0524874600",
  email: "bennyh960@gmail.com",
  city: "",
  country: "",
  linkedin: "",
  website: "www.abc.com",
};

const skills = {
  data: [
    { level: 3, name: "Full-Stack Development" },
    { level: 3, name: "Software Development in Node.js" },
    { level: 3, name: "Working with PostgreSQL Databases" },
    { level: 3, name: "Front-End Technologies (React, JavaScript)" },
  ],
  showLevel: true,
};

const summary =
  "Tool owner of production machines, responsible for tool performance, data, writing work plans, troubleshooting, validation, quality performance and project management.";

const additionalSection = {
  languages: [
    { name: "Hebrew", level: 3 },
    { name: "english", level: 2 },
  ],
  custom: [{ something: "the value of it" }], // optional
  certifications: "some ceritifaction",
};
