import * as React from "react";
import { confirm, Button } from "wood-components";

export default () => {
  return (
    <Button
      onClick={() =>
        confirm(
          "confirm",
          () => {
            console.log("hah");
          },
          () => {
            console.log("oh no");
          }
        )
      }
    >
      show confirm
    </Button>
  );
};
