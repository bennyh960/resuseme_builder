import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Language } from "../../hooks/useCustomContext";
import TrashIcon from "../../assets/TrashIcon";
import FormField from "../../UI/FormField/FormField";
import SliderControl from "../../UI/SlideControl/SlideControl";

export const LangLevelMap = {
  1: { he: "לא רלוונטי", en: "Not applicable" },
  2: { he: "מתחיל", en: "Novice" },
  3: { he: "מקצועי", en: "Proficient" },
  4: { he: "מצוין", en: "Highly proficient" },
  5: { he: "שפת אם", en: "Native" },
};

export const skillLevelMap = {
  1: { he: "טירון", en: "Novice" },
  2: { he: "מתחיל", en: "Beginner" },
  3: { he: "מיומן", en: "Skilful" },
  4: { he: "מנוסה", en: "Experienced" },
  5: { he: "מומחה", en: "Expert" },
};

type elementType = { level: number; name: string };

function SliderControlMap({
  value,
  onDelete,
  onNameChange,
  onLevelChange,
  index,
  language,
  type,
}: {
  language: Language;
  value: elementType;
  onDelete: (element: elementType) => void;
  onNameChange: (idx: number, value: string) => void;
  onLevelChange: (idx: number, value: number) => void;
  index: number;
  type: "language" | "skills";
}) {
  const [localValueName, setLocalValueName] = useState(value.name);

  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLocalValueName(e.target.value);
    },
    [setLocalValueName]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      onNameChange(index, localValueName);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [localValueName, index]);

  const mapper = useMemo(() => {
    if (type === "language") return LangLevelMap;
    else return skillLevelMap;
  }, [type]);

  return (
    <div className="flex flex-col my-2">
      <div className="flex w-full gap-5 justify-between items-center">
        <div className="flex gap-3 basis-[calc(80%-14px)] mt-10">
          <button
            onClick={() => onDelete(value)}
            className="mr-3 flex items-center gap-2 text-blue-400 cursor-pointer hover:text-blue-800 font-medium transition-all duration-200"
          >
            <TrashIcon />
          </button>
          <div className="w-full">
            <FormField showIcon={false} label={""} id={value.name} value={localValueName} onChange={handleNameChange} />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="w-full flex ">
            <span>Level</span>
            <span>-</span>
            <span className="app-btn">{mapper[value.level as keyof typeof mapper][language]}</span>
          </div>
          <SliderControl
            value={value.level}
            onChange={(position) => {
              onLevelChange(index, position);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default memo(SliderControlMap);
