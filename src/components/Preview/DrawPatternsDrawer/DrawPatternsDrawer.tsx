import React, { ReactNode } from "react";
import Drawer from "../../UI/drawer";

interface IDrawPatternsDrawer {
  Patterns: React.FC<{}>[];
  isOpen: boolean;
  onClose: () => void;
  onSelect: (index: number) => void;
  selectedPatternIndex: number;
}

const DrawPatternsDrawer = ({ Patterns, isOpen, onClose, onSelect, selectedPatternIndex }: IDrawPatternsDrawer) => {
  return (
    <Drawer position="bottom" isOpen={isOpen} onClose={onClose} title={<h1>Patterns</h1>}>
      <div className="flex gap-4 p-4">
        {Patterns.map((Pattern, index) => (
          <div
            key={index}
            className={`cursor-pointer w-65 h-92 flex outline-3 outline-offset-2 outline-double ${
              selectedPatternIndex === index ? "outline-blue-400" : "outline-transparent"
            } hover:outline-green-200 transition-all`}
            onClick={() => onSelect(index)}
          >
            <div className="resume-container-small border" style={{ transformOrigin: "top left" }}>
              {<Pattern />}
            </div>
          </div>
        ))}
      </div>
    </Drawer>
  );
};

export default DrawPatternsDrawer;
