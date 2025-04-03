import { clsx, type ClassValue } from "clsx";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleDownloadPDF = async (element: HTMLDivElement | null) => {
  if (!element) return;

  // Create canvas from the element
  const canvas = await html2canvas(element, {
    scale: 4, // Higher scale for better quality
    useCORS: true,
    logging: false,
  });

  // Get dimensions
  const elementWidth = element.offsetWidth;
  const elementHeight = element.offsetHeight;

  // A4 dimensions in mm (210 × 297)
  const a4WidthInMm = 210;
  const a4HeightInMm = 297;

  // Convert px to mm (roughly 3.78px = 1mm)
  const pxToMm = 3.78;
  const elementWidthInMm = elementWidth / pxToMm;
  const elementHeightInMm = elementHeight / pxToMm;

  const customFormat = [a4WidthInMm, a4HeightInMm];

  customFormat[0] = elementWidthInMm;
  customFormat[1] = elementHeightInMm;

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

  const selectedScaledWidth = elementWidthInMm;
  const selectedScaledHight = elementHeightInMm;

  const selectedX = 0;
  const selectedY = 0;

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
