import React from "react";
import { Button } from "wood-components";

const ButtonExample: React.FC = () => {
  return (
    <>
      <Button disabled theme="text">
        button
      </Button>
      <Button disabled>button</Button>
      <Button loading>hi</Button>
    </>
  );
};

export default ButtonExample;
