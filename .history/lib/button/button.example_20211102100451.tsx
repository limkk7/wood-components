import React from "react";
import { Button } from "./button";

const ButtonExample: React.FC = () => {
  console.log(Button);
  return (
    <>
      <h1>示例1</h1>
      <Button>hello</Button>
      <Button theme="link">hi</Button>
      <Button theme="text">hi</Button>
    </>
  );
};

export default ButtonExample;
