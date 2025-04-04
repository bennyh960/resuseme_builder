import React, { ReactNode, useState } from "react";
import Drawer from "../../UI/drawer";
import Button from "../../UI/Button";
import SettingsIcon from "../../../assets/SettingsIcon";

interface IDrawPatternsDrawer {
  Patterns: React.FC<{}>[];
  isOpen: boolean;
  onClose: () => void;
  onSelect: (index: number) => void;
  selectedPatternIndex: number;
}

const DrawPatternsDrawer = ({ Patterns, isOpen, onClose, onSelect, selectedPatternIndex }: IDrawPatternsDrawer) => {
  const [showA4Limit, setShowA4Limit] = useState(true);

  const drawTitle = () => {
    return (
      <div className="flex w-full items-center gap-10">
        <h1>Patterns</h1>
        <Button size="sm" variant="outline" onClick={() => setShowA4Limit((p) => !p)}>
          Show A4 Limit
        </Button>
        <Button size="sm" variant="secondary" className="flex items-center gap-2">
          {<SettingsIcon size="18" />}
          Spacing options
        </Button>
        <Button size="sm" variant="secondary" className="flex items-center gap-2">
          {<SettingsIcon size="18" />}
          Fonts Colors
        </Button>
        <Button size="sm" variant="secondary" className="flex items-center gap-2">
          {<SettingsIcon size="18" />}
          Fonts Sizing
        </Button>
      </div>
    );
  };

  return (
    <Drawer position="bottom" isOpen={isOpen} onClose={onClose} title={drawTitle()}>
      <div className="flex gap-4 p-4">
        {Patterns.map((Pattern, index) => (
          <div
            key={index}
            className={`cursor-pointer w-65 h-92 flex outline-3 outline-offset-2 outline-double ${
              showA4Limit
                ? "outline-black"
                : selectedPatternIndex === index
                ? "outline-blue-400"
                : "outline-transparent"
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
