import DialogExample from "./button.theme-example";
import React from "react";
import Demo from "demo";

const DialogDemo = () => {
  return (
    <Demo
      code={require("!!raw-loader!./button.theme-example.tsx").default}
      description="按钮有四种类型：默认按钮、主要按钮、虚线按钮和危险按钮。"
    >
      <DialogExample />
    </Demo>
  );
};

export default DialogDemo;
