import InputExample from "./input.example";
import InputStatusExample from "./input.status-example";
import React from "react";
import Demo from "demo";

const InputDemo = () => {
  return (
    <div>
      <h1>Input 输入框</h1>
      <section>用于输入内容的基础表单组件。</section>

      <h2>何时使用</h2>
      <section>需要用户输入内容时。</section>
      <h2>代码示例</h2>
      <Demo
        code={require("!!raw-loader!./input.example.tsx").default}
        description="基本用法，非受控组件 和 受控组件。"
      >
        <InputExample />
      </Demo>
      <Demo
        code={require("!!raw-loader!./input.status-example.tsx").default}
        description="禁用状态。"
      >
        <InputStatusExample />
      </Demo>
    </div>
  );
};

export default InputDemo;
