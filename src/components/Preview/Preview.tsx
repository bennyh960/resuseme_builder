import React, { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// import PatternB from "./Patterns/PatternB";

import { patenPrompt } from "../../data/fake";
import { PatternA, PatternB, PatternC, PatternD, PatternE, PatternF, PatternG, PatternH } from "./Patterns";
import Button from "../../UI/Button/Button";

const Patterns = [PatternA, PatternB, PatternC, PatternD, PatternE, PatternF, PatternG, PatternH];

type scaleOptions = "auto" | "original";

console.log(patenPrompt);
type ScaleType = { x: scaleOptions; y: scaleOptions };
const Preview = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [scalePdf] = useState<ScaleType>({ x: "original", y: "original" });

  const handleDownloadPDF = async () => {
    if (!elementRef.current) return;

    // Create canvas from the element
    const canvas = await html2canvas(elementRef.current, {
      scale: 4, // Higher scale for better quality
      useCORS: true,
      logging: false,
    });

    // Get dimensions
    const elementWidth = elementRef.current.offsetWidth;
    const elementHeight = elementRef.current.offsetHeight;

    // A4 dimensions in mm (210 × 297)
    const a4WidthInMm = 210;
    const a4HeightInMm = 297;

    // Convert px to mm (roughly 3.78px = 1mm)
    const pxToMm = 3.78;
    const elementWidthInMm = elementWidth / pxToMm;
    const elementHeightInMm = elementHeight / pxToMm;

    const customFormat = [a4WidthInMm, a4HeightInMm];

    if (scalePdf.x === "original") {
      customFormat[0] = elementWidthInMm;
    }

    if (scalePdf.y === "original") {
      customFormat[1] = elementHeightInMm;
    }

    const pdf = new jsPDF({
      orientation: elementWidthInMm > elementHeightInMm ? "landscape" : "portrait",
      unit: "mm",
      format: customFormat,
    });

    // Calculate scaling to fit content to A4
    const availableWidth = pdf.internal.pageSize.getWidth();
    const availableHeight = pdf.internal.pageSize.getHeight();

    // Scale to fit
    const scaleX = availableWidth / elementWidthInMm;
    const scaleY = availableHeight / elementHeightInMm;
    const scale = Math.min(scaleX, scaleY);

    // Add image to PDF, centered
    const scaledWidth = elementWidthInMm * scale;
    const scaledHeight = elementHeightInMm * scale;
    const x = (availableWidth - scaledWidth) / 2;
    const y = (availableHeight - scaledHeight) / 2;

    console.log({
      elementWidth,
      elementHeight,
      elementWidthInMm,
      elementHeightInMm,
      availableWidth,
      availableHeight,
      scale,
      scaleX,
      scaleY,
      scaledWidth,
      scaledHeight,
      x,
      y,
    });

    const selectedScaledWidth = scalePdf.x === "auto" ? scaledWidth : elementWidthInMm;
    const selectedScaledHight = scalePdf.y === "auto" ? scaledHeight : elementHeightInMm;

    const selectedX = scalePdf.x === "auto" ? x : 0;
    const selectedY = scalePdf.y === "auto" ? x : 0;

    pdf.addImage(
      canvas.toDataURL("image/png", 1.0),
      "PNG",
      selectedX,
      selectedY,
      selectedScaledWidth,
      selectedScaledHight
    );

    // Download the PDF
    pdf.save(`resume.pdf`);
  };

  const Component = Patterns[7];

  return (
    <div className="flex justify-center items-start px-6 py-7 max-h-[330mm] w-full">
      <div ref={elementRef} className="m-auto py-10 px-12 resume-container shadow">
        {<Component />}

        {/* <PatternB /> */}

        {/* <PatternC /> */}

        {/* <PatternD /> */}
      </div>
      <Button cssClass="fixed z-10 top-4 right-5" onClick={handleDownloadPDF}>
        Download PDF
      </Button>
    </div>
  );
};

export default Preview;
