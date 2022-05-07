import React from "react";
import SectionCardText from "../Section/SectionCardText";
import SectionCardMedia from "./SectionCardMedia";

function SectionLayout(props) {
  const { reverse, img, ...textObj } = props;
  console.log(img);
  console.log(textObj);
  return (
    <div className="layout">
      <div className="layout__inner">
        <div
          className={`layout__section section ${
            reverse ? "layout__section--reverse" : ""
          }`}
        >
          <div className="section__left">
            <SectionCardText {...textObj} />
          </div>
          <div className="section__right">
            <SectionCardMedia img={img} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionLayout;
