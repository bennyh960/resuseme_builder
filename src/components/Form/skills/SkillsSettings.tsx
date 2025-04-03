import React, { useState } from "react";
import Modal from "../../UI/Modal";
import SettingsIcon from "../../../assets/SettingsIcon";
import ToggleButton from "../../UI/ToggleBtn";
import RadioBtn from "../../UI/RadioBtn";
import useCustomContext from "../../../hooks/useCustomContext";
import { initialSkills, SkillsObject } from "./Skills";

const dict = {
  title: { he: "אפשרויות נוספות", en: "Skills - More options" },
  showExpLvl: { en: "Show experience level", he: "הראה רמה" },
  hideExpLvl: { en: "Hide experience level", he: "הסתר רמה" },
  experienceLvlType: { en: "Experience level type", he: "סוג סימון רמת ניסיון" },
  experienceLvlType1: { en: "Verbal (Beginner, Intermediate...)", he: "מילולי (מתחיל, בינוני...)" },
  experienceLvlType2: { en: "Rating stars", he: "כוכבים" },
  experienceLvlColor: { en: "Experience level color", he: "צבע גופן (רמה)" },
};

const SkillsSettings = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { skills, setSkills, language } = useCustomContext();

  const toggleShowLvl = () => {
    setSkills((prev) => ({ ...prev, showLevel: !prev.showLevel }));
  };
  const selectSkillLvlType = (type: SkillsObject["levelType"]) => {
    setSkills((prev) => ({ ...prev, levelType: type }));
  };
  const selectSkillLvlColor = (color: string) => {
    setSkills((prev) => ({ ...prev, levelColor: color }));
  };

  const handleReset = () => {
    setSkills((prev) => {
      return { ...initialSkills, data: prev.data };
    });
  };

  return (
    <Modal
      language={language}
      isOpen={isOpen}
      onClose={onClose}
      draggable
      buttons={[{ children: "Restore", variant: "light", onClick: handleReset }]}
      title={
        <div className="flex gap-3 items-center">
          <span>
            <SettingsIcon />
          </span>
          <span>{dict.title[language]}</span>
        </div>
      }
    >
      <>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">
            {dict[skills.showLevel ? "showExpLvl" : "hideExpLvl"][language]}
          </span>
          <ToggleButton checked={skills.showLevel} onChange={toggleShowLvl} />
        </div>
        <div
          className={`space-y-3 transition-all duration-300 ease-in ${
            skills.showLevel ? "h-fit" : "h-0 overflow-hidden"
          }`}
        >
          {/* Experience Type - Only visible when showExperienceLevel is true */}
          <div className={`space-y-3`}>
            <span className="block text-sm font-medium text-gray-700">{dict.experienceLvlType[language]}</span>
            <div className="space-y-2">
              <RadioBtn
                onClick={() => {
                  selectSkillLvlType("verbal");
                }}
                active={skills.levelType === "verbal"}
                label={dict.experienceLvlType1[language]}
              />
              <RadioBtn
                onClick={() => {
                  selectSkillLvlType("stars");
                }}
                active={skills.levelType === "stars"}
                label={dict.experienceLvlType2[language]}
              />
            </div>
          </div>

          {/* Color Selection */}

          <div className="space-y-3">
            <span className="block font-medium text-gray-600">{dict.experienceLvlColor[language]}</span>
            <div className="flex gap-3 items-center">
              <label htmlFor="colorPicker" className="text-sm text-gray-600">
                Custom:
              </label>
              <input
                type="color"
                id="colorPicker"
                name="colorPicker"
                className="w-8 h-8 cursor-pointer border-2 border-gray-300"
                onChange={(e) => selectSkillLvlColor(e.target.value)}
                value={skills.levelColor}
              />
            </div>
            <div className="flex gap-3 text-sm text-gray-600">
              <span>Suggested:</span>

              <div className="flex space-x-3">
                {["#ef4444", "#3b82f6", "#22c55e", "#f59e0b", "#8b5cf6", "#333", "#ccc", "#71717A"].map((color) => (
                  <button
                    key={color}
                    className={`w-6 h-6 rounded-full transition-all ${
                      skills.levelColor === color ? "ring-2 ring-offset-2 ring-gray-400" : "hover:scale-110"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => selectSkillLvlColor(color)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    </Modal>
  );
};

export default SkillsSettings;
