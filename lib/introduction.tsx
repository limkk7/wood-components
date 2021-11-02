import React from "react";

const Introduction = () => {
  return (
    <div>
      <h1>wood-components</h1>
      <section>
        wood-components 是一套基于 React
        的组件库，色彩、样式的设计参考了其他组件库。
      </section>

      <h2>使用 TypeScript</h2>
      <section>
        TypeScript提供了静态类型检查，让开发人员可以在代码运行前就识别某些类型问题。
      </section>
      <h2>没有额外依赖</h2>
      <section>
        wood-components 只依赖 React、ReactDOM 两个核心库以及 PropTypes
        进行类型检查，没有其他外部依赖。
      </section>
      <h2>开始使用</h2>
      <section>$ npm i wood-components</section>
      <section>$ yarn add wood-components</section>
    </div>
  );
};

export default Introduction;
