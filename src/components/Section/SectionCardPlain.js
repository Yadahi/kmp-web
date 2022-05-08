import React from "react";

function SectionCardPlain(props) {
  const { description } = props;
  return (
    <>
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </>
  );
}

export default SectionCardPlain;
