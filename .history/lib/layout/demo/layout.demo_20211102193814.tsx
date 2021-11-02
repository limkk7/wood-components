import LayoutExample from "./layout.example";
import React from "react";
import Demo from "demo";

const LayoutDemo = () => {
  return (
    <div>
      <h1>Layout布局</h1>
      <section>协助进行页面级整体布局。</section>

      <h2>代码示例</h2>
      <Demo
        code={require("!!raw-loader!./layout.example.tsx").default}
        description="按钮有四种类型：默认按钮、主要按钮、虚线按钮和危险按钮。"
      >
        <LayoutExample />
      </Demo>
    </div>
  );
};

export default LayoutDemo;
