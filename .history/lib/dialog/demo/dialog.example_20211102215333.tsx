import * as React from "react";
import { useState } from "react";
import { alert, confirm, modal, Dialog, Button } from "wood-components";

export default () => {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  return (
    <>
      <div>
        <h2>1</h2>
        <Button onClick={() => setX(!x)}>show Modal</Button>
        <Dialog
          onClose={() => setX(!x)}
          visible={x}
          closeMark
          title={<div style={{ textAlign: "center" }}>Modal</div>}
          describe={<div style={{ textAlign: "center" }}>THIS IS MODAL</div>}
          buttons={[
            <button onClick={() => setX(false)}>cancel</button>,
            <button>submit</button>,
          ]}
        >
          <div>Some contents...</div>
        </Dialog>
      </div>
      <div>
        <h2>2</h2>
        <Button onClick={() => setY(!y)}>show Modal</Button>
        <Dialog
          onClose={() => setY(!y)}
          visible={y}
          closeMark={false}
          buttons={[
            <button onClick={() => setY(false)}>cancel</button>,
            <button onClick={() => setY(false)}>submit</button>,
          ]}
        >
          <div>Some contents...</div>
        </Dialog>
      </div>
    </>
  );
};
