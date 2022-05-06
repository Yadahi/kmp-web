import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./scss/app.scss";
import SimpleReactLightBox from "simple-react-lightbox";

ReactDOM.render(
  <SimpleReactLightBox>
    <App />
  </SimpleReactLightBox>,
  document.getElementById("root")
);
