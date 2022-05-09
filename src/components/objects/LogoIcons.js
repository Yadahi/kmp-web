import { ReactComponent as TextSvg } from "../../images/icons/text.svg";
import { ReactComponent as LogoSvg } from "../../images/icons/logo.svg";

import React from "react";

function LogoIcon({ color = "gl-white", size = "" }) {
  return (
    <div className={`logo-icon logo-icon--color--${color} ${size}`}>
      <LogoSvg />
    </div>
  );
}

function TextIcon({ color = "gl-white", size = "", padding = "" }) {
  return (
    <div className={`logo-icon logo-icon--color--${color} ${size} ${padding}`}>
      <TextSvg />
    </div>
  );
}

export { LogoIcon, TextIcon };
