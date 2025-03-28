import React, { useEffect, useRef, useState } from "react";

// import PatternB from "./Patterns/PatternB";

import PatternA from "./Patterns/PatternA";

import PatternB from "./Patterns/PatternB";
import PatternC from "./Patterns/PatternC";
import useLocalStorage from "../../hooks/useLocalStorage";
import PatternD from "./Patterns/PatternD";

import useCustomContext from "../../hooks/useCustomContext";

const patterns = [<PatternA />, <PatternB />, <PatternC />, <PatternD />];
const Preview = () => {
  return (
    <div className="flex justify-center items-start p-6 max-h-[330mm] w-full">
      <div className="m-auto p-6 resume-container border">
        <PatternA />

        {/* <PatternB /> */}

        {/* <PatternC /> */}

        {/* <PatternD /> */}
      </div>
    </div>
  );
};

export default Preview;
