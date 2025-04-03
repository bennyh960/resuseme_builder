import React, { ReactNode } from "react";
import Drawer from "../../UI/drawer";

interface IDrawPatternsDrawer {
  Patterns: React.FC<{}>[];
  isOpen: boolean;
  onClose: () => void;
  onSelect: (index: number) => void;
}

const DrawPatternsDrawer = ({ Patterns, isOpen, onClose, onSelect }: IDrawPatternsDrawer) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} title={<h1>Patterns</h1>}>
      <div className="flex flex-col gap-4 p-4">
        {Patterns.map((Pattern, index) => (
          <div key={index} className="w-65 h-145 flex" onClick={() => onSelect(index)}>
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
