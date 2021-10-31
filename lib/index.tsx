import ReactDOM from "react-dom";
import React from "react";
import Icon from "./icon/icon";
const fn: React.MouseEventHandler = (e) => {};
ReactDOM.render(
  <div>
    <Icon name="wood" onClick={fn} />
  </div>,
  document.querySelector("#root")
);
