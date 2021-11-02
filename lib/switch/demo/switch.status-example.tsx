import React from "react";
import { Switch } from "wood-components";

const SwitchExample: React.FC = () => {
  return (
    <>
      <div>
        <Switch disabled />
      </div>
      <div>
        <Switch disabled checked />
      </div>
    </>
  );
};

export default SwitchExample;
