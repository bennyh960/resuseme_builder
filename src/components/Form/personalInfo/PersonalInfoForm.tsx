import { useState } from "react";
import FormField from "../../../UI/FormField/FormField";
import useCustomContext from "../../../hooks/useCustomContext";
import { labels } from "../../../data/labels";
import PlusIcon from "../../../assets/plusIcon";
import { Chevron } from "../../../assets/cheveron";
import Title from "../../Shared/Title";

export type PersonalInfoType = {
  firstName: string;
  lastName: string;
  jobTitle: string;
  phone: string;
  email: string;
  city: string;
  country: string;
  linkedin: string;
  website: string;
};

export const personalInfoInit = {
  firstName: "",
  lastName: "",
  jobTitle: "",
  phone: "",
  email: "",
  city: "",
  country: "",
  linkedin: "",
  website: "",
};

const dict = {
  title: { he: "פרטים אישיים", en: "Contact" },
  description: {
    he: "פרטי יצירת קשר בקורות החיים הינם חשובים על מנת שהמעסיק יצור עמכם קשר",
    en: "Including your contacts in your resume is crucial so potential employers can easily get in touch with you.",
  },
};

const PersonalInfoForm = () => {
  const { personalInfo, setPersonalInfo, language } = useCustomContext();

  const [isAdditionalVisible, setIsAdditionalVisible] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const toggleAdditional = () => {
    setIsAdditionalVisible((p) => !p);
  };

  const isValidUrl = (url: string) => {
    const regex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(:[0-9]{1,5})?(\/[\w-.~:/?#[\]@!$&'()*+,;=]*)?$/i;
    return regex.test(url);
  };

  return (
    <div className="w-full h-full">
      <Title title={dict.title[language]} description={dict.description[language]} />

      <div className="flex flex-col gap-8">
        <div className="flex gap-12 justify-between">
          <FormField
            placeholder="Benny"
            id="firstName"
            label={labels.personalInfo.firstName[language]}
            value={personalInfo.firstName}
            onChange={handleChange}
          />
          <FormField
            placeholder="Hassan"
            id="lastName"
            label={labels.personalInfo.lastName[language]}
            value={personalInfo.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="flex-1/2">
          <FormField
            placeholder="Full Stack Developer"
            id="jobTitle"
            label={labels.personalInfo.jobTitle[language]}
            value={personalInfo.jobTitle}
            onChange={handleChange}
          />
        </div>

        <div className="flex gap-12 justify-between">
          <FormField
            placeholder="05x-1234567"
            id="phone"
            value={personalInfo.phone}
            onChange={handleChange}
            label="Phone"
          />
          <FormField
            placeholder="email@domain.com"
            id="email"
            value={personalInfo.email}
            onChange={handleChange}
            label="Email"
          />
        </div>

        <div className="flex gap-3 app-btn" onClick={toggleAdditional}>
          <span>
            {
              <Chevron
                className={`transform transition-transform duration-300 ${
                  isAdditionalVisible ? "rotate-180" : "rotate-0"
                }`}
              />
            }
          </span>
          <span>Additional Section</span>
        </div>
      </div>
      <div
        className={`flex flex-col gap-8 overflow-hidden transition-all duration-500 ease-in-out ${
          isAdditionalVisible ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex gap-12 justify-between">
          <FormField placeholder="Tel Aviv" id="city" value={personalInfo.city} onChange={handleChange} label="City" />
          <FormField
            placeholder="Israel"
            id="country"
            value={personalInfo.country}
            onChange={handleChange}
            label="Country"
          />
        </div>

        <FormField
          placeholder="linkedin"
          id="linkedin"
          value={personalInfo.linkedin}
          onChange={handleChange}
          label="Linkedin"
          isValid={isValidUrl(personalInfo.linkedin) && personalInfo.linkedin.includes("linkedin")}
        />
        <FormField
          placeholder="URL"
          id="website"
          value={personalInfo.website}
          onChange={handleChange}
          label="Personal Website"
          isValid={isValidUrl(personalInfo.website)}
        />
      </div>
    </div>
  );
};

export default PersonalInfoForm;
