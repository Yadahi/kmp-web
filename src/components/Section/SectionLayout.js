import React from "react";
import SectionCardText from "../Section/SectionCardText";
import SectionCardMedia from "./SectionCardMedia";

function SectionLayout(props) {
  const { reverse, img, bgColor = "gl-white", ...textObj } = props;
  console.log(img);
  console.log(textObj);
  return (
    <div className={`layout background--bg-tints--${bgColor}`}>
      <div className="layout__inner padding-top-3 padding-bottom-3">
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
