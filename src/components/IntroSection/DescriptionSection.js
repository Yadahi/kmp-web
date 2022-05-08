import React from "react";

function DescriptionSection(props) {
  const { intro, introEnglish } = props;
  console.log(intro);
  console.log(introEnglish);
  return (
    <div className="about__header">
      <img class="about__img" src="../../images/aboutus.png" />

      <p
        className="about__description padding-top-1"
        dangerouslySetInnerHTML={{ __html: intro.annotation }}
      />
      <p>&nbsp;</p>
      <p
        className="about__description padding-bottom-1"
        dangerouslySetInnerHTML={{ __html: intro.description }}
      />

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
