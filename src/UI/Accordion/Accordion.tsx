import { ReactNode, useState } from "react";

interface AccordionItemProps {
  title: string | ReactNode;
  children: ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen = false, onToggle }) => {
  return (
    <div className="border border-gray-200 rounded-md mb-2">
      <div
        className="flex justify-between items-center w-full px-4 py-3 text-left font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <>{title}</>
        <svg
          className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div
        className={`transition-all duration-200 ${
          isOpen ? "max-h-fit overflow-auto py-2 px-4" : "max-h-0 overflow-hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

interface AccordionProps {
  items: Array<{
    id: string | number;
    title: string | React.ReactNode;
    content: React.ReactNode;
  }>;
  allowMultiple?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ items, allowMultiple = false }) => {
  const [openItems, setOpenItems] = useState<(string | number)[]>([]);

  const handleToggle = (id: string | number) => {
    if (allowMultiple) {
      setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className="w-full">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          isOpen={openItems.includes(item.id)}
          onToggle={() => handleToggle(item.id)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export { Accordion, AccordionItem };
