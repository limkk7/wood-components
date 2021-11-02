import DialogExample from "./dialog.example";
import AlertExample from "./dialog.alert-example";
import React from "react";
import Demo from "demo";

const DialogDemo = () => {
  return (
    <div>
      <Demo
        description="一个基本的对话框，通过控制 visible 属性来显示/隐藏"
        code={require("!!raw-loader!./dialog.example.tsx").default}
      >
        <DialogExample />
      </Demo>
      <Demo
        description="通过 alert 简单的调用即可"
        code={require("!!raw-loader!./dialog.alert-example.tsx").default}
      >
        <AlertExample />
      </Demo>
    </div>
  );
};

export default DialogDemo;
