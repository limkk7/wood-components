import React from "react";
import { Button } from "wood-components";

const ButtonExample: React.FC = () => {
  console.log(Button);
  return (
    <>
      <h1>示例1</h1>
      <Button onClick={() => alert(<div>xxx </div>)}>hello</Button>
      <Button theme="link">hi</Button>
      <Button theme="text">hi</Button>
    </>
  );
};

export default ButtonExample;
