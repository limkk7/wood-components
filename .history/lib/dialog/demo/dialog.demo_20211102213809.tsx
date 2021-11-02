import DialogExample from "./dialog.example";
import AlertExample from "./dialog.alert-example";
import React from "react";
import Demo from "demo";

const DialogDemo = () => {
  return (
    <div>
      <Demo code={require("!!raw-loader!./dialog.example.tsx").default}>
        <DialogExample />
      </Demo>
      <Demo code={require("!!raw-loader!./dialog.alert-example.tsx").default}>
        <AlertExample />
      </Demo>
    </div>
  );
};

export default DialogDemo;
