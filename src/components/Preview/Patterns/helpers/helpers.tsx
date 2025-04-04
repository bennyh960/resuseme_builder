import { CSSProperties, ReactNode } from "react";
import { Language } from "../../../../hooks/useCustomContext";
import { SkillsObject } from "../../../Form/skills/Skills";
import { skillLevelMap } from "../../../Shared/SliderControlMap";
import StartGroup from "../../../UI/StartGroup";

export const GenerateSkills = ({
  language,
  color,
  level,
  type,
  className,
  style,
}: {
  type: SkillsObject["levelType"];
  level: number;
  color: string;
  language: Language;
  className?: string;
  style?: CSSProperties;
}) => {
  if (type === "stars") {
    return <StartGroup max={5} rate={level} color={color} />;
  } else if (type === "verbal") {
    return (
      <span style={{ ...style, color }} className={className}>
        {" "}
        {skillLevelMap[level as keyof typeof skillLevelMap][language]}
      </span>
    );
  }
};
