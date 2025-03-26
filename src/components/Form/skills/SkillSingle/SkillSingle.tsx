import TrashIcon from "../../../../assets/TrashIcon";
import { SkillType } from "../Skills";
import SliderControl from "../../../../UI/SlideControl/SlideControl";
import FormField from "../../../../UI/FormField/FormField";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Language } from "../../../../hooks/useCustomContext";

const SkillSingle = ({
  skill,
  onDelete,
  onNameChange,
  onLevelChange,
  index,
  language,
}: {
  language: Language;
  skill: SkillType;
  onDelete: (skill: SkillType) => void;
  onNameChange: (idx: number, value: string) => void;
  onLevelChange: (idx: number, value: number) => void;
  index: number;
}) => {
  const [localSkillName, setLocalSkillName] = useState(skill.name);

  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLocalSkillName(e.target.value);
    },
    [setLocalSkillName]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      onNameChange(index, localSkillName);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [localSkillName, index]);

  const levelMap = useMemo(() => {
    return {
      1: { he: "טירון", en: "Novice" },
      2: { he: "מתחיל", en: "Beginner" },
      3: { he: "מיומן", en: "Skilful" },
      4: { he: "מנוסה", en: "Experienced" },
      5: { he: "מומחה", en: "Expert" },
    };
  }, []);

  return (
    <div className="flex flex-col my-2">
      <div className="flex w-full gap-5 justify-between items-center">
        <div className="flex gap-3 basis-[calc(80%-14px)] mt-10">
          <button
            onClick={() => onDelete(skill)}
            className="mr-3 flex items-center gap-2 text-blue-400 cursor-pointer hover:text-blue-800 font-medium transition-all duration-200"
          >
            <TrashIcon />
          </button>
          <div className="w-full">
            <FormField showIcon={false} label={""} id={skill.name} value={localSkillName} onChange={handleNameChange} />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="w-full flex ">
            <span>Level</span>
            <span>-</span>
            <span className="app-btn">{levelMap[skill.level as keyof typeof levelMap][language]}</span>
          </div>
          <SliderControl
            value={skill.level}
            onChange={(position) => {
              onLevelChange(index, position);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(SkillSingle);
