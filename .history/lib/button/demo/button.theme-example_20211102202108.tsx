import React from "react";
import { Button } from "wood-components";

const ButtonExample: React.FC = () => {
  return (
    <>
      <Button theme="primary" className="hello">
        primary button
      </Button>
      <Button theme="default">default button</Button>
      <Button theme="danger">default button</Button>
      <Button theme="link">default button</Button>
      <Button theme="text">hi</Button>
    </>
  );
};

export default ButtonExample;
