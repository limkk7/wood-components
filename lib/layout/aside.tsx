import React from "react";
import { scopedClassMaker } from "../helpers/classes";
const sc = scopedClassMaker("w-ui-layout");

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Aside: React.FC<Props> = ({ className, children, ...rest }) => {
  return (
    <div className={sc("aside", { extra: className })} {...rest}>
      {children}
    </div>
  );
};

export default Aside;
