import React from "react";

const Title = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-gray-800 dark:text-gray-100">{title}</h2>
      <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default Title;
