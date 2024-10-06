import React from "react";

const SectionHeader = ({ headerText }) => {
  return (
    <div>
      <h1 className="text-center text-5xl font-extralight mb-8">
        {headerText}
      </h1>
    </div>
  );
};

export default SectionHeader;
