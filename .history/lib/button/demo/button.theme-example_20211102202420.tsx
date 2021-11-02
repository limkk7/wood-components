import React from "react";
import { Button } from "wood-components";

const ButtonExample: React.FC = () => {
  return (
    <>
      <Button theme="primary" className="hello">
        primary button
      </Button>
      <Button>Button</Button>
      <Button theme="danger">Default</Button>
      <Button theme="link">Hello</Button>
      <Button theme="text">Hi</Button>
    </>
  );
};

export default ButtonExample;
