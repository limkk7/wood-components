import * as React from "react";
import hljs from "highlight.js";
import { useState, useEffect } from "react";
import { Button } from "wood-components";
import "highlight.js/styles/dark.css";
import "./demo.scss";
interface Props {
  code: string;
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
    <div className="wood-demo" style={{ border: "1px solid blue" }}>
      <div style={{ border: "1px solid green" }}>{props.children}</div>
      <div style={{ border: "1px solid red" }}>
        <Button onClick={() => setCodeVisible(!codeVisible)}>查看代码</Button>
        <div className={codeVisible ? "wood-show-code " : "wood-hidden-code"}>
          <pre
            className="language-jsx"
            style={{
              padding: 25,
              borderRadius: "0 0 6px 6px",
              overflow: "auto",
              width: 0,
              flexGrow: 1,
            }}
          >
            <code>{props.code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Demo;
