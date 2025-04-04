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
  return (
    <div>
      Test
      <Draggable>
        <div className="w-20 h-20 bg-red-400">Hello </div>
      </Draggable>
    </div>
  );
};

export default Test;

interface DraggableProps {
  children: React.ReactNode;
  initialPosition?: { x: number; y: number };
}

const Draggable: React.FC<DraggableProps> = ({ children, initialPosition = { x: 0, y: 0 } }) => {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("test dragging");
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    dragStartPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - dragStartPos.current.x;
    const deltaY = e.clientY - dragStartPos.current.y;

    setPosition((prevPosition) => ({
      x: prevPosition.x + deltaX,
      y: prevPosition.y + deltaY,
    }));

    dragStartPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={elementRef}
      style={{
        position: "absolute",
        transform: `translate(${position.x}px, ${position.y}px)`,
        cursor: "grab",
        userSelect: "none",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // Stop dragging if mouse leaves the element
    >
      {children}
    </div>
  );
};
