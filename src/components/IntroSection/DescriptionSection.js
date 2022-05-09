import React from "react";
import { LogoIcon, TextIcon } from "../objects/LogoIcons";

function DescriptionSection(props) {
  const { intro, introEnglish } = props;
  return (
    <div className="about__header">
      <img class="about__img" src="../../images/aboutus.png" />

      <p
        className="about__description padding-top-1"
        dangerouslySetInnerHTML={{ __html: intro.annotation }}
      />
      <p>&nbsp;</p>
      <p
        className="about__description"
        dangerouslySetInnerHTML={{ __html: intro.description }}
      />
      <p>&nbsp;</p>
      <p
        className="about__description"
        dangerouslySetInnerHTML={{ __html: intro.mission }}
      />
      <p>&nbsp;</p>
      <div className="display-flex justify--content--center ">
        <LogoIcon color="gl-red" size="big" />
        <TextIcon color="gl-red" size="big" padding="padding-left-1" />
      </div>
      <p
        className="about__description padding-top-1 padding-bottom-1"
        dangerouslySetInnerHTML={{ __html: intro.logoDesc }}
      />
      <h3 className="text--center text--color--tertiary padding-top-1">
        English
      </h3>
      <p
        className="about__description padding-top-1"
        dangerouslySetInnerHTML={{ __html: introEnglish.annotation }}
      />
      <p>&nbsp;</p>
      <p
        className="about__description padding-bottom-1"
        dangerouslySetInnerHTML={{ __html: introEnglish.description }}
      />
    </div>
  );
}

export default DescriptionSection;
