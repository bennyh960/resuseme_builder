import React from "react";
import StarIcon from "../../assets/StarIcon";

const StartGroup = ({ rate, max, color = "black" }: { color?: string; rate: number; max: number }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }).map((_, index) => {
        return <StarIcon fill={index + 1 <= rate ? color : "none"} key={index} />;
      })}
    </div>
  );
};

export default StartGroup;
