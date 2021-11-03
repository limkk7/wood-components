import * as React from "react";
import { useState } from "react";
import { Dialog, Button } from "wood-components";

export default () => {
  const [codeVisible, setCodeVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setCodeVisible(!codeVisible)}>show Modal</Button>
      <Dialog
        onClose={() => setCodeVisible(!codeVisible)}
        visible={codeVisible}
        title={<div style={{ textAlign: "center" }}>Modal</div>}
        describe={<div style={{ textAlign: "center" }}>THIS IS MODAL</div>}
        buttons={[
          <button onClick={() => setCodeVisible(false)}>cancel</button>,
          <button onClick={() => setCodeVisible(false)}>submit</button>,
        ]}
      >
        <div>Some contents...</div>
      </Dialog>
      <Button onClick={() => setVisible(!visible)}>show Modal</Button>
      <Dialog
        onClose={() => setVisible(!visible)}
        visible={visible}
        closeMark={false}
        buttons={[
          <button onClick={() => setVisible(false)}>cancel</button>,
          <button onClick={() => setVisible(false)}>submit</button>,
        ]}
      >
        <div>Some contents...</div>
      </Dialog>
    </>
  );
};
