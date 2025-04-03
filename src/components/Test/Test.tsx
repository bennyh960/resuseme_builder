import React, { ReactNode, useEffect, useRef, useState } from "react";
import Drawer from "../UI/drawer";
import { PatternA, PatternB, PatternC, PatternD, PatternE, PatternF, PatternG, PatternH } from "../Preview/Patterns";
import StarIcon from "../../assets/StarIcon";
import StartGroup from "../UI/StartGroup";

const Patterns = [
  <PatternA />,
  <PatternB />,
  <PatternC />,
  <PatternD />,
  <PatternE />,
  <PatternF />,
  <PatternG />,
  <PatternH />,
];

const Test = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      Test
      <SkillsSettingsModal />
    </div>
  );
};

export default Test;

function SkillsSettingsModal() {
  const [showExperienceLevel, setShowExperienceLevel] = useState(true);
  const [experienceType, setExperienceType] = useState("verbal");
  const [experienceColor, setExperienceColor] = useState("#3b82f6");

  return (
    <div className="w-full max-w-md bg-white rounded-lg border shadow-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <h2 className="text-lg font-semibold text-gray-800">Skills Settings</h2>
        <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">✕</button>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Show Experience Level Toggle */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Show Experience Level</span>
          <button
            className={`w-12 h-6 rounded-full flex items-center transition-colors ${
              showExperienceLevel ? "bg-blue-500 justify-end" : "bg-gray-300 justify-start"
            }`}
            onClick={() => setShowExperienceLevel(!showExperienceLevel)}
          >
            <span className="w-5 h-5 bg-white rounded-full m-0.5 shadow-sm"></span>
          </button>
        </div>

        {/* Experience Type - Only visible when showExperienceLevel is true */}
        {showExperienceLevel && (
          <div className="space-y-3">
            <span className="block text-sm font-medium text-gray-700">Experience Level Type</span>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    experienceType === "verbal" ? "border-blue-500" : "border-gray-300"
                  }`}
                  onClick={() => setExperienceType("verbal")}
                >
                  {experienceType === "verbal" && <div className="w-2 h-2 rounded-full bg-blue-500"></div>}
                </div>
                <span className="text-sm text-gray-600">Verbal (Beginner, Intermediate...)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    experienceType === "stars" ? "border-blue-500" : "border-gray-300"
                  }`}
                  onClick={() => setExperienceType("stars")}
                >
                  {experienceType === "stars" && <div className="w-2 h-2 rounded-full bg-blue-500"></div>}
                </div>
                <span className="text-sm text-gray-600">Rating Stars</span>
              </div>
            </div>
          </div>
        )}

        {/* Color Selection */}
        <div className="space-y-3">
          <span className="block text-sm font-medium text-gray-700">Experience Level Color</span>
          <div className="flex space-x-3">
            {["#ef4444", "#3b82f6", "#22c55e", "#f59e0b", "#8b5cf6"].map((color) => (
              <button
                key={color}
                className={`w-6 h-6 rounded-full transition-all ${
                  experienceColor === color ? "ring-2 ring-offset-2 ring-gray-400" : "hover:scale-110"
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setExperienceColor(color)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t flex gap-3">
        <button className="px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
          Reset to Default
        </button>
        <button className="px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
          Reset to Default
        </button>
      </div>
    </div>
  );
}
