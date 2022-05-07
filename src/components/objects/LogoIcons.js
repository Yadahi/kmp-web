import { ReactComponent as TextSvg } from "../../images/icons/text.svg";
import { ReactComponent as LogoSvg } from "../../images/icons/logo.svg";

import React from "react";

function LogoIcon({ color = "white" }) {
  return (
    <div className={`logo-icon--color--${color}`}>
      <LogoSvg />
    </div>
  );
}

function TextIcon({ color = "white" }) {
  return (
    <div className={`logo-icon--color--${color}`}>
      <TextSvg />
    </div>
  );
}

export { LogoIcon, TextIcon };
