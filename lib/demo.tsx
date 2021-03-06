import * as React from "react";
import hljs from "highlight.js";
import { useState, useEffect } from "react";
import { Button } from "wood-components";
import "highlight.js/styles/dark.css";
import "./demo.scss";
interface Props {
  code: string;
  description?: string;
}

const Demo: React.FC<Props> = (props) => {
  const [codeVisible, setCodeVisible] = useState(false);
  useEffect(() => {
    document.querySelectorAll("pre").forEach((block) => {
      try {
        hljs.highlightBlock(block);
      } catch (e) {
        console.log(e);
      }
    });
  });
  return (
    <div className="demo">
      <div className="container">{props.children}</div>
      <div className="code-example-box">
        <div
          className={codeVisible ? "code-description show" : "code-description"}
        >
          <span>{props.description}</span>
          <Button onClick={() => setCodeVisible(!codeVisible)}>
            {codeVisible ? "隐藏代码" : "查看代码"}
          </Button>
        </div>
        <div
          className={codeVisible ? "code-example show" : "code-example hidden"}
        >
          <div className="wrapper">
            <pre className="language-jsx pre">
              <code>{props.code}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
