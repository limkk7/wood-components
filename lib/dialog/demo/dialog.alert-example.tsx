import * as React from "react";
import { alert, Button } from "wood-components";

export default () => {
  return <Button onClick={() => alert("hah, success!", "确定")}>alert</Button>;
};
