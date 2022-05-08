import "./IntroDescElement.scss";

import React from "react";

function DescriptionSection(props) {
  const { annotation, description } = props;
  return (
    <div className="about__header">
      <img class="about__header--img" src="../../images/aboutus.png" />
      {/* <h2>{intro.title}</h2> */}
      <p dangerouslySetInnerHTML={{ __html: annotation }} />
      <p>&nbsp;</p>
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
}

export default DescriptionSection;
