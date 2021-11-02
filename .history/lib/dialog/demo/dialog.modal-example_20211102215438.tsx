import * as React from "react";
import { modal, Button } from "wood-components";

export default () => {
  return (
    <Button
      onClick={() => {
        const close = modal([
          <>
            <h1>hello</h1>
            <Button onClick={() => close()}>关闭</Button>
          </>,
        ]);
      }}
    >
      show modal
    </Button>
  );
};
