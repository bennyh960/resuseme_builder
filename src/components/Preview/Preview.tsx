import { useRef, useState } from "react";

import * as Patterns from "./Patterns";

import Button from "../UI/Button";
import { handleDownloadPDF } from "../../lib/utils";
import DrawPatternsDrawer from "./DrawPatternsDrawer/DrawPatternsDrawer";
import useCustomContext from "../../hooks/useCustomContext";

// import { patenPrompt } from "../../data/fake";
// console.log(patenPrompt);

const PatternsArray = [
  Patterns.PatternA,
  Patterns.PatternB,
  Patterns.PatternC,
  Patterns.PatternD,
  Patterns.PatternE,
  Patterns.PatternF,
  Patterns.PatternG,
  Patterns.PatternH,
];

const Preview = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const { selectedPatternIndex, setSelectedPatternIndex } = useCustomContext();
  const Component = PatternsArray[selectedPatternIndex || 0];

  const handleSelectedNewPattern = (index: number) => {
    setSelectedPatternIndex(index);
  };

  return (
    <div className="flex justify-center items-start px-6 py-7 max-h-[330mm] w-full">
      <div ref={elementRef} className="resume-container shadow">
        {<Component />}
      </div>
      <div className="flex text-xs flex-col gap-10 fixed z-10 top-4 right-5">
        <Button className="w-18 px-1" variant="primary" size="sm" onClick={() => setIsOpenDrawer((p) => !p)}>
          Show More
        </Button>
        <Button className="w-18 px-1" variant="success" size="sm" onClick={() => handleDownloadPDF(elementRef.current)}>
          Download PDF
        </Button>
      </div>

      <DrawPatternsDrawer
        isOpen={isOpenDrawer}
        onClose={() => setIsOpenDrawer(false)}
        Patterns={PatternsArray}
        onSelect={handleSelectedNewPattern}
        selectedPatternIndex={selectedPatternIndex}
      />
    </div>
  );
};

export default Preview;
