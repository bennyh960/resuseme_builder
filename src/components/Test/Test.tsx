import React, { useState } from "react";
import SliderControl from "../../UI/SlideControl/SlideControl";

const Test = () => {
  return (
    <div>
      {/* <RadioGroupDemo /> */}

      <h1>ToggleButton</h1>
      <div>
        <ToggleButton />
      </div>
    </div>
  );
};

export default Test;

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => setIsToggled(!isToggled);

  return (
    <button
      onClick={handleToggle}
      className={`relative w-12 h-6 flex items-center rounded-full p-1 transition duration-300 cursor-pointer ${
        isToggled ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <span
        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition duration-300 ${
          isToggled ? "translate-x-6" : "translate-x-0"
        }`}
      ></span>
    </button>
  );
};
