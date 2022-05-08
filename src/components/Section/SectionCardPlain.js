import React from "react";

function SectionCardPlain(props) {
  const {
    description,
    descriptionColor,
    headline: title,
    headlineColor: titleColor = "",
  } = props;
  console.log(props);
  return (
    <>
      <h2 className={`{${titleColor} ? text--color--${titleColor} : ''}`}>
        {title}
      </h2>
      <p
        className={`{${descriptionColor} ? text--color--${descriptionColor} : ''}`}
      >
        <strong>{description}</strong>
      </p>
    </>
  );
}

export default SectionCardPlain;
