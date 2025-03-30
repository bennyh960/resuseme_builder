import React, { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// import PatternB from "./Patterns/PatternB";

import PatternA from "./Patterns/PatternA";

import PatternB from "./Patterns/PatternB";
import PatternC from "./Patterns/PatternC";
import useLocalStorage from "../../hooks/useLocalStorage";
import PatternD from "./Patterns/PatternD";
import useCustomContext from "../../hooks/useCustomContext";

const patterns = [<PatternA />, <PatternB />, <PatternC />, <PatternD />];
const Preview = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    if (!elementRef.current) return;

    // Create canvas from the element
    const canvas = await html2canvas(elementRef.current, {
      scale: 2, // Higher scale for better quality
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

    console.log({ elementWidth, elementHeight, elementWidthInMm, elementHeightInMm });

    const pdf = new jsPDF({
      orientation: elementWidthInMm > elementHeightInMm ? "landscape" : "portrait",
      unit: "mm",
      format: "a4",
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

    pdf.addImage(canvas.toDataURL("image/png"), "PNG", x, y, scaledWidth, scaledHeight);

    // Download the PDF
    pdf.save(`resume.pdf`);
  };

  return (
    <div className="flex justify-center items-start p-6 max-h-[330mm] w-full">
      <div ref={elementRef} className="m-auto p-6 resume-container border">
        {patterns[0]}

        {/* <PatternB /> */}

        {/* <PatternC /> */}

        {/* <PatternD /> */}
      </div>
      <button className="fixed z-10 top-5 right-5 bg-red border" onClick={handleDownloadPDF}>
        Download PDF
      </button>
    </div>
  );
};

export default Preview;
