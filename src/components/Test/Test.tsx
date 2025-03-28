import React, { useState } from "react";

const EditorJSONPreview = () => {
  const listHTML = "<ul><li><p>dsadasdas</p></li><li><p>dasd</p></li><li><p>dasdasd</p></li><li><p>dasda</p></li></ul>";

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{ __html: listHTML }}
        className="list-disc pl-5 space-y-2"
        style={{ listStyleType: "circle!important" }}
      />
      <ul className="list-disc">
        <li>Now this is a story all about how, my life got flipped-turned upside down</li>
      </ul>
      <ol className="list-decimal">
        <li>Now this is a story all about how, my life got flipped-turned upside down</li>
      </ol>
      <ul className="list-none">
        <li>Now this is a story all about how, my life got flipped-turned upside down</li>
      </ul>
    </div>
  );
};

const Test = () => {
  return <EditorJSONPreview />;
};

export default Test;
