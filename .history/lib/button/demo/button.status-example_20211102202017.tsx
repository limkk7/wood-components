import React from "react";
import { Button } from "wood-components";

const ButtonExample: React.FC = () => {
  return (
    <>
      <Button>button</Button>
      <Button theme="link" className="hi">
        hi
      </Button>
      <Button theme="text">hi</Button>
    </>
  );
};

export default ButtonExample;
