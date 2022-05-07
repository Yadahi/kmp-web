import { ReactComponent as TextSvg } from "../../images/icons/text.svg";
import { ReactComponent as LogoSvg } from "../../images/icons/logo.svg";

import React from "react";

function LogoIcon() {
  return (
    <div className="breaker-element">
      <LogoSvg />
    </div>
  );
}

function TextIcon() {
  return (
    <div className="breaker-element">
      <TextSvg />
    </div>
  );
}

export { LogoIcon, TextIcon };
