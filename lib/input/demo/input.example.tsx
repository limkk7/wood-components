import React, { useState, useRef } from "react";
import { Input } from "wood-components";

const InputExample: React.FC = () => {
  const [input, setInput] = useState("hah");
  const inputRef = useRef<HTMLInputElement>(null);
  if (inputRef.current) {
    console.log(inputRef.current.value);
  }
  return (
    <>
      <Input placeholder="input" ref={inputRef} />
      <Input value={input} onChange={(e) => setInput(e.target.value)} />
    </>
  );
};

export default InputExample;
