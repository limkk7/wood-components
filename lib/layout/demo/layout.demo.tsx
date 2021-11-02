import LayoutExample from "./layout.example";
import React from "react";
import Demo from "demo";

const LayoutDemo = () => {
  return (
    <div>
      <h1>Layout布局</h1>
      <section>协助进行页面级整体布局。</section>
      <h2>何时使用</h2>
      <section>快速布局时。</section>
      <h2>代码示例</h2>
      <Demo
        code={require("!!raw-loader!./layout.example.tsx").default}
        description="典型的页面布局。"
      >
        <LayoutExample />
      </Demo>
    </div>
  );
};

export default LayoutDemo;
