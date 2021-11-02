import * as React from "react";
import { alert, Button } from "wood-components";

export default () => {
  return <Button onClick={() => alert("warning!")}>show alert</Button>;
};
