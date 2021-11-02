import React, { useState } from "react";
import { Input } from "wood-components";

const SwitchExample: React.FC = () => {
  const [input, setInput] = useState("hah");
  return (
    <>
      <Input value="default value" disabled />
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled
      />
    </>
  );
};

export default SwitchExample;
