import { Icon } from "../wood-components";
import * as React from "react";
import { scopedClassMaker } from "../helpers/classes";
import "./dialog.scss";
import ReactDOM from "react-dom";
import { ReactNode, cloneElement, ReactElement } from "react";

interface Props {
  visible?: boolean;
  enableMask?: boolean;
  buttons?: Array<ReactElement>;
  closeMark?: boolean;
  title?: ReactNode;
  describe?: ReactNode;
  closeOnClickMask?: boolean;
  onClose?: () => void;
}
const scopedClass = scopedClassMaker("w-ui-dialog");
const sc = scopedClass;

const Dialog: React.FC<Props> = ({
  onClose,
  visible,
  title,
  describe,
  children,
  buttons,
  closeMark,
  closeOnClickMask = true,
}) => {
  const onClickClose = () => {
    if (onClose) {
      onClose();
    }
  };
  const onClickMask = () => {
    if (closeOnClickMask && onClose) {
      onClose();
    }
  };
  const portalNode = visible && (
    <>
      <div className={sc("mask")} onClick={onClickMask}></div>
      <div className="w-ui-dialog">
        {closeMark ? (
          <div className={sc("close")} onClick={onClickClose}>
            <Icon name="close"></Icon>
          </div>
        ) : null}
        <header className={sc("header")}>{title}</header>
        {describe && <div className={sc("describe")}>{describe}</div>}
        <main className={sc("main")}>{children}</main>
        {buttons && buttons.length > 0 && (
          <footer className={sc("footer")}>
            {buttons.map((button, index) =>
              cloneElement(button, { key: index })
            )}
          </footer>
        )}
      </div>
    </>
  );
  return ReactDOM.createPortal(portalNode, document.body);
};

Dialog.defaultProps = {
  closeMark: true,
  closeOnClickMask: true,
  enableMask: true,
};

const modal = (
  content: ReactNode,
  buttons?: Array<ReactElement>,
  onClose?: () => void
) => {
  const close = () => {
    //使用内部state看看
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };

  const component = (
    <Dialog
      visible={true}
      onClose={() => {
        close();
        onClose && onClose();
      }}
      buttons={buttons}
    >
      {content}
    </Dialog>
  );
  const div = document.createElement("div");
  document.body.appendChild(div);
  ReactDOM.render(component, div);
  return close;
};

const alert = (content: ReactNode, buttonText = "Ok") => {
  const onClose = modal(content, [
    <button onClick={() => onClose()}>{buttonText}</button>,
  ]);
};

const confirm = (
  content: ReactNode,
  resolve?: () => void,
  reject?: () => void,
  yesText = "Yes",
  noText = "No"
) => {
  const onYes = () => {
    resolve && resolve();
    onClose();
  };
  const onNo = () => {
    reject && reject();
    onClose();
  };
  const buttons = [
    <button onClick={onNo}>{noText}</button>,
    <button onClick={onYes}>{yesText}</button>,
  ];
  const onClose = modal(content, buttons, reject);
};

export { alert, confirm, modal, Dialog };
