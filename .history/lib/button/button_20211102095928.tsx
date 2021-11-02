import { scopedClassMaker } from "helpers/classes";
import React from "react";
const sc = scopedClassMaker("w-ui-button");
type Props = {
  theme?: string;
};

const Button: React.FC<Props> = ({ theme = "", children, ...rest }) => {
  console.log(sc(theme));
  return (
    <button className={sc(theme)} {...rest}>
      {children}
    </button>
  );
};

export { Button };
