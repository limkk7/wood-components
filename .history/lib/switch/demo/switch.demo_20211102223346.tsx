import SwitchExample from "./switch.example";
import SwitchStatusExample from "./switch.status-example";
import React from "react";
import Demo from "demo";

const switchDemo = () => {
  return (
    <div>
      <h1>Switch 开关</h1>
      <section>开关选择器。</section>

      <h2>何时使用</h2>
      <section>需要在两种状态之间切换时。</section>
      <h2>代码示例</h2>
      <Demo
        code={require("!!raw-loader!./switch.example.tsx").default}
        description="主按钮、次按钮、虚线按钮、文本按钮和链接按钮。"
      >
        <SwitchExample />
      </Demo>
      <Demo
        code={require("!!raw-loader!./switch.status-example.tsx").default}
        description="按钮有四种类型：默认按钮、主要按钮、虚线按钮和危险按钮。"
      >
        <SwitchStatusExample />
      </Demo>
    </div>
  );
};

export default switchDemo;
