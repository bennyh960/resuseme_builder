import React, { ReactNode, useEffect, useRef, useState } from "react";
import Drawer from "../UI/drawer";
import { PatternA, PatternB, PatternC, PatternD, PatternE, PatternF, PatternG, PatternH } from "../Preview/Patterns";
import StarIcon from "../../assets/StarIcon";
import StartGroup from "../UI/StartGroup";

const Patterns = [
  <PatternA />,
  <PatternB />,
  <PatternC />,
  <PatternD />,
  <PatternE />,
  <PatternF />,
  <PatternG />,
  <PatternH />,
];

const Test = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      Test
      <button onClick={() => setIsOpen(true)}>Open Drawer</button>
      <StartGroup max={5} rate={3} />
    </div>
  );
};

export default Test;
