import DialogExample from "./button.theme-example";
import React from "react";
import Demo from "demo";

const DialogDemo = () => {
  return (
    <Demo code={require("!!raw-loader!./button.theme-example.tsx").default}>
      <DialogExample />
    </Demo>
  );
};

export default DialogDemo;
