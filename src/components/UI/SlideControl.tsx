import React, { useState, useEffect, useMemo } from "react";
import clsx from "clsx";

interface SliderControlProps {
  onChange: (position: number) => void;
  value: number;
}

const SliderControl: React.FC<SliderControlProps> = ({ onChange, value }) => {
  // Directly use the passed value instead of local state for position
  const calculateLeft = (pos: number) => 5 + (pos - 1) * 50;

  const colorMap = {
    1: "red",
    2: "orange",
    3: "yellow",
    4: "blue",
    5: "green",
  };

  const handlePosition = (pos: number) => {
    onChange(pos);
  };

  const color = colorMap[value as keyof typeof colorMap] || "blue";

  // Predefined color classes to ensure Tailwind generates them
  const colorClasses = useMemo(() => {
    return {
      red: {
        bg: "bg-red-100",
        border: "border-red-300",
        bgHover: "hover:bg-red-200",
        bgSlider: "bg-red-500",
      },
      orange: {
        bg: "bg-orange-100",
        border: "border-orange-300",
        bgHover: "hover:bg-orange-200",
        bgSlider: "bg-orange-500",
      },
      yellow: {
        bg: "bg-yellow-100",
        border: "border-yellow-300",
        bgHover: "hover:bg-yellow-200",
        bgSlider: "bg-yellow-500",
      },
      blue: {
        bg: "bg-blue-100",
        border: "border-blue-300",
        bgHover: "hover:bg-blue-200",
        bgSlider: "bg-blue-500",
      },
      green: {
        bg: "bg-green-100",
        border: "border-green-300",
        bgHover: "hover:bg-green-200",
        bgSlider: "bg-green-500",
      },
    };
  }, []);

  const currentColorClasses = colorClasses[color];

  return (
    <div
      className={clsx(
        "relative flex w-[255px] h-12 rounded-lg border",
        currentColorClasses.bg,
        currentColorClasses.border
      )}
    >
      <div
        className={clsx(
          "absolute top-1/2 -translate-y-1/2 left-0 w-[40px] h-8 rounded-md shadow-md transition-all duration-300 ease-in-out",
          currentColorClasses.bgSlider
        )}
        style={{ left: `${calculateLeft(value)}px` }}
      ></div>
      {[1, 2, 3, 4, 5].map((pos) => (
        <div
          key={pos}
          onClick={() => handlePosition(pos)}
          className={clsx(
            "flex justify-center items-center text-sm font-medium cursor-pointer my-1 w-[50px] hover:bg-opacity-50 transition duration-200",
            `border-l ${currentColorClasses.border} first:border-l-0`,
            currentColorClasses.bgHover
          )}
        >
          {pos}
        </div>
      ))}
    </div>
  );
};

export default SliderControl;
