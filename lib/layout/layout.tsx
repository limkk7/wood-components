import React from "react";
import { scopedClassMaker } from "../helpers/classes";
import Aside from "./aside";
import "./layout.scss";
const sc = scopedClassMaker("w-ui-layout");

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Layout: React.FC<Props> = ({ className, children, ...rest }) => {
  const hasAside =
    Array.isArray(children) &&
    children.some((node) => React.isValidElement(node) && node.type === Aside);
  return (
    <div className={sc({ "": true, hasAside }, { extra: className })} {...rest}>
      {children}
    </div>
  );
};

export default Layout;
