import React from "react";

function SectionCardPlain(props) {
  console.log(props);
  const { description } = props;
  return (
    <>
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </>
  );
}

export default SectionCardPlain;
