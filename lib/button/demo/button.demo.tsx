import ButtonExample from "./button.theme-example";
import ButtonStatusExample from "./button.status-example";
import React from "react";
import Demo from "demo";

const ButtonDemo = () => {
  return (
    <div>
      <h1>Button 按钮</h1>
      <section> 点击以开始即时操作。</section>

      <h2>何时使用</h2>
      <section> 响应用户点击行为，触发相应业务逻辑。</section>
      <h2>代码示例</h2>
      <Demo
        code={require("!!raw-loader!./button.theme-example.tsx").default}
        description="主按钮、次按钮、虚线按钮、文本按钮和链接按钮。"
      >
        <ButtonExample />
      </Demo>
      <Demo
        code={require("!!raw-loader!./button.status-example.tsx").default}
        description="按钮有四种类型：默认按钮、主要按钮、虚线按钮和危险按钮。"
      >
        <ButtonStatusExample />
      </Demo>
    </div>
  );
};

export default ButtonDemo;
