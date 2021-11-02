import React, { useState } from "react";
import { Switch } from "wood-components";

const SwitchExample: React.FC = () => {
  const [state, setState] = useState(false);
  return (
    <>
      <Switch checked={state} diabled onChange={() => setState(!state)} />
    </>
  );
};

export default SwitchExample;
