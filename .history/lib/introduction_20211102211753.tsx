import React from "react";

const Introduction = () => {
  return (
    <div>
      <h1>wood-components</h1>
      <section>
        wood-components 是一套基于 React
        的组件库，色彩、样式的设计参考了其他组件库。
      </section>

      <h1>使用 TypeScript</h1>
      <section>
        TypeScript提供了静态类型检查，让开发人员可以在代码运行之前识别某些类型问题。
      </section>
      <h1>没有额外依赖</h1>
      <section>
        wood-components 只依赖 React、ReactDOM 两个核心库以及 PropTypes
        进行类型检查，没有其他外部依赖。
      </section>
    </div>
  );
};

export default Introduction;
