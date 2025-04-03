import React from "react";
import SettingsIcon from "../../assets/SettingsIcon";

const Title = ({
  title,
  description,
  onSettingClick,
}: {
  title: string;
  description: string;
  onSettingClick?: () => void;
}) => {
  return (
    <div className="mb-8 flex w-full justify-between">
      <div>
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-gray-800 dark:text-gray-100">{title}</h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">{description}</p>
      </div>
      {onSettingClick && (
        <div onClick={onSettingClick}>
          <SettingsIcon />
        </div>
      )}
    </div>
  );
};

export default Title;
