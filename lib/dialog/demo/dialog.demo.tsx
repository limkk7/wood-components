import DialogExample from "./dialog.example";
import AlertExample from "./dialog.alert-example";
import ConfirmExample from "./dialog.confirm-example";
import ModalExample from "./dialog.modal-example";
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
        description="通过 alert 快捷地弹出通知框"
        code={require("!!raw-loader!./dialog.alert-example.tsx").default}
      >
        <AlertExample />
      </Demo>
      <Demo
        description="通过 confirm 快捷地弹出确认框。"
        code={require("!!raw-loader!./dialog.confirm-example.tsx").default}
      >
        <ConfirmExample />
      </Demo>
      <Demo
        description="modal 框可以控制内部 onClose 的调用"
        code={require("!!raw-loader!./dialog.modal-example.tsx").default}
      >
        <ModalExample />
      </Demo>
    </div>
  );
};

export default DialogDemo;
