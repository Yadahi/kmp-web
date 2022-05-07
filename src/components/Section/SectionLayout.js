import React from "react";

function SectionLayout(props) {
  const [left, right] = props.children;
  return (
    <>
      <div className="layout__section section">
        <div className="section_left">{left}</div>
        <div className="section_right">{right}</div>
      </div>
    </>
  );
}

export default SectionLayout;
