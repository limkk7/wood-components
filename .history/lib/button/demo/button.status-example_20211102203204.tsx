import React from "react";
import { Button } from "wood-components";

const ButtonExample: React.FC = () => {
  return (
    <>
      <Button disabled>button</Button>
      <Button loading>button</Button>
      <Button theme="text">hi</Button>
    </>
  );
};

export default ButtonExample;
