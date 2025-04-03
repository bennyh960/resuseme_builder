import { useRef, useState } from "react";

import { PatternA, PatternB, PatternC, PatternD, PatternE, PatternF, PatternG, PatternH } from "./Patterns";
import Button from "../UI/Button";
import { handleDownloadPDF } from "../../lib/utils";
import DrawPatternsDrawer from "./DrawPatternsDrawer/DrawPatternsDrawer";
import useCustomContext from "../../hooks/useCustomContext";

const Patterns = [PatternA, PatternB, PatternC, PatternD, PatternE, PatternF, PatternG, PatternH];

// import { patenPrompt } from "../../data/fake";
// console.log(patenPrompt);

const Preview = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const { selectedPatternIndex, setSelectedPatternIndex } = useCustomContext();

  const Component = Patterns[selectedPatternIndex];

  const handleSelectedNewPattern = (index: number) => {
    setSelectedPatternIndex(index);
  };

  return (
    <div className="flex justify-center items-start px-6 py-7 max-h-[330mm] w-full">
      <div ref={elementRef} className="resume-container shadow">
        {<Component />}
      </div>
      <div className="flex text-xs flex-col gap-10 fixed z-10 top-4 right-5">
        <Button cssClass="w-18 px-1" onClick={() => setIsOpenDrawer((p) => !p)}>
          Show More
        </Button>
        <Button cssClass="w-18 px-1" onClick={() => handleDownloadPDF(elementRef.current)}>
          Download PDF
        </Button>
      </div>

      <DrawPatternsDrawer
        isOpen={isOpenDrawer}
        onClose={() => setIsOpenDrawer(false)}
        Patterns={Patterns}
        onSelect={handleSelectedNewPattern}
      />
    </div>
  );
};

export default Preview;
